import React, { useEffect, useState } from "react";
import Styles from "./Search.module.scss";

export type SearchProps = {
    onSearch: (queryText: string) => void;
};

export const Search: React.FC<React.PropsWithChildren<SearchProps>> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    useEffect(() => onSearch(searchText), [onSearch, searchText]);

    return (
        <div className={Styles.terem__search}>
            <input type="search" onChange={onSearchChange} value={searchText} placeholder="Search for..." data-testid="input-search" />
        </div>
    );
};

export default Search;
