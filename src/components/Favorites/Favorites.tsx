import { useContext } from 'react';
import styled from 'styled-components';
import MovieCardwithRemove from '../MoiveCard/MovieCardWithRemove';
import { FavContext } from './FavContext';
import { Division } from '../MoiveCard/MovieList';
import { MoviesList } from '../../styles/MoviesList';
import { v4 } from 'uuid';

const NoData = styled.div`
    min-height: 300px;
    display: grid;
    place-content: center;
`;

const Favorites = () => {

    const { state } = useContext(FavContext);
    return (
        <Division>
            {
                state.length > 0 ? (
                    <MoviesList>
                        {
                            state.map(movie => (
                                <MovieCardwithRemove key={v4()} favMovie={movie} />
                            ))
                        }
                    </MoviesList>
                ) : (
                    <NoData>
                        <h3>No data found!</h3>
                    </NoData>
                )
            }
        </Division>
    )
}

export default Favorites;