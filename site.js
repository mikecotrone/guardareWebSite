document.documentElement.classList.add('js');
var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (rm) { document.querySelectorAll('video').forEach(function(v){ v.removeAttribute('autoplay'); v.pause(); }); }
var els = document.querySelectorAll('.card,.section-head,.tl-item,.timeline');
if (rm || !('IntersectionObserver' in window)) {
  els.forEach(function(el){ el.classList.add('vis'); });
} else {
  document.querySelectorAll('.tl-item').forEach(function(el,i){ el.style.transitionDelay = (i*140)+'ms'; });
  document.querySelectorAll('.grid').forEach(function(g){
    g.querySelectorAll('.card').forEach(function(c,i){ c.style.transitionDelay = (i*90)+'ms'; });
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('vis'); io.unobserve(e.target); } });
  }, {threshold:.12});
  els.forEach(function(el){ io.observe(el); });
}

var plx = [].slice.call(document.querySelectorAll('[data-plx]'));
if (plx.length && !rm && matchMedia('(pointer:fine)').matches) {
  var plxTick = false;
  var plxScroll = function(){
    if (plxTick) return; plxTick = true;
    requestAnimationFrame(function(){
      var y = window.scrollY || window.pageYOffset;
      plx.forEach(function(el){
        el.style.transform = 'translate3d(0,' + (y * parseFloat(el.getAttribute('data-plx'))) + 'px,0)';
      });
      plxTick = false;
    });
  };
  addEventListener('scroll', plxScroll, {passive:true});
  plxScroll();
}
