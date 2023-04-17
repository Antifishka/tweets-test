import { useState, useMemo } from "react";
import users from "assets/users.json";
import { Helmet } from 'react-helmet';
import { BackButton } from "components/BackButton/BackButton";
import { CardList } from 'components/CardList/CardList';
import { PaginationMUI } from 'components/Pagination/Pagination';
import { ScrollUpButton } from "components/ScrollUpButton/ScrollUpButton";
import { PER_PAGE } from "constants/constants";
import { Box } from "components/Box/Box";

export default function Tweets() {
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
        <Box p="32px 0" as="main">
            <Helmet>
                <title>Tweets</title>
            </Helmet>  

            <BackButton>Go back</BackButton>
                    
            <CardList displayedUsers={displayedUsers} />

            <PaginationMUI page={page} pages={pages} onClick={handleChangePage} />

            <ScrollUpButton />
        </Box>
    );
};
