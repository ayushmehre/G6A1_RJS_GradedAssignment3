import { Link } from "react-router-dom";
import styled from 'styled-components';
import ITheme from "../../../model/ITheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

type StyleProps = {
    theme: ITheme
}

const LogoDiv = styled.div.attrs(({theme}: StyleProps) => theme )`
    padding: 0;
    
    a {
        text-decoration: none;
    }

    .icon {
        color: ${(theme) => theme.colors.forecolor};
        font-size: 24px;
        margin-inline: 2px;
    }
    
`;

const Logo = () => {
    return (
        <LogoDiv>
            <Link to="/"><FontAwesomeIcon icon={faFilm} className="icon" /></Link>
        </LogoDiv>
    )
}

export default Logo;