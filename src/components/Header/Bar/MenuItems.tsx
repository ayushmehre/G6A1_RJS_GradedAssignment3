import { MenuButton } from "../../../styles/Buttons";
import theme from "../../../styles/Theme";

type Props = {
    panelHandle?: () => void
};

const MenuItems = ( {panelHandle}: Props ) => {
    return (
        <>
            <MenuButton 
                to="/movies-in-theatre" 
                backcolor={theme.colors.background_main} 
                onClick={panelHandle}
            >Movies in Theatre</MenuButton>

            <MenuButton 
                to="/upcoming-movies"
                backcolor={theme.colors.background_main}
                onClick={panelHandle}
            >Upcoming Movies</MenuButton>

            <MenuButton 
                to="/top-rated-india"
                backcolor={theme.colors.background_main}
                onClick={panelHandle}
            >Top Rated India</MenuButton>

            <MenuButton 
                to="/top-rated-movies"
                backcolor={theme.colors.background_main}
                onClick={panelHandle}
            >Top Rated Movies</MenuButton>

            <MenuButton 
                to="/favorites"
                backcolor={theme.colors.background_main}
                onClick={panelHandle}
            >Favorites</MenuButton>
        </>
    )
} 

export default MenuItems;