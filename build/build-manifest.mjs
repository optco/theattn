// Scans /news for story files named YYMMDDHHMM.html and writes news/manifest.json
import fs from 'node:fs';

const DIR = 'news';
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
      topic: get(h, /<meta name="topic" content="(.*?)"/s),
      breaking: get(h, /<meta name="breaking" content="(.*?)"/s) === 'true',
      // YYMMDDHHMM -> ISO. If your filenames are UTC, append 'Z' to this string.
      date: `20${id.slice(0,2)}-${id.slice(2,4)}-${id.slice(4,6)}T${id.slice(6,8)}:${id.slice(8,10)}`
    };
  });

fs.writeFileSync(`${DIR}/manifest.json`, JSON.stringify(stories));
console.log(`manifest.json written with ${stories.length} stories`);
