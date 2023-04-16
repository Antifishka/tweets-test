import { Box } from "components/Box/Box";
import { Card } from "components/Card/Card";

export const CardList = ({displayedUsers}) => {

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