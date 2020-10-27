export async function getRandomImage() {
    const url = 'https://api.unspash.com/photos/random';
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
        }
    })
    const randomImage = response.json();
    return randomImage
}
