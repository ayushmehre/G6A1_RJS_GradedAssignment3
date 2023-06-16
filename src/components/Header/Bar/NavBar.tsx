import styled from 'styled-components';
import { ActButton } from '../../../styles/Buttons';
import { useMediaQuery } from 'react-responsive';
import MenuItems from './MenuItems';
import theme from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MobMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    background-color: rgb(0 0 0);
    box-shadow: 5px 0 10px rgb(0 0 0 / 0.4);
    padding: 20px;
    z-index: 9999;

    a {
        display: block;
        width: 100%;
        text-align: left;
    }
`;

type Props = {
    panel: boolean,
    panelHandle: () => void
}

const NavBar = ({panel, panelHandle}: Props) => {
    
    const tabletorMobile = useMediaQuery({query: `(max-width: ${theme.screen.tablet})`})

    return (
        <>
            {
                panel && tabletorMobile && (
                    <MobMenu>
                        <ActButton
                            backcolor={theme.colors.background_grad}
                            forecolor={theme.colors.forecolor}
                            className="close"
                            onClick={panelHandle}
                            style={{fontSize: '24px'}}
                        ><FontAwesomeIcon icon={faTimes} />
                        </ActButton>
                        <MenuItems panelHandle={panelHandle} />
                    </MobMenu>
                )
            }
            {
                !tabletorMobile && (
                    <div>
                        <MenuItems/>
                    </div>
                )
            }
        </>
    );
};

export default NavBar;