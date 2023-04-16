import { useState, useMemo } from "react";
import users from "assets/users.json";
import { GlobalStyle } from 'globalStyles/globalStyle';
import { Box } from 'components/Box/Box';
import { CardList } from './CardList/CardList';
import { PaginationMUI } from './Pagination/Pagination';
import { ScrollUpButton } from "components/ScrollUpButton/ScrollUpButton";
import { PER_PAGE } from "constants/constants";
import { theme } from 'globalStyles/theme';

function App() {
  const [page, setPage] = useState(1);

  const pages = Math.ceil(users.length / PER_PAGE);
  console.log(pages, "total pages");
  
  const handleChangePage = (e, value) => {
    setPage(value);
  };
  
  const displayedUsers = useMemo(() => {
    const startIndex = (page - 1) * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    const displayedUsers = users.slice(startIndex, endIndex);
    console.log(displayedUsers, "displayed users");

    return displayedUsers;
  }, [page]);

  return (
    <>
      <Box as="main"
        maxWidth={theme.sizes.maxWidth}
        m="0 auto"
        p={4}>
        <CardList displayedUsers={displayedUsers} />

        <PaginationMUI page={page} pages={pages} onClick={handleChangePage} />
      </Box>

      <ScrollUpButton />
      <GlobalStyle />
    </>
  );
}

export default App;
