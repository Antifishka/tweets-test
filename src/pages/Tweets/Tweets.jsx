import { useState, useEffect, useMemo } from "react";
import API from 'services/api';
import { Helmet } from 'react-helmet';
import { BackButton } from "components/BackButton/BackButton";
import { Dropdown } from "components/Dropdown/Dropdown";
import { CardList } from 'components/CardList/CardList';
import { PaginationMUI } from 'components/Pagination/Pagination';
import { ScrollUpButton } from "components/ScrollUpButton/ScrollUpButton";
import { PER_PAGE } from "constants/constants";
import { Box } from "components/Box/Box";

export default function Tweets() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState('show all'); 
    const [page, setPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        getUsers();

        async function getUsers() {
        try {
            const fetchUsers = await API.fetchUsers();
            setUsers(fetchUsers);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        };
        };
    }, []);

    const pages = Math.ceil(users.length / PER_PAGE);
    console.log(pages, "total pages");

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        console.log(filter, "filter");
    };
    
    const handleChangePage = (e, value) => {
        setPage(value);
    };
  
    const displayedUsers = useMemo(() => {
        const startIndex = (page - 1) * PER_PAGE;
        const endIndex = startIndex + PER_PAGE;
        const displayedUsers = users.slice(startIndex, endIndex);
        console.log(displayedUsers, "displayed users");

        return displayedUsers;
    }, [users, page]);

    return (
        <Box p="32px 0" as="main">
            <Helmet>
                <title>Tweets</title>
            </Helmet>  

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <BackButton>Go back</BackButton>
                <Dropdown onChange={handleFilterChange} />
            </Box>

            {isLoading && <div>LOADING...</div>}
                    
            <CardList
                displayedUsers={displayedUsers}
                filter={filter}
                isLoading={isLoading}
            />

            <PaginationMUI page={page} pages={pages} onClick={handleChangePage} />

            <ScrollUpButton />
        </Box>
    );
};
