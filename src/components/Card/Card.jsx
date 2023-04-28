import React from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { SkeletonMUI } from "components/Skeleton/Skeleton";
import { CardWrapper, Logo, Thumb, Text, Button } from "./Card.styled";
import { Avatar } from "components/Avatar/Avatar";
import { getFormafedFollowers } from "helpers/getFormafedFollowers";
import PropTypes from "prop-types";

export const Card = ({ id, name, tweets, initialFollowers, avatar, isLoading, onChange }) => {
  const [followers, setFollowers] = useLocalStorage(`${name}`, initialFollowers);

  const handleClick = () => {
    if (followers === initialFollowers) {
      setFollowers((prevState) => prevState + 1);
      // onChange(id);
    } else {
      setFollowers((prevState) => prevState - 1);
      // onChange(id);
    }
  };

  return (
  <>
    {isLoading
      ? <SkeletonMUI />
      : <CardWrapper>
          <Logo />
          <Thumb />

          <Avatar name={name} avatar={avatar} />
                    
          <Text> {tweets} tweets</Text>
          <Text> {getFormafedFollowers(followers)} followers</Text>

          <Button type="button"
            onClick={handleClick}>
            {followers === initialFollowers ? "Follow" : "Following"}
          </Button>
        </CardWrapper>}
    </>    
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  initialFollowers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};