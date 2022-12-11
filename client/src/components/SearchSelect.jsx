import React from "react";

const SearchSelect = ({ options, value, setValue }) => {
    return (
        <select type="select" value={value} onChange={({ target }) => setValue(target.value)}>
            {options.map(({ label, value }) =>
                <option key={value} value={value}>{label}</option>
            )}
      </select>
    );
};

export default SearchSelect;