export const getGif = async ({ categories, rangeValue }) => {
    console.log(rangeValue)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (categories) }&limit=${rangeValue}&api_key=1UJZQbsOdlnqanINtpj2A8zJb1t7wDqT`
    const res = await fetch(url)
    const {data} = await res.json();
    const getGifImage = data.map( ({ id, title, images }) => {
        return {
            id: id,
            title: title,
            img: images.downsized_medium.url
        }
    })        
    return getGifImage
}