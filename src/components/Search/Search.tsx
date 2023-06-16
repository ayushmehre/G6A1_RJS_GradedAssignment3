import React, { ChangeEvent, useState } from 'react';
import MovieList from '../MoiveCard/MovieList';

type Props = {
    query: string,
    queryHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({query, queryHandler}: Props) => {

    return (
            <input
                type="search"
                placeholder="Search movie ... "
                value={query}
                onChange={queryHandler}
            />
    );
};