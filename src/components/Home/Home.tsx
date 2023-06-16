import { ChangeEvent } from "react";
import ITheme from "../../model/ITheme";
import MovieList from "../MoiveCard/MovieList";

type StyleProps = {
    theme: ITheme
}

type Props = {
    query: string
    queryHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

function Home({ query, queryHandler }: Props) {

    return (
        <>
            <MovieList route="/discover/movie" query={query} />
        </>
    )
    
}

export default Home;
