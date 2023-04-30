export const getFilteredUsers = (users, filter) => {
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