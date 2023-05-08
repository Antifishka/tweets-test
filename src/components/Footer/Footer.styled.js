import styled from 'styled-components';
import { theme } from 'globalStyles/theme';

export const FooterWrapper = styled.div`
    position: absolute;
    z-index: 100;
    top: 178px;
    left: calc(50% - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: ${theme.radii.round};
    box-shadow: ${theme.shadows.avatar};

    background: ${theme.colors.secondaryText};
`