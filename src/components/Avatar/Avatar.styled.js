import styled from 'styled-components';
import { theme } from 'globalStyles/theme';

export const AvatarWrapper = styled.div`
    position: absolute;
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

export const AvatarThumb = styled.div`
    width: 62px;
    height: 62px;
    border-radius: ${theme.radii.round};
    overflow: hidden;

    background: ${theme.colors.background};
`