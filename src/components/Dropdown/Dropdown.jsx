import React from "react";
import { Select } from "./Dropdown.styled";
import PropTypes from "prop-types";

export const Dropdown = ({ onChange }) => {

    return (
        <Select onChange={onChange} defaultValue="show all" >
            <option value="show all">Show all</option>
            <option value="follow">Follow</option>
            <option value="following">Followings</option>
        </Select>
    );
};

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
};