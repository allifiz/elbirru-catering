import { mkdir, writeFile, access, readFile } from 'node:fs/promises';
const refs = JSON.parse(await readFile('data/official-assets.json', 'utf8'));
refs.logo = 'https://elbirrucatering.com/wp-content/uploads/2023/08/LOGO-ELBIRRU-300x205.png';
await mkdir('public/images/official', { recursive: true });
let success = 0;
await Promise.all(
  Object.entries(refs).map(async ([name, url]) => {
    const path = 'public/images/official/' + name + '.' + url.split('.').pop();
    try {
      await access(path);
      success++;
      return;
    } catch {}
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 Elbirru design preview' },
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok || !response.headers.get('content-type')?.startsWith('image/'))
        throw Error('HTTP ' + response.status);
      await writeFile(path, Buffer.from(await response.arrayBuffer()));
      success++;
      console.log('Official asset saved:', name);
    } catch (e) {
      console.warn('Official asset unavailable:', name, e.message);
    }
  }),
);
console.log('Official assets: ' + success + '/' + Object.keys(refs).length);
