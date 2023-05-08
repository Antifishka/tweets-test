import React from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { CardWrapper, Logo, Thumb, Text, Button } from "./Card.styled";
import { Avatar } from "components/Avatar/Avatar";
import { getFormafedFollowers } from "helpers/getFormafedFollowers";
import PropTypes from "prop-types";

export const Card = ({ name, tweets, initialFollowers, avatar, filter }) => {
  const [followers, setFollowers] = useLocalStorage(`${name}`, initialFollowers);

  const handleClick = () => {
    if (followers === initialFollowers) {
      setFollowers((prevState) => prevState + 1);
    } else {
      setFollowers((prevState) => prevState - 1);
    }  
  };

  const getButtonStatus = followers => {
    return followers === initialFollowers ? 'follow' : 'following';
  };

  const buttonStatus = getButtonStatus(followers);
  console.log(buttonStatus);

  return (
    <CardWrapper className={filter === 'show all' || buttonStatus === filter ? '' : 'none'}>
      <Logo />
      <Thumb />

      <Avatar name={name} avatar={avatar} />
                    
      <Text> {tweets} tweets</Text>
      <Text> {getFormafedFollowers(followers)} followers</Text>

      <Button type="button"
        onClick={handleClick}>
        {buttonStatus}
      </Button>
    </CardWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  initialFollowers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};