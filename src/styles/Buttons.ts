import styled from "styled-components";
import ITheme from '../model/ITheme';
import {Link} from 'react-router-dom';

type StyleProps = {
    theme: ITheme,
    backcolor: string;
    forecolor: string,
    padding: string,
    margin: string,
    size: string
}

export const ActButton = styled.button.attrs((props: StyleProps) => props)`
  border: none;
  apperance: none;
  display: inline-block;
  border-radius: 2px;
  font-weight: 500;
  font-size: ${(props) => props.size ? props.size : props.theme.fonts.sizes.base};
  color: ${(props) => props.theme.colors.buttonforecolor};
  background: ${(props) => props.backcolor ? props.backcolor : props.theme.colors.buttonbackcolor};
  padding: ${(props) => props.padding ? props.padding : props.theme.padding.small};
  margin: ${(props) => props.margin ? props.margin : props.theme.margin.tiny};
  cursor: pointer;
  text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.buttonforecolor};
    background: ${(props) => props.forecolor ? props.forecolor : props.theme.colors.forecolor};
  }

  &:active {
    transform: scale(0.975);
  }

  &:disabled {
    color: ${(props) => props.backcolor ? props.backcolor : props.theme.colors.background_main};
    background-color: ${(props) => props.backcolor ? props.backcolor : props.theme.colors.background_main};
  }

  icon:active {
    color: red;
  }
`;

export const MenuButton = styled(Link).attrs((props: StyleProps) => props)`
  border: none;
  apperance: none;
  display: inline-block;
  border-radius: 2px;
  font-weight: 500;
  font-size: ${(props) => props.size ? props.size : props.theme.fonts.sizes.base};
  color: ${(props) => props.forecolor ? props.forecolor : props.theme.colors.forecolor};
  background: ${(props) => props.backcolor ? props.backcolor : props.theme.colors.buttonbackcolor};
  padding: ${(props) => props.padding ? props.padding : props.theme.padding.small};
  margin: ${(props) => props.margin ? props.margin : props.theme.margin.tiny};
  cursor: pointer;
  text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.buttonforecolor};
    background: ${(props) => props.forecolor ? props.forecolor : props.theme.colors.forecolor};
  }

  &:active {
    transform: scale(0.975);
  }

  &:disabled {
    color: ${(props) => props.backcolor ? props.backcolor : props.theme.colors.background_main};
    background-color: ${(props) => props.backcolor ? props.backcolor : props.theme.colors.background_main};
  }

  icon:active {
    color: red;
  }
`;