import users from "assets/users.json";
import { Box } from "components/Box/Box";
import { Card } from "components/Card/Card";

export const CardList = () => {

    return (
        <Box display="flex" flexWrap= "wrap" gridGap= "48px" as="ul">
            {users?.map((id, user, tweets, followers, avatar) => (
                <li key={id}>
                    <Card name={user}
                        tweets={tweets}
                        initialFollowers={followers}
                        avatarUrl={avatar}
                    />
                </li>))}
        </Box>
    );
};