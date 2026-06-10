export async function onRequest(context) {
  const { request, env, params } = context;
  const segments = params.filename;

  if (!segments || !segments.length) {
    return new Response('Forbidden', { status: 403 });
  }

  const filename = segments.join('/');

  if (filename.includes('..')) {
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
