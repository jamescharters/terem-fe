import { TileItem } from "@/types/TileItem";
import { LoaderFunction } from "react-router-dom";

export const IndexLoader = (async () => {
    const getFeaturedItems = await fetch("https://api.jsonbin.io/v3/qs/65ee374e266cfc3fde968c68").then((data) => data.json());

    const getPopularItems = await fetch("https://api.jsonbin.io/v3/qs/65ee37ba1f5677401f3ba42e").then((data) => data.json());

    return {
        featured: getFeaturedItems?.record || [],
        popular: getPopularItems?.record || [],
    };
}) satisfies LoaderFunction;

export type IndexLoaderDataType = {
    featured: TileItem[];
    popular: TileItem[];
};

export default IndexLoader;
