import { Box } from 'components/Box/Box';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from 'components/AppBar/AppBar';
import { theme } from 'globalStyles/theme';

export const Layout = () => {
  return (
    <Box
      position="relative" 
      minHeight="100%"
      maxWidth={theme.sizes.maxWidth}
      m="0 auto"
      p="0 32px">
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense> 
    </Box>
  );
};