import * as React from 'react';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EBD8FF',
    },
  },
});

export const PaginationMUI = ({page, pages, onClick}) => {
  return (
    <Box display="flex" justifyContent="center">
      <ThemeProvider theme={theme}>
        <Stack spacing={3}>
          <Pagination
            color="primary" 
            size="large"
            count={pages}
            page={page}
            onChange={onClick}
          />
        </Stack>
      </ThemeProvider>    
    </Box>
  );
}

PaginationMUI.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};