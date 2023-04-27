// import { useState, useMemo } from "react";
// import { getFilteredUsers } from "helpers/getFilteredUsers";
import { Box } from "components/Box/Box";
import { Card } from "components/Card/Card";
import PropTypes from "prop-types";

export const CardList = ({ displayedUsers, filter }) => {
    // const changeStatus = (userId) => {
    //     setUsers(prevState => prevState.map(user => user.id === userId
    //         ? { ...user, following: !user.following }
    //         : user))};
    
    // const filteredUsers = useMemo(() =>
    //     getFilteredUsers(users, filter),
    //     [users, filter]);

    return (
        <Box display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gridGap="48px"
            mb="32px"
            as="ul">
            {displayedUsers?.map(({ id, user, tweets, followers, avatar, following }) => (
                <li key={id}>
                    <Card id={id}
                        name={user}
                        tweets={tweets}
                        initialFollowers={followers}
                        avatar={avatar}
                        // onChange={changeStatus}
                    />
                </li>))}
        </Box>
    );
};

CardList.propTypes = {
    displayedUsers: PropTypes.array.isRequired,
};