import React, { useState } from "react";
import styles from './search.less';
import { getRatesBySymbols } from "../../api";

export const Search = props => {
    const [ value, setValue ] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        props.handleSearch(value.toUpperCase());
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-input" placeholder="Enter currency" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}