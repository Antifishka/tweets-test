import styled from "styled-components";
import { theme } from 'globalStyles/theme';

export const ScrollButton = styled.button`
    position: fixed;
    z-index: 100;
    right: 32px;
    bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    color: ${theme.colors.mainText};
    background-color: ${theme.colors.secondaryText};
    
    transition: ${theme.transition};
    &:hover{
        background-color: ${theme.colors.accent};
        transform: translateY(-3px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 10px rgba(87, 54, 163, 0.8);
    };
    &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 10px rgba(87, 54, 163, 0.8);
    }
`;