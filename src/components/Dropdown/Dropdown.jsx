import React from "react";
import { Select } from "./Dropdown.styled";
import PropTypes from "prop-types";

export const Dropdown = ({ onChange }) => {

    return (
        <Select onChange={onChange}>
            <option value="show all">Show all</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
        </Select>
    );
};

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
};