import React from "react";
import './SearchSelect.scss' ;

const SearchSelect = ({ options, value, setValue, id }) => {
    return (
        <select type="select" value={value} id={id} onChange={({ target }) => setValue(target.value)}>
            {options.map(({ label, value }) =>
                <option key={value} value={value}>{label}</option>
            )}
      </select>
    );
};

export default SearchSelect;