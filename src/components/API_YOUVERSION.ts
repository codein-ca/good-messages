const API_SECRET = 'Xz84U-bY1gNzYTtvTiLnnN4Wlq0';
const day = new Date(Date.now()).getDate();
const API_URL = `https://developers.youversionapi.com/1.0/verse_of_the_day/${day}?version_id=206`;
const getVerseOfTheDay = async () => {
    const response = await fetch(API_URL, {
            headers: {
                'X-YouVersion-Developer-Token': API_SECRET,
                'Accept-Language': 'en',
                Accept: 'application/json',
            },
        }
    ).then(a => {
        return a.json();
    }).then((b: PassageResponse) => {
        console.log(b);
        return b.verse.text
    });
    return response;
}

export type PassageResponse = {
    image: {
        attribution: string;
        url: string;
    },
    day: number,
    verse: {
        html: string;
        human_reference: string;
        usfms: string[],
        url: string
        text: string
    }
}


export {getVerseOfTheDay};
