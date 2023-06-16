import { ChangeEvent, useState } from 'react';
import NavBar from './Bar/NavBar';
import styled from 'styled-components';
import ITheme from '../../model/ITheme';
import { ActButton } from '../../styles/Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Search } from '../Search/Search';
import theme from '../../styles/Theme';
import Logo from './Logo/Logo';

type StyleProps = {
    theme: ITheme
}

type Props = {
    query: string,
    queryHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const HeaderMenu = styled.nav.attrs(({theme}: StyleProps) => theme)`
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: ${(theme) => theme.colors.background_main};
    padding-inline: ${(theme) => theme.margin.base};

        .left{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: ${(theme) => theme.margin.medium};
            position: relative;

            button.open {
                display: none;
                @media screen and (max-width: 998px) {
                    display: inline-block;
                }
            }
        }

        input[type=search] {
            outline: none;
            border: none;
            appearance: none;
            padding: ${(theme) => theme.padding.small};
            color: ${(theme) => theme.colors.background_main};
            border-radius: 2px;
            font-size: ${(theme) => theme.fonts.sizes.base};
        }
`;

const Header = ( { query, queryHandler }: Props ) => {
    const [ sidePanel, setSidePanel ] = useState<boolean>(false);

    const togglePanel = () => {
        setSidePanel( (prevState) => !prevState );
    };

    return (
        <HeaderMenu>
            <div className="left">
                <ActButton 
                    backcolor={theme.colors.background_main}
                    forecolor={theme.colors.forecolor}
                    className="open"
                    onClick={togglePanel}
                ><FontAwesomeIcon icon={faBars} /></ActButton>
                <Logo />
                <NavBar panel={sidePanel} panelHandle={togglePanel} />
            </div>
            <div className='right'>
                <Search query={query} queryHandler={queryHandler} />
            </div>
        </HeaderMenu>
    )
};

export default Header;
