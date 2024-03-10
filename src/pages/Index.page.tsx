import React, { useCallback, useState } from "react";
import PageStyles from "./Index.module.scss";
import { IndexLoaderDataType } from "@/loaders/Index.loader";
import { TileItem } from "@/types/TileItem";
import { useLoaderData } from "react-router-dom";
import { Search } from "@/components/search/Search";

export const Component: React.FC<React.PropsWithChildren> = () => {
    const { featured, popular } = useLoaderData() as IndexLoaderDataType;
    const [searchResults, setSearchResults] = useState<TileItem[]>([]);

    const onSearchChange = useCallback(
        (queryText: string) => {
            if (!queryText) {
                setSearchResults(featured);
                return;
            }

            // DEVNOTE: this is deliberately naive. A fuzzy search library like Fuse.js may also be appropriate
            const filtered = featured.filter((item) => item.title.toLowerCase().includes(queryText.toLocaleLowerCase()));

            setSearchResults(filtered);
        },
        [featured],
    );
    
    return (
        <div className={PageStyles.dashboard}>
            <header>
                <Search onSearch={onSearchChange} />
            </header>
            <main></main>
        </div>
    );
};

export default Component;
