import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { up } from 'styled-breakpoints';

export const Select = styled.select`
    padding: 14px;
    margin-bottom: ${theme.space[3]}px;
    border-radius: ${theme.radii.button};
    border: none;
    outline: none;
    box-shadow: ${theme.shadows.button};
    
    cursor: pointer;

    font-weight: ${theme.fontWeights.semiBold};
    text-transform: uppercase;

    color: ${theme.colors.mainText};
    background-color: ${theme.colors.secondaryText};

    transition: ${theme.transition.main};

    :hover{
        background-color: ${theme.colors.accent};
    }

    ${up('mobile')} {
        font-size: ${theme.fontSizes.s};
    }

    ${up('tablet')} {
        font-size: ${theme.fontSizes.m};
    }
`;