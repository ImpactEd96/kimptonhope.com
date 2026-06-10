export async function onRequest(context) {
  const { request, env, params } = context;
  const filename = params.filename;

  if (!filename || filename.includes('..')) {
    return new Response('Forbidden', { status: 403 });
  }

  const object = await env.PHOTOS.get(filename);

  if (!object) {
    return new Response('Not found', { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('cache-control', 'public, max-age=31536000, immutable');
  headers.set('content-length', object.size);

  return new Response(object.body, { headers });
}
