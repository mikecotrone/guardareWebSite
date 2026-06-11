/**
 * Guardare community request proxy — Cloudflare Worker
 *
 * Receives form posts from guardare.io/community and creates GitHub issues
 * labeled "needs-review" so nothing appears anywhere without Mike's triage.
 *
 * Secrets to set in the Worker (Settings → Variables → Secrets):
 *   GITHUB_TOKEN      fine-grained PAT, ONLY repo mikecotrone/guardareWebSite,
 *                     ONLY permission: Issues → Read and write
 *   TURNSTILE_SECRET  (optional) Cloudflare Turnstile secret key for spam protection
 */

const REPO = "mikecotrone/guardareWebSite";
const ALLOWED_ORIGINS = ["https://guardare.io", "https://www.guardare.io"];

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ ok: false, error: "POST only" }, 405, cors);

    let data;
    try { data = await request.json(); } catch { return json({ ok: false, error: "bad json" }, 400, cors); }

    const type = data.type === "bug" ? "bug" : "enhancement";
    const title = String(data.title || "").trim().slice(0, 140);
    const details = String(data.details || "").trim().slice(0, 4000);
    const name = String(data.name || "").trim().slice(0, 80);

    if (title.length < 8 || details.length < 20)
      return json({ ok: false, error: "Please give the request a short title and a few sentences of detail." }, 422, cors);

    // Optional Turnstile verification (skipped if no secret configured)
    if (env.TURNSTILE_SECRET) {
      const v = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: env.TURNSTILE_SECRET, response: data.ts_token || "" }),
      }).then(r => r.json()).catch(() => ({ success: false }));
      if (!v.success) return json({ ok: false, error: "Spam check failed — please retry." }, 403, cors);
    }

    const body = [
      details,
      "",
      "---",
      `_Submitted via guardare.io community form${name ? " by **" + name + "**" : ""}._`,
    ].join("\n");

    const gh = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
        "Accept": "application/vnd.github+json",
        "User-Agent": "guardare-community-form",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: (type === "bug" ? "[Bug] " : "[Feature] ") + title,
        body,
        labels: [type, "needs-review", "website"],
      }),
    });

    if (!gh.ok) {
      const t = await gh.text();
      return json({ ok: false, error: "GitHub rejected the request (" + gh.status + ")", detail: t.slice(0, 200) }, 502, cors);
    }
    const issue = await gh.json();
    return json({ ok: true, number: issue.number, url: issue.html_url }, 201, cors);
  },
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });
}
