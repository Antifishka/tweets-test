import { Box } from "components/Box/Box";
import { Card } from "components/Card/Card";
import PropTypes from "prop-types";

export const CardList = ({ displayedUsers, filter }) => {
    // const filteredTweets = () => {
    //     if (filter === 'show all') {
    //         return true;
    //     } else if (filter === 'follow') {
    //     return tweet.follow;
    //     } else if (filter === 'followings') {
    //     return tweet.following;
    //     }
    // };

    return (
        <Box display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gridGap="48px"
            mb="32px"
            as="ul">
            {displayedUsers?.map(({ id, user, tweets, followers, avatar }) => (
                <li key={id}>
                    <Card name={user}
                        tweets={tweets}
                        initialFollowers={followers}
                        avatar={avatar}
                    />
                </li>))}
        </Box>
    );
};

CardList.propTypes = {
    displayedUsers: PropTypes.array.isRequired,
};