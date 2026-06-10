export async function onRequest(context) {
  const { env } = context;
  const obj = await env.PHOTOS.get('thumbs/photo-0004');
  if (obj) {
    return new Response('FOUND: ' + obj.key + ' | size: ' + obj.size);
  }
  return new Response('NOT FOUND in bucket "wedding-photos"');
}