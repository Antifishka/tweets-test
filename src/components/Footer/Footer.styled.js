import styled from 'styled-components';
import { theme } from 'globalStyles/theme';

export const Text = styled.p`
    font-size: ${theme.fontSizes.m};

    color: ${theme.colors.mainText};
`

export const SocialLink = styled.a`
    color: ${theme.colors.background};

    transition: ${theme.transition.main};

    :hover{
        color: ${theme.colors.accent};
    }
`

export const SocialItem = styled.li`
    padding-top: 4px;
`