import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import bg from "assets/images/bg.png";

export const CardWrapper = styled.div`
    position: relative;
    width: 380px;
    padding-top: 28px;
    padding-bottom: 36px;
    border-radius: ${theme.radii.normal};
    box-shadow: ${theme.shadows.box};

    text-align: center;

    background: ${theme.colors.gradient};
`

export const Logo = styled(LogoIcon)`
    position: absolute;
    left: 20px;
    top: 20px;
`

export const TopBox = styled.div`
    margin: 0 auto 18px;
    width: 308px;
    height: 168px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: contain;
`

export const Thumb = styled.div`
    margin: 8px auto 18px auto;
    width: 308px;
    height: 168px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: contain;
`

export const MediumBox = styled.div`
    height: 8px;
    margin-bottom: 62px;
    box-shadow: ${theme.shadows.line};
    background: ${theme.colors.secondaryText};
`

export const Text = styled.p`
    margin-bottom: 16px;
    font-size: ${theme.fontSizes.m};
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;

    color: ${theme.colors.secondaryText};

    :last-of-type {
        margin-bottom: 26px;
    }
`

export const Button = styled.button`
    min-width: 196px;
    padding: 14px 39px;
    border-radius: ${theme.radii.button};
    border: none;
    box-shadow: ${theme.shadows.button};
    
    cursor: pointer;

    font-size: ${theme.fontSizes.s};
    font-weight: 600;
    text-transform: uppercase;

    color: ${theme.colors.mainText};
    background-color: ${({ children }) =>
    children === "Following" ? theme.colors.accent : theme.colors.secondaryText};  
        
    opacity: 1;
    transition: opacity ${theme.transition.main};

    &:hover {
        opacity: 0.8;
    }    
`

