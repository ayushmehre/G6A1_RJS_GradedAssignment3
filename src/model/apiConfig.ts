
const bUrl: string = "https://api.themoviedb.org/3";
const apikey: string = "7ee9c7ea83b65bcf14dd3b5becbd440e";
const imgkey: string = "https://image.tmdb.org/t/p/w300";
const fPath: string = "/discover/movie";
const sPath: string = "/search/movie";

const apiConfig = {
    base_url: bUrl,
    api_key: apikey,
    img_key: imgkey,
    featured_path: fPath,
    search_path: sPath
}

export default apiConfig;