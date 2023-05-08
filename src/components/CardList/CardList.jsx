import { Box } from "components/Box/Box";
import { Card } from "components/Card/Card";
import PropTypes from "prop-types";

export const CardList = ({ displayedUsers, filter }) => {
    return (
        <Box display="flex"
            flexWrap="wrap"
            gridGap="48px"
            mb="32px"
            as="ul">
            {displayedUsers?.map(({ id, user, tweets, followers, avatar }) => (
                <Card key={id}
                    name={user}
                    tweets={tweets}
                    initialFollowers={followers}
                    avatar={avatar}
                    filter={filter}
                />))}
        </Box>
    );
};

CardList.propTypes = {
    displayedUsers: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
};