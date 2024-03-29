import React, { useCallback, useState } from "react";
import PageStyles from "./Index.module.scss";
import { IndexLoaderDataType } from "@/loaders/Index.loader";
import { TileItem } from "@/types/TileItem";
import { useLoaderData } from "react-router-dom";
import { Search } from "@/components/search/Search";
import { Featured } from "@/components/featured/Featured";
import Popular from "@/components/popular/Popular";

export const Component: React.FC<React.PropsWithChildren> = () => {
    const { featured, popular } = useLoaderData() as IndexLoaderDataType;
    const [searchResults, setSearchResults] = useState<TileItem[]>(popular);

    const onSearchChange = useCallback(
        (queryText: string) => {
            if (!queryText) {
                setSearchResults(popular);
                return;
            }

            // DEVNOTE: this is deliberately naive. A fuzzy search library like Fuse.js may also be appropriate
            const filtered = popular.filter((item) => item.title.toLowerCase().includes(queryText.toLowerCase()));

            setSearchResults(filtered);
        },
        [popular],
    );

    return (
        <div className={PageStyles.dashboard}>
            <header>
                <Search onSearch={onSearchChange} />
            </header>
            <main>
                <Popular items={searchResults} />
                <Featured items={featured} />
            </main>
        </div>
    );
};

export default Component;
