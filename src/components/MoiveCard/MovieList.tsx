import React from 'react';
import ITheme from '../../model/ITheme';
import { useEffect, useState } from 'react';
import IMovies from '../../model/IMovies';
import MovieCard from './MovieCard';
import { MoviesList } from '../../styles/MoviesList';
import styled from 'styled-components';
import { discoverMovies, searchMovies } from '../../service/fetchData';
import apiConfig from '../../model/apiConfig';
import { ActButton } from '../../styles/Buttons';
import theme from '../../styles/Theme';
import { v4 } from "uuid";


type StyleProps = {
    theme: ITheme;
}

export const Division = styled.div.attrs(({theme}: StyleProps) => theme)`
    margin-block: 10px;
    width: min(100% - 20px, ${(theme) => theme.screen.desktop});
    margin-inline: auto;
`;

type Props = {
    route: string,
    query: string,
    region?: string,
    favorites?: boolean
}

function MovieList( {route, query, region, favorites = false}: Props) {

    const [ movies, setMovies ] = useState<IMovies[]>([]);
    const [ page, setPage ] = useState<number>(1);

    const nextPage = () => {
        setPage(oldValue => Math.min(oldValue + 1, 10));
    };

    const prevPage = () => {
        setPage(oldValue => Math.max(oldValue - 1, 1));
    };

    useEffect(() => {

        if (query) {route = `${apiConfig.search_path}`}

        const params = {
            page: page,
            api_key: apiConfig.api_key,
            query: query,
            region: region
        }
    
        const fetchMovies = async () => {
            const results = await discoverMovies(route, params, favorites);
            setMovies(results);
    
        }
        const getSearchedMovies = async (query: string) => {
            const results = await searchMovies(query);
            setMovies(results);
        }
    
        const getMovies = async (query: string) => query === '' ? await fetchMovies() : await getSearchedMovies(query);
        
        getMovies(query);
    }, [page, query, route, region])

    return (
        <>
            <Division>

                <MoviesList>
                    {
                        movies.map(movie => (
                            <MovieCard key={v4()} movie={movie} route={'movie'}/>
                        ))
                        }
                </MoviesList>
                <div style={{textAlign: 'center'}}>
                    <ActButton
                        backcolor="#6B728E"
                        forecolor={theme.colors.buttonbackcolor}
                        onClick={prevPage}
                        disabled={page <= 1 ? true : false}
                    >Prev</ActButton>

                    <ActButton
                        backcolor="#6B728E"
                        forecolor={theme.colors.buttonbackcolor}
                        onClick={nextPage}
                        disabled={page <= 10 ? false: true}
                    >Next</ActButton>
                </div>
            </Division>
        </>
    )
};

export default MovieList;