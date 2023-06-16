import { faArrowCircleLeft, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import IData from "../../../model/IData";
import ITheme from "../../../model/ITheme";
import apiConfig from "../../../model/apiConfig";
import { getMovie } from "../../../service/fetchData";
import { ActButton } from "../../../styles/Buttons";
import theme from "../../../styles/Theme";
import { FavContext } from "../../Favorites/FavContext";
import { useToast } from "rc-toastr";

const imgUrl = apiConfig.img_key;

type StyleProps = {
    theme: ITheme
}

type Params = {
    route: string,
    movieId: string
}

const BackDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`
    margin-block: 20px;
    width: min(100% - 20px, ${(theme) => theme.screen.desktop});
    margin-inline: auto;
`;

const MovieDiv = styled.div.attrs(( {theme} : StyleProps ) => theme )`
    width: min(100% - 20px, ${(theme) => theme.screen.desktop});
    margin-inline: auto;

    display: flex;
    gap: 30px;
    align-items: center;

    & > div:nth-child(1) {
        flex: 1 1 30%;
    }

    & > div:nth-child(2) {
        flex-grow: 1;
    }

    hr {
        margin-block: 15px;
        opacity: 0.6;
    }

    .img-holder img {
        border: 2px solid ${(theme) => theme.colors.forecolor};
        border-radius: 5px;
        box-shadow: 0 0 10px rgb(255 255 255 / 0.4);
    }

    @media screen and (max-width: ${(theme) => theme.screen.tablet}) {
        flex-direction: column;
    }

`;

const ModelDiv = styled.div.attrs(( {theme} : StyleProps ) => theme)`
    position: fixed;
    z-index: 9999999999;
    color: #333;
    background-color: rgb(0 0 0 / 0.8);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    place-content: center;

    .img-holder img {
        border: 2px solid ${(theme) => theme.colors.forecolor};
        border-radius: 5px;
        box-shadow: 0 0 10px rgb(255 255 255 / 0.4);
    }
`;

const Movie = () => {
    const navigate = useNavigate();
    const { route, movieId } = useParams<Params>();
    const [ movie, setMovie ] = useState<IData | null>(null);
    const [ model, setModel ] = useState<boolean>(false);
    const { state, dispatch : favDispatch } = useContext(FavContext);

    const goBack = () => {
        navigate(-1);
    }

    const { toast } = useToast();
    const success = () => toast.success("Added to Favorites");
    const error = () => toast.error("Already in Faorites");

    const addToFav = () => {
        const payload = {
            route,
            movieId
        }

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

    useEffect(() => {
        const getaMovie = async () => {
            const data = await getMovie(route as string, movieId as string);
            setMovie(data);
        }
        getaMovie();
    }, [route, movieId] );

    return (
        <>
                <BackDiv>
                    <ActButton
                        backcolor={theme.colors.accentcolor_grad}
                        forecolor={theme.colors.btn_bg_color_hover}
                        onClick={goBack}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                        &emsp;Go Back</ActButton>
                </BackDiv>
                {
                    movie && 
                        <MovieDiv>
                                <div className="img-holder">
                                    <img style={{height: '300px', width: 'auto'}}
                                        src={imgUrl + '/' + movie.poster_path} alt="poster"
                                        onClick={(event) => {event.preventDefault(); setModel(true)}}
                                    />
                                </div>
                                <div className="detail-holder">
                                    <h2>{movie.title}</h2>
                                    <hr/>
                                    <div style={{display: 'flex', gap: '50px'}}>
                                        <p>
                                            Release Date: {movie.release_date}
                                        </p>
                                        <p>
                                            {Math.round(movie.vote_average)}
                                            <FontAwesomeIcon icon={faStar} />
                                        </p>
                                    </div>
                                    <div style={{marginBlock: '20px'}}>
                                        <p>
                                            {movie.overview}
                                        </p>
                                    </div>
                                    <ActButton
                                        backcolor={theme.colors.accentcolor_grad}
                                        forecolor={theme.colors.btn_bg_color_hover}
                                        className="favIcon"
                                        onClick={(event) => addToFav() ? success() : error() }
                                    >Add to Favorites <FontAwesomeIcon icon={faHeart} /></ActButton>
                                </div>
                        </MovieDiv>
                }
                {
                    movie && model && (
                        <ModelDiv onClick={() => setModel(false)}>
                            <img src={imgUrl + '/' + movie.poster_path} alt="poster" />
                        </ModelDiv>
                    )
                }
        </>
    )
}

export default Movie;