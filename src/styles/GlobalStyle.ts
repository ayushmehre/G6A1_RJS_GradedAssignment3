import { createGlobalStyle } from 'styled-components';
import theme from './Theme';

export const GlobalStyle = createGlobalStyle`
    :root {
        --basefont: ${theme.fonts.sizes.base};
        --bfontfamily: ${theme.fonts.styles.paragraph};
        --maxwidth: 1280px;
        --back_main: ${theme.colors.background_main};
        --back_grad: ${theme.colors.background_grad};
        --fcolor: ${theme.colors.forecolor};
        --medgrey: #353535;
        --fontsuperbig: ${theme.fonts.sizes.xlarge};
        --fontbig: ${theme.fonts.sizes.large};
        --fontmed: ${theme.fonts.sizes.medium};
        --fontsmall: ${theme.fonts.sizes.small};
        --fontBase: ${theme.fonts.sizes.base};
    }

    * {
        box-sizing: border-box;
        font-family: var(--bfontfamily);
        letter-spacing: 0.7px;
    }

    html, body {
        min-height: 100vh;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background: var(--back_main);
        background: var(--back_grad);
        color: var(--fcolor);
        font-size: var(--fontBase);
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }

    body::-webkit-scrollbar {
        width: 5px;
    }
    
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
        border-radius: 5px;
    }

}`;