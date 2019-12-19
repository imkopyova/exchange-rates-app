import React, { useState } from "react";
import styles from './search.less';
import { getRatesBySymbols } from "../../api";

export const Search = props => {
    const [ value, setValue ] = useState("");

    const handleSearch = symbol => {
        const result = getRatesBySymbols([symbol.toUpperCase()])
            .then(res => console.log(res))
            .catch(error => console.log(error));
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleSearch(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-input" placeholder="Enter currency" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}