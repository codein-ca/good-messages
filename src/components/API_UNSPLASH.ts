// const API_SECRET = 'OgusaG3C7qC_qI9fGc8dhoiP4b7N-dfMU4RhGFCqZZw';
const YOUR_ACCESS_KEY = 'HvSjTTedGKj9J1zsWJbZzvOtZw4Gvj6epnxOCvBf9Kw';
const API_URL = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&featured>';
const getImageResponse = async () => {
    const response = await fetch(API_URL, {
            headers: {
                Authorization: 'Client-ID ' + YOUR_ACCESS_KEY
            },
        }
    ).then(a => {
        return a.json();
    }).then((b: ImageResponse) => {
        console.log(b)
        return b
    });
    return response;
}

export type ImageResponse = {
    user: { name: string, links: { html: string } }, urls: { small: string, regular: string, full: string }
}


export {getImageResponse};
