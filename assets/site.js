// returns an array of topics whether the entry uses "topics" or the old "topic"
function topicsOf(s) {
  const t = s.topics ?? s.topic ?? [];
  return (Array.isArray(t) ? t : String(t).split(','))
    .map(x => x.trim())
    .filter(Boolean);
}
(() => {
  const TOPICS = ['Breaking','Science','Space','Technology'];
  const params = new URLSearchParams(location.search);
  const activeTopic = (params.get('t') || '').toLowerCase();

  const esc = s => String(s ?? '').replace(/[&<>"']/g,
    c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ago = iso => {
    const m = Math.round((Date.now() - new Date(iso)) / 60000);
    if (m < 1) return 'Just now';
    if (m < 60) return `${m} min ago`;
    if (m < 1440) return `${Math.floor(m / 60)} hr ago`;
    return new Date(iso).toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
  };

  /* ----- Header ----- */
  const hdr = document.getElementById('site-header');
  if (hdr) hdr.innerHTML = `
    <div class="datebar"><div class="wrap">${new Date().toLocaleDateString('en-GB',
      {weekday:'long', day:'numeric', month:'long', year:'numeric'})}</div></div>
    <header class="masthead"><div class="wrap"><link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://gstatic.com" crossorigin>
<link href="https://googleapis.com" rel="stylesheet">
      <a class="logo" href="/" aria-label="TheAttn home"><img src="/assets/logo.png" alt="TheAttn" height="34"></a>
      <nav class="topics" aria-label="Topics">${TOPICS.map(t => {
        const k = t.toLowerCase();
        return `<a href="/topic.html?t=${k}" class="${k === 'breaking' ? 'is-breaking ' : ''}${k === activeTopic ? 'is-active' : ''}">${t}</a>`;
      }).join('')}</nav>
    </div></header>`;

  /* ----- Footer ----- */
  const ftr = document.getElementById('site-footer');
  if (ftr) ftr.innerHTML = `
    <footer class="site-footer"><div class="wrap">
      <nav aria-label="Footer">${TOPICS.map(t => `<a href="/topic.html?t=${t.toLowerCase()}">${t}</a>`).join('')}</nav>
      <p>&copy; ${new Date().getFullYear()} TheAttn. All rights reserved.</p>
    </div></footer>`;
    /* ----- Share buttons ----- */
  const bylineEl = document.querySelector('article.story .byline');
  if (bylineEl) {
    // load Font Awesome once
    if (!document.querySelector('link[data-fa]')) {
      const fa = document.createElement('link');
      fa.rel = 'stylesheet';
      fa.dataset.fa = '1';
      fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
      document.head.appendChild(fa);
    }
    const pageUrl = location.origin + location.pathname;
    const pageTitle = document.querySelector('article.story h1')?.textContent.trim() || document.title;
    const u = encodeURIComponent(pageUrl), t = encodeURIComponent(pageTitle);
    const links = [
      ['X', 'fa-brands fa-x-twitter', `https://twitter.com/intent/tweet?url=${u}&text=${t}`],
      ['Facebook', 'fa-brands fa-facebook-f', `https://www.facebook.com/sharer/sharer.php?u=${u}`],
      ['WhatsApp', 'fa-brands fa-whatsapp', `https://wa.me/?text=${t}%20${u}`],
      ['LinkedIn', 'fa-brands fa-linkedin-in', `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
      ['Email', 'fa-solid fa-envelope', `mailto:?subject=${t}&body=${u}`]
    ];
    const bar = document.createElement('div');
    bar.className = 'share';
    bar.setAttribute('aria-label', 'Share this story');
    bar.innerHTML = '<span>Share</span>'
      + (navigator.share ? '<button type="button" class="share-native" aria-label="Share" title="Share"><i class="fa-solid fa-share-nodes"></i></button>' : '')
      + links.map(([n, icon, h]) => `<a href="${h}" aria-label="Share on ${n}" title="${n}"${n === 'Email' ? '' : ' target="_blank" rel="noopener"'}><i class="${icon}"></i></a>`).join('')
      + '<button type="button" class="share-copy" aria-label="Copy link" title="Copy link"><i class="fa-solid fa-link"></i></button>';
    bylineEl.after(bar);

    bar.querySelector('.share-native')?.addEventListener('click', () =>
      navigator.share({ title: pageTitle, url: pageUrl }).catch(() => {}));
    const copyBtn = bar.querySelector('.share-copy');
    copyBtn.addEventListener('click', async () => {
      const icon = copyBtn.querySelector('i');
      try {
        await navigator.clipboard.writeText(pageUrl);
        icon.className = 'fa-solid fa-check';
      } catch {
        prompt('Copy this link:', pageUrl);
      }
      setTimeout(() => { icon.className = 'fa-solid fa-link'; }, 2000);
    });
  }
  /* ----- More stories (end of story pages) ----- */
  const story = document.querySelector('article.story');
  if (story) (async () => {
    const m = location.pathname.match(/(\d{10})\.html$/);
    const here = m ? m[1] : '';
    const pageTopics = (document.querySelector('meta[name="topic"]')?.content || '')
      .toLowerCase().split(',').map(x => x.trim()).filter(Boolean);
    let all;
    try { all = await (await fetch('/news/manifest.json')).json(); } catch { return; }
    all.sort((a, b) => new Date(b.date) - new Date(a.date));
    const others = all.filter(s => s.id !== here);
    const same = others.filter(s => topicsOf(s).some(t => pageTopics.includes(t.toLowerCase())));
    const picks = [...same, ...others.filter(s => !same.includes(s))].slice(0, 6);
    if (!picks.length) return;
    const sec = document.createElement('section');
    sec.className = 'more-stories';
    sec.innerHTML = `<h2 class="block-title">More stories</h2><div class="mini-grid">${picks.map(s =>
      `<article class="mini${s.image ? '' : ' no-img'}"><a href="${esc(s.url)}">${s.image ? `<img src="${esc(s.image)}" alt="" loading="lazy">` : ''}
        <div><span class="tag">${esc(topicsOf(s)[0])}</span><h3>${esc(s.title)}</h3><time datetime="${esc(s.date)}">${ago(s.date)}</time></div></a></article>`).join('')}</div>`;
    story.after(sec);
  })();

  /* ----- Front page / topic page ----- */
  const front = document.getElementById('front');
  if (!front) return;

  const meta = s => `<div class="meta">${s.breaking
    ? '<span class="tag-breaking">Breaking</span>'
    : `<span class="tag">${esc(topicsOf(s)[0])}</span>`}<time datetime="${esc(s.date)}">${ago(s.date)}</time></div>`;
  const img = s => s.image ? `<img src="${esc(s.image)}" alt="" loading="lazy">` : '';

  const lead = s => `<article class="lead"><a href="${esc(s.url)}">${s.image ? img(s).replace('loading="lazy"', 'fetchpriority="high"') : ''}
    ${meta(s)}<h2>${esc(s.title)}</h2><p>${esc(s.summary)}</p></a></article>`;
  const item = s => `<article class="item${s.image ? '' : ' no-img'}"><a href="${esc(s.url)}">
    <div>${meta(s)}<h3>${esc(s.title)}</h3></div>${img(s)}</a></article>`;
  const card = s => `<article class="card${s.image ? '' : ' no-img'}"><a href="${esc(s.url)}">${img(s)}
    <div class="text">${meta(s)}<h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p></div></a></article>`;
  const match = (s, t) => t === 'breaking' ? s.breaking : topicsOf(s).some(x => x.toLowerCase() === t);

  (async () => {
    let all;
    try {
      all = await (await fetch('/news/manifest.json')).json();
    } catch {
      front.innerHTML = '<p class="empty">Stories could not be loaded. Refresh the page to try again.</p>';
      return;
    }
    all.sort((a, b) => new Date(b.date) - new Date(a.date));

    /* Topic page */
    if (activeTopic) {
      const list = all.filter(s => match(s, activeTopic));
      const name = activeTopic.charAt(0).toUpperCase() + activeTopic.slice(1);
      document.title = `${name} | TheAttn`;
      if (!list.length) {
        front.innerHTML = `<section class="block"><h1 class="block-title">${esc(name)}</h1><p class="empty">No stories here yet. Check back soon.</p></section>`;
        return;
      }
      let n = 12;
      const draw = () => {
        front.innerHTML = `<section class="block"><h1 class="block-title">${esc(name)}</h1>
          <div class="grid">${list.slice(0, n).map(card).join('')}</div>
          ${n < list.length ? '<button class="more-btn" type="button">Show more stories</button>' : ''}</section>`;
        front.querySelector('.more-btn')?.addEventListener('click', () => { n += 12; draw(); });
      };
      draw();
      return;
    }

    /* Home page */
    if (!all.length) {
      front.innerHTML = '<p class="empty">No stories published yet. Check back soon.</p>';
      return;
    }
    const brk = all.find(s => s.breaking);
    const [first, ...rest] = all;
    let html = '';
    if (brk) html += `<div class="breaking"><a href="${esc(brk.url)}"><span class="tag-breaking">Breaking</span><span>${esc(brk.title)}</span></a></div>`;
    html += `<section class="top-grid">${lead(first)}<div class="side">${rest.slice(0, 4).map(item).join('')}</div></section>`;
    const latest = rest.slice(4, 12);
    if (latest.length) html += `<section class="block"><h2 class="block-title">Latest</h2><div class="grid">${latest.map(card).join('')}</div></section>`;
    TOPICS.filter(t => t !== 'Breaking').forEach(t => {
      const k = t.toLowerCase();
      const list = all.filter(s => match(s, k)).slice(0, 4);
      if (list.length) html += `<section class="block"><h2 class="block-title"><a href="/topic.html?t=${k}">${t}</a>
        <a class="more" href="/topic.html?t=${k}">More ${t}</a></h2><div class="grid">${list.map(card).join('')}</div></section>`;
    });
    front.innerHTML = html;
  })();
})();
