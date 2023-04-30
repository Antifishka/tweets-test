import * as React from 'react';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from 'components/Box/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5736A3',
    },
  },
});

export const Loader = () => {
    return <Box
        position="fixed"
        top={0} bottom={0} left={0} right={0}
        display="flex" justifyContent="center" alignItems="center"
        height="100%">
        <ThemeProvider theme={theme}>
            <CircularProgress color="primary"/>
        </ThemeProvider>    
    </Box>
};