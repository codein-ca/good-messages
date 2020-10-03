const API_URL = process.env.REACT_APP_FUNCTION_ENDPOINT || "";
const getImageResponse = async () => {
  const response = await fetch(API_URL)
    .then((a) => {
      return a.json();
    })
    .then((b: ImageResponse) => {
      console.log(b);
      return b;
    });
  return response;
};

export type ImageResponse = {
  user: { name: string; links: { html: string } };
  urls: { small: string; regular: string; full: string };
};

export { getImageResponse };
