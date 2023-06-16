import { Link } from 'react-router-dom';
import MovieCardstyl from '../../styles/MovieCardstyl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { ActButton } from '../../styles/Buttons';
import theme from '../../styles/Theme';
import { useContext, MouseEvent } from 'react';
import { FavContext } from '../Favorites/FavContext';
import { useToast } from 'rc-toastr';

type Props = {
    route: string
}

type Payload = {
    route: string,
    movieId: string
}

const MovieCard = ({movie}: any, { route }: Props) => {

    const { state, dispatch : favDispatch } = useContext(FavContext);
    const { toast } = useToast();
    const success = () => toast.success("Added to Favorites");
    const error = () => toast.error("Already in Faorites");
        
    const addToFav = (event: MouseEvent<HTMLButtonElement>, payload: Payload) => {
        event.preventDefault();
        if (state.filter( item => {
            if (item.route === payload.route && item.movieId === payload.movieId){
                return true;
            }
            return false;
        }).length > 0) {
            return false;
        } else {
            favDispatch({
                type: 'ADD',
                payload: payload
            })
            return true;
        }
    };

    return (
        <MovieCardstyl>
            <Link to={`/${route}/${movie.id}`}>
                <img src={`${movie.picture}`} alt=""/>
                <div className="overlay">
                    <div className='title'>
                        {movie.title}
                    </div>
                    <div className='runtime'>
                        {movie?.date}
                        <div>
                            {Math.round( movie.rating)}
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div className='description'>
                        {movie?.resume.slice(0,118)+"..."}
                    </div>
                    <ActButton 
                        backcolor={theme.colors.accentcolor_grad}
                        forecolor={theme.colors.btn_bg_color_hover}
                        className="favIcon"
                        onClick={(event: MouseEvent<HTMLButtonElement>) => {addToFav( event, {route: 'movie', movieId: movie.id}) ? success() : error() }}
                    >Add to Favorites <FontAwesomeIcon icon={faHeart} /></ActButton>
                </div>
            </Link>
        </MovieCardstyl>
    );
};

export default MovieCard;