// Scans /news for story files named YYMMDDHHMM.html and writes news/manifest.json
// Filenames are treated as South Africa time (SAST, +02:00). Change TZ if that ever changes.
import fs from 'node:fs';

const DIR = 'news';
const TZ = '+02:00';

const decode = s => s
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const get = (html, re) => decode((html.match(re) || [])[1]?.trim() || '');

const stories = fs.readdirSync(DIR)
  .filter(f => /^\d{10}\.html$/.test(f))
  .sort().reverse()
  .map(f => {
    const h = fs.readFileSync(`${DIR}/${f}`, 'utf8');
    const id = f.replace('.html', '');
    return {
      id,
      url: `/news/${f}`,
      title: get(h, /<title>(.*?)(?:\s*\|[^|]*)?<\/title>/s),
      summary: get(h, /<meta name="description" content="(.*?)"/s),
      image: get(h, /<meta property="og:image" content="(.*?)"/s),
      // <meta name="topic" content="Politics, World"> -> ["Politics","World"]
      topics: get(h, /<meta name="topic" content="(.*?)"/s).split(',').map(s => s.trim()).filter(Boolean),
      breaking: get(h, /<meta name="breaking" content="(.*?)"/s) === 'true',
      date: `20${id.slice(0,2)}-${id.slice(2,4)}-${id.slice(4,6)}T${id.slice(6,8)}:${id.slice(8,10)}:00${TZ}`
    };
  });

fs.writeFileSync(`${DIR}/manifest.json`, JSON.stringify(stories, null, 2));
console.log(`manifest.json written with ${stories.length} stories`);
// ---- RSS feed ----
const SITE = 'https://theattn.com';
const x = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const mime = u => /\.png/i.test(u) ? 'image/png'
  : /\.webp/i.test(u) ? 'image/webp'
  : /\.svg/i.test(u) ? 'image/svg+xml' : 'image/jpeg';

const items = stories.slice(0, 30).map(s => `
    <item>
      <title>${x(s.title)}</title>
      <link>${SITE}${s.url}</link>
      <guid isPermaLink="true">${SITE}${s.url}</guid>
      <pubDate>${new Date(s.date).toUTCString()}</pubDate>
      <description>${x(s.summary)}</description>
      ${s.topics.map(t => `<category>${x(t)}</category>`).join('')}
      ${s.image ? `<enclosure url="${x(s.image)}" type="${mime(s.image)}" length="0"/>` : ''}
    </item>`).join('');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TheAttn</title>
    <link>${SITE}/</link>
    <description>Science, space and technology news from TheAttn.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/news/feed.xml" rel="self" type="application/rss+xml"/>${items}
  </channel>
</rss>`;

fs.writeFileSync(`${DIR}/feed.xml`, feed);
