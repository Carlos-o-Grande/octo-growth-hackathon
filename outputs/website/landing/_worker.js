// Cloudflare Pages advanced mode: static assets as usual, plus byte ranges for .mp4,
// because iOS Safari won't play video unless Range requests get a 206.
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    if (res.status !== 200 || !new URL(request.url).pathname.endsWith('.mp4')) return res;
    const range = request.method === 'GET' && request.headers.get('Range'); // HEAD has no body to slice
    if (!range) {
      const full = new Response(res.body, res);
      full.headers.set('Accept-Ranges', 'bytes');
      return full;
    }
    return rangeResponse(res, range);
  },
};

// shortcut: buffers the whole file per range request; fine for videos of a few MB, stream it if videos grow past ~50 MB.
export async function rangeResponse(res, range) {
  const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if (!m || (m[1] === '' && m[2] === '')) return res; // multi-range or malformed: serve the whole file
  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  let start, end;
  if (m[1] === '') { start = Math.max(0, size - Number(m[2])); end = size - 1; } // suffix: last N bytes
  else { start = Number(m[1]); end = m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1); }
  const headers = new Headers(res.headers);
  headers.set('Accept-Ranges', 'bytes');
  headers.delete('Content-Length');
  if (start >= size || start > end) {
    headers.set('Content-Range', `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  return new Response(buf.slice(start, end + 1), { status: 206, headers });
}
