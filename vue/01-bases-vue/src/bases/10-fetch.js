

const apiKey =  'wYK4i70DtcUYtXuH8ZX3ZCQx5AnI4e9J';
// https://api.giphy.com/v1/gifs/random?api_key=wYK4i70DtcUYtXuH8ZX3ZCQx5AnI4e9J

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original
        // console.log(data)
        console.log(url)

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch( e => console.log(e))