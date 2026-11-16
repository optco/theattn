(function() {
  // Define the exact URLs of the two external JS files
  const scriptsToLoad = [
    'https://theattn.com/menu.js',
    'https://theattn.com/footer.js'
  ];

  scriptsToLoad.forEach(function(url) {
    // Prevent duplicate injection if the script is already on the page
    if (!document.querySelector('script[src="' + url + '"]')) {
      const script = document.createElement('script');
      script.src = url;
      script.async = true; 
      document.head.appendChild(script);
    }
  });
})();
/* ===== TheAttn view counter (self-contained) ===== */
(() => {
  if (window.__attnViews || location.hostname === 'localhost') return;
  window.__attnViews = true;

  const API = 'https://views.theattn.com';
  const fmt = (n, one, many) => ` · ${Number(n).toLocaleString('en-GB')} ${n === 1 ? one : many}`;

  // Run cb once the element exists (waits up to 5 seconds)
  const whenFound = (sel, cb, fallback) => {
    let tries = 0;
    const t = setInterval(() => {
      const el = document.querySelector(sel);
      if (el) { clearInterval(t); cb(el); }
      else if (++tries > 25) { clearInterval(t); if (fallback) fallback(); }
    }, 200);
  };

  const count = async (id, store, storeKey) => {
    let seen = false;
    try { seen = !!store.getItem(storeKey); } catch {}
    const r = await fetch(`${API}/?id=${id}`, { method: seen ? 'GET' : 'POST' });
    const { views } = await r.json();
    try { store.setItem(storeKey, '1'); } catch {}
    return views;
  };

  const start = () => {
    /* Site-wide visits: once per browser session, shown in the footer */
    (async () => {
      try {
        const views = await count('site', sessionStorage, 'site-counted');
        const show = host => {
          const s = document.createElement('span');
          s.textContent = fmt(views, 'visit', 'visits');
          host.append(s);
        };
        whenFound('.site-footer p', show, () => {
          // Page has no TheAttn footer: add a small line at the bottom
          const p = document.createElement('p');
          p.style.cssText = 'text-align:center;font:13px/1.5 sans-serif;color:#777;margin:24px 0';
          p.textContent = fmt(views, 'visit', 'visits').replace(/^ · /, '');
          document.body.append(p);
        });
      } catch {}
    })();

    /* Per-story views: only on pages named like 2611080225.html */
    const m = location.pathname.match(/(\d{10})(?:\.html)?\/?$/);
    if (m) {
      (async () => {
        try {
          const views = await count(m[1], localStorage, 'viewed:' + m[1]);
          whenFound('article.story .byline', byline => {
            const s = document.createElement('span');
            s.textContent = fmt(views, 'view', 'views');
            byline.append(s);
          });
        } catch {}
      })();
    }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
