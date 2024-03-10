import { TileItem } from "@/types/TileItem";
import { LoaderFunction } from "react-router-dom";

export const IndexLoader = (async () => {
    const getFeaturedItems = await Promise.resolve([
        {
            title: "Middle Harbour Yacht Club",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/97ac0fe2-575c-43b7-bc9a-9a451b45add4.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Boat License Course",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/eb6e9b0b-dfbd-492b-b13e-d206aa4cb8f2.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Corporate Boat Charter",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/1e937a03-2b6b-433d-bf23-3f4391cf4c1a.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Pro Performance Boat Ride",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/a292cffa-5ab6-4853-855a-b20d9e31ed17.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Middle Harbour Yacht Club 2",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/3be8b2dd-69ac-41fe-8a93-218c5d60cbb4.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Boat License Course 2",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/4c431cba-0517-4957-8ff2-f1ebd9a8f86c.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Corporate Boat Charter 2",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/06214b06-8bb1-4991-95b1-05df24909696.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Pro Performance Boat Ride 2",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/0cfb0851-e52b-49e3-8b2e-7bdef006db27.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Middle Harbour Yacht Club 3",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/a9e233eb-1d12-44d5-a321-784bd5301d47.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Boat License Course 3",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/4323e95a-d78e-4e5b-8d4f-8ed46144f296.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Corporate Boat Charter 3",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/8410864f-7b80-45cf-8e5f-80462c84e2a7.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
        {
            title: "Pro Performance Boat Ride 3",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/88b0ff8f-ba5c-4e63-b664-2214382101ac.webp",
            linkUrl: "#",
            location: "Sydney, AU",
        },
    ]);

    const getPopularItems = await Promise.resolve([
        {
            title: "Melbourne",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/59ba4224-029c-442a-b835-d71a06037305.webp",
            linkUrl: "#",
            location: "Victoria, Australia",
        },
        {
            title: "Whitsundays",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/26445bf6-3162-4ccd-bf8e-34c2db491921.webp",
            linkUrl: "#",
            location: "Queensland, Australia",
        },
        {
            title: "Kimberley",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/dc85f747-f9c4-4ab6-91ee-936d46ed6ded.webp",
            linkUrl: "#",
            location: "Western Australia",
        },
        {
            title: "Cairns",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/4b54a15c-4729-49a1-9aa7-85fbc9ab09d6.webp",
            linkUrl: "#",
            location: "Queensland, Australia",
        },
        {
            title: "Rottnest Island",
            imageUrl: "https://previews.imagelibrary.me/7474/hero/03387c98-2db1-43e8-aecf-e15a4e399bf4.webp",
            linkUrl: "#",
            location: "Western Australia",
        },
    ]);

    return {
        featured: getFeaturedItems,
        popular: getPopularItems,
    };
}) satisfies LoaderFunction;

export type IndexLoaderDataType = {
    featured: TileItem[];
    popular: TileItem[];
};

export default IndexLoader;
