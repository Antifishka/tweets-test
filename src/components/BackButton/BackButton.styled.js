import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "globalStyles/theme";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.space[3]}px;
  
  font-size: ${theme.fontSizes.m};
  text-transform: uppercase;

  color: ${theme.colors.mainText};
  transition: ${theme.transition.main};
          
  :hover{
    color: ${theme.colors.accent};
  }
`;

export const Arrow = styled.svg`
  fill: currentColor;
`;