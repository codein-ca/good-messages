const API_ENDPOINT = process.env.REACT_APP_YOUVERSION_ENDPOINT || "";
const day = new Date(Date.now()).getDate();
const API_URL = `${API_ENDPOINT}/${day}?version_id=206`;
const API_SECRET = process.env.REACT_APP_YOUVERSION_TOKEN || "";
const getVerseOfTheDay = async () => {
  const response = await fetch(API_URL, {
    headers: {
      "X-YouVersion-Developer-Token": API_SECRET,
      "Accept-Language": "en",
      Accept: "application/json",
    },
  })
    .then((a) => {
      return a.json();
    })
    .then((b: PassageResponse) => {
      // console.log(b);
      return b.verse.text;
    });
  return response;
};

export type PassageResponse = {
  image: {
    attribution: string;
    url: string;
  };
  day: number;
  verse: {
    html: string;
    human_reference: string;
    usfms: string[];
    url: string;
    text: string;
  };
};

export { getVerseOfTheDay };
