import * as functions from 'firebase-functions';
const got = require('got');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    const x = await getImageResponse();
    console.log('FUNCTION RESPONSE', x);
    response.send(x);
  }
);

// const API_SECRET = 'OgusaG3C7qC_qI9fGc8dhoiP4b7N-dfMU4RhGFCqZZw';
const YOUR_ACCESS_KEY = 'HvSjTTedGKj9J1zsWJbZzvOtZw4Gvj6epnxOCvBf9Kw';
const API_URL =
  'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&featured>';
const getImageResponse = async () => {
  const { body } = await got.get(API_URL, {
    headers: {
      Authorization: 'Client-ID ' + YOUR_ACCESS_KEY,
    },
  });
  return body as ImageResponse;
};

export type ImageResponse = {
  user: { name: string; links: { html: string } };
  urls: { small: string; regular: string; full: string };
};

// export { getImageResponse };
