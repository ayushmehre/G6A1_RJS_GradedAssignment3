import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import apiConfig from "../model/apiConfig";
import IData from "../model/IData";
import IMovies from "../model/IMovies";

type Params = {
  api_key: string,
  query: string,
  region?: string
}


export async function discoverMovies(path: string, params: Params, favourites: boolean = false): Promise<IMovies[]> {

    const route = favourites ? "": `${apiConfig.base_url}${path}`;

    const data = await axios.get(
      `${route}`,{
        headers: {
          'Content-Type': 'application/json'
        },
        params: params
      }
    )
      .then((res) => res.data)
      .then((response) => mapResult(response.results))
      .catch((_) => {
        return [];
      });
    return data;
}

export async function searchMovies(search: string): Promise<IMovies[]> {
  const data = await axios.get(
    `${apiConfig.base_url}${apiConfig.search_path}?query=${search}&api_key=${apiConfig.api_key}`
  )
    .then((res) => res.data)
    .then((response) => mapResult(response.results))
    .catch((_) => {
      return [];
    });
  return data;
}

function mapResult(res: any[]): IMovies[] {
  return res.map((movie) => {
    const {
      id,
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
    } = movie;

    return {
      id,
      title,
      date: release_date,
      rating: vote_average,
      resume: overview,
      picture: poster_path ? `${apiConfig.img_key}${poster_path}` : undefined,
    };
  });
}

export async function getMovie(path: string, movieId: string): Promise<IData> {

  let route : string;
  if (path === undefined || path === null || path === 'undefined' ) {
    route = 'movie';
  } else {
    route = path;
  }
  const data = await axios.get(`${apiConfig.base_url}/movie/${movieId}?api_key=${apiConfig.api_key}`, {
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then((res) => res.data)
  .catch((_) =>{
    return [];
  });
  return data;
}