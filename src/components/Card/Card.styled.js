import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import bg from "assets/images/bg.png";

export const CardWrapper = styled.div`
    width: 380px;
    border-radius: ${theme.radii.normal};
    box-shadow: ${theme.shadows.box};
    background: ${theme.colors.bg};
`

export const TopBox = styled.div`
    padding: 20px 20px 36px 20px;
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
    box-shadow: ${theme.shadows.line};
    background: ${theme.colors.bgLignt};
`

