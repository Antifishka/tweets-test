import { AvatarWrapper, AvatarThumb } from "./Avatar.styled";
import PropTypes from "prop-types";

export const Avatar = ({ name, avatar}) => {
return (
    <AvatarWrapper>
        <AvatarThumb>
            <img src={avatar} alt={name} width="62px" height="62px" />
        </AvatarThumb>
    </AvatarWrapper>
    );
};

Avatar.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};