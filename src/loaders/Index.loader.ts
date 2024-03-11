import { TileItem } from "@/types/TileItem";
import { LoaderFunction } from "react-router-dom";

export const IndexLoader = (async () => {
    const getFeaturedItems = await fetch("https://api.npoint.io/2e3b6104e9a3f2192241").then((data) => data.json());
    const getPopularItems = await fetch("https://api.npoint.io/752425c26c8097d400c3").then((data) => data.json());

    return {
        featured: getFeaturedItems || [],
        popular: getPopularItems || [],
    };
}) satisfies LoaderFunction;

export type IndexLoaderDataType = {
    featured: TileItem[];
    popular: TileItem[];
};

export default IndexLoader;
