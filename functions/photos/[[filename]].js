export async function onRequest(context) {
  const { request, env, params, functionPath } = context;
  const filename = params.filename;

  const debug = {
    url: request.url,
    functionPath,
    filename,
    filenameType: typeof filename,
    filenameIsArray: Array.isArray(filename),
    filenameJSON: JSON.stringify(filename),
  };

  if (!filename || filename.includes('..')) {
    return new Response(JSON.stringify({ error: 'Forbidden', ...debug }), { status: 403, headers: { 'content-type': 'application/json' } });
  }

  const object = await env.PHOTOS.get(filename);

  if (!object) {
    return new Response(JSON.stringify({ error: 'Not found in R2', key: filename, ...debug }), { status: 404, headers: { 'content-type': 'application/json' } });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('cache-control', 'public, max-age=31536000, immutable');
  headers.set('content-length', object.size);

  return new Response(object.body, { headers });
}
