import React from "react";
import { TileItem } from "@/types/TileItem";
import { Destination } from "@/components/common/DestinationTile";

export const FeaturedItem: React.FC<TileItem> = (props) => {
    return <Destination tileData={props} />;
};

export default FeaturedItem;
