import styled from "styled-components";
import theme from "./Theme";

const MovieCardstyl = styled.div.attrs(( {theme} : any ) => theme) `
    transition: transform .2s;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    width: 200px;
    height: 300px;
    z-index: 0;
    box-shadow: 0 0 10px rgb(50 50 50 / 0.4);
    cursor: pointer;

    @media screen and (max-width: ${theme.screen.mobile}) {
        width: 40%;
    }

    a {
        color: var(--fcolor);
    }

    &:hover {
        transform: scale(1.2);
        z-index: 1000;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .overlay {
        position: absolute;
        padding: 0 1rem 1rem 1rem;
        bottom: 0px;
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-end;
        background-image: linear-gradient(90deg, rgba(0,18,121,0.28925073447347693) 0%, rgba(8,7,82,0.23322832550989148) 100%);
        opacity: 0;
        transition: opacity .2s;

        &:hover {
            opacity: 1;
        }
    }

    .title {
        font-weight: 900;
        font-size: var(--fontmed);
        margin-bottom: 0.4rem;
    }

    .runtime {
        font-size: .75rem;
        margin-block-end: 0.25em;
        display: flex;
        justify-content: space-between;
    }

    .description {
        font-style: italic;
        font-size: .75rem;
        margin-bottom: 0.25rem;
    }

    
`;

export default MovieCardstyl;