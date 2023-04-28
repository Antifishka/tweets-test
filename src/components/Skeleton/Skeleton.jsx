import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

const MySkeleton = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Skeleton animation="wave" variant="rectangular" width={400} height={50} />
        </StyledEngineProvider>
    );
};

export default MySkeleton;