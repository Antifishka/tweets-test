import { GlobalStyle } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import { CardList } from './CardList/CardList';
import { theme } from 'globalStyles/theme';

function App() {
  return (
    <>
      <Box as="main"
        maxWidth={theme.sizes.maxWidth}
        m="0 auto"
        p={4}>
        <CardList />
      </Box>
      
      <GlobalStyle />
    </>
  );
}

export default App;
