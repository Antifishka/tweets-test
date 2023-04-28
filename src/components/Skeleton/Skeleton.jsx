import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

export const SkeletonMUI = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Skeleton animation="wave" variant="rectangular" width={400} height={50} />
        </StyledEngineProvider>
    );
};