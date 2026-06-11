# Community → GitHub Issues: setup

## 0. Make the existing buttons work (10 seconds, do this first)
Repo → Settings → General → Features → check **Issues**.
The three buttons on /community and the "recent requests" list work immediately.

## 1. Native GitHub issue forms (no backend, do today)
Commit the three files into the repo at this exact path:
    .github/ISSUE_TEMPLATE/feature_request.yml
    .github/ISSUE_TEMPLATE/bug_report.yml
    .github/ISSUE_TEMPLATE/config.yml
Result: github.com "New issue" shows structured forms with dropdowns and
required fields, auto-labeled enhancement/bug + needs-review.

## 2. On-site form (no GitHub account needed) — Cloudflare Worker
1. GitHub → Settings → Developer settings → Fine-grained tokens → Generate:
   - Repository access: ONLY mikecotrone/guardareWebSite
   - Permissions: Issues → Read and write. Nothing else. Set an expiry.
2. Cloudflare dashboard → Workers & Pages → Create Worker → paste worker.js → Deploy.
3. Worker → Settings → Variables → add Secret GITHUB_TOKEN = the token from step 1.
4. Copy the Worker URL (https://something.workers.dev).
5. In community.html, set:  var WORKER_URL = 'https://something.workers.dev';
   Commit + push. The form appears on /community automatically.

## 3. Your review gate
Every submission (form or GitHub) arrives labeled **needs-review**.
Triage in GitHub like any issue: keep/relabel/close. The site's
"recent requests" list shows open `enhancement` issues — remove that label
(or close) and it disappears from the site. To show ONLY items you've
approved, create an `approved` label and change `labels=enhancement` to
`labels=approved` in community.html's fetch URL.

## 4. Optional spam shield (recommended once the form is public)
Cloudflare → Turnstile → create a widget for guardare.io → add the
TURNSTILE_SECRET secret to the Worker. (The worker already supports it;
ask Claude to wire the widget into the form when you're ready.)
