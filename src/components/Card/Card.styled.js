import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import bg from "assets/images/bg.png";
import bg2x from "assets/images/bg@2x.png";

export const CardWrapper = styled.div`
    position: relative;
    width: 380px;
    padding-top: 28px;
    padding-bottom: 36px;
    border-radius: ${theme.radii.normal};
    box-shadow: ${theme.shadows.box};

    text-align: center;

    background: ${theme.colors.gradient};

    ::after {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        top: 214px;
        height: 8px;
        box-shadow: ${theme.shadows.line};
        background: ${theme.colors.secondaryText};
    }
`

export const Logo = styled(LogoIcon)`
    position: absolute;
    left: 20px;
    top: 20px;
`

export const Thumb = styled.div`
    margin: 0 auto 18px;
    width: 308px;
    height: 168px;
    margin-bottom: 88px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: contain;

    @media (-webkit-min-device-pixel-ratio: 2),
       (min--moz-device-pixel-ratio: 2),
       (o-min-device-pixel-ratio: 2/1),
       (min-device-pixel-ratio: 2),
       (min-resolution: 192dpi),
       (min-resolution: 2dppx) {
            background-image: url(${bg2x});
    }
`

export const Text = styled.p`
    margin-bottom: 16px;
    font-size: ${theme.fontSizes.m};
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
    font-weight: ${theme.fontWeights.semiBold};
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

