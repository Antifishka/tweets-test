import { useState } from "react";
import { Box } from "components/Box/Box";
import { Card } from "components/Card/Card";
import PropTypes from "prop-types";

export const CardList = ({ displayedUsers, filter }) => {
    const [users, setUsers] = useState(displayedUsers);

    const changeStatus = (userId) => {
        setUsers(prevState => prevState.map(user => user.id === userId
            ? { ...user, following: !user.following }
            : user))};
    
    const getFilteredUsers = () => {
        if (filter === 'show all') {
            const filteredUsers = users;
            console.log(filteredUsers, "filteredUsers")
            return filteredUsers;
        } else if (filter === 'follow') {
            return users.filter((user) => user.following === false);
        } else if (filter === 'followings') {
            return users.filter((user) => user.following === true);
        };
    };

    const filteredUsers = getFilteredUsers();

    return (
        <Box display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gridGap="48px"
            mb="32px"
            as="ul">
            {filteredUsers?.map(({ id, user, tweets, followers, avatar, following }) => (
                <li key={id}>
                    <Card id={id}
                        name={user}
                        tweets={tweets}
                        initialFollowers={followers}
                        avatar={avatar}
                        onChange={changeStatus}
                    />
                </li>))}
        </Box>
    );
};

CardList.propTypes = {
    displayedUsers: PropTypes.array.isRequired,
};