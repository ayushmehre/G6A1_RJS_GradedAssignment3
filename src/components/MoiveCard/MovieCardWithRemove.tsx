import apiConfig from "../../model/apiConfig";
import { useContext, useEffect, useState } from 'react';
import { getMovie } from "../../service/fetchData";
import IData from "../../model/IData";
import { FavContext } from "../Favorites/FavContext";
import MovieCardstyl from "../../styles/MovieCardstyl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { ActButton } from "../../styles/Buttons";
import theme from "../../styles/Theme";

const img_url = apiConfig.img_key;

type Payload = {
    route: string,
    movieId: string
}

type Props = {
    favMovie: Payload
}

const MovieCardwithRemove = ( { favMovie } : Props ) => {

    const [ movie, setMovie ] = useState<IData | null>(null);
    const { dispatch: favDispatch } = useContext(FavContext);

    const remFromFav = ( payload : Payload ) => {
        favDispatch({
            type: 'REMOVE',
            payload: payload
        })
    };

    useEffect(() => {
        const getaMovie = async () => {
            let fetchedMovie = await getMovie(favMovie.route, favMovie.movieId);
            setMovie( fetchedMovie );
        }
        getaMovie();
    },[]);

    return (
        <>
            {
                movie && 
                    <MovieCardstyl>
                        <img src={`${img_url}/${movie.poster_path}`} alt="poster" />
                        <div className="overlay">
                    <div className='title'>
                        {movie.title}
                    </div>
                    <div className='runtime'>
                        {movie?.release_date}
                        <div>
                            {Math.round( movie.vote_average)}
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div className='description'>
                        {movie?.overview.slice(0,118)+"..."}
                    </div>
                    <ActButton 
                        backcolor={theme.colors.background_grad} 
                        forecolor={theme.colors.forecolor} 
                        className='favIcon'
                        onClick={() => remFromFav({route: favMovie.route, movieId: favMovie.movieId})}
                    >
                        Remove from favorites <FontAwesomeIcon icon={faHeart}/>
                    </ActButton>
                </div>
                    </MovieCardstyl>
            }
        </>
    )
}

export default MovieCardwithRemove;