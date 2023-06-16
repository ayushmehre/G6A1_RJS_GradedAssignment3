import React from 'react';
import MovieList from '../MoiveCard/MovieList';

type Props = {
    route: string,
    query: string,
    region?: string
}

const Features = ({route, query, region}: Props) => {
    return (
        <>
            <MovieList route={route} query={query} region={region} />
        </>
    )
}

export default Features;