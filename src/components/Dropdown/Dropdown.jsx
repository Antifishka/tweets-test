import React from "react";
import { Filter } from "constants/constants";
import { Select } from "./Dropdown.styled";
import PropTypes from "prop-types";

export const Dropdown = ({ onChange }) => {

    return (
        <Select onChange={onChange} defaultValue="show all" >
            <option value={Filter.ALL}>Show all</option>
            <option value={Filter.FOLLOW}>Follow</option>
            <option value={Filter.FOLLOWING}>Followings</option>
        </Select>
    );
};

Dropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
};