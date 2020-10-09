import * as functions from "firebase-functions";
const got = require("got");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    try {
      const x = await getImageResponse();
      response.send(x);
    } catch (error) {
      response.status(400).send("Probably empty url");
    }
  }
);

const YOUR_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESSS_KEY || "";
const API_URL = process.env.REACT_APP_UNSPLASH_ENDPOINT || "";
const getImageResponse = async () => {
  try {
    const { body } = await got.get(API_URL, {
      headers: {
        Authorization: "Client-ID " + YOUR_ACCESS_KEY,
      },
    });
    return body as ImageResponse;
  } catch (error) {
    return error;
  }
};

export type ImageResponse = {
  user: { name: string; links: { html: string } };
  urls: { small: string; regular: string; full: string };
};

// export { getImageResponse };
