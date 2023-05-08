export const getButtonStatus = (followers, initialFollowers) => {
    return followers === initialFollowers ? 'follow' : 'following';
  };