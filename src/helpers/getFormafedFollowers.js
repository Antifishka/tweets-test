export const getFormafedFollowers = (followers) => {
    const formatedFollowers = new Intl.NumberFormat('en-US').format(followers);
    return formatedFollowers;
};