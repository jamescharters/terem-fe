import React from "react";
import Styles from "./PopularItem.module.scss";
import { TileItem } from "@/types/TileItem";
import { Destination } from "@/components/common/DestinationTile";

export const PopularItem: React.FC<TileItem> = (props) => {
    return <Destination className={Styles.popular} tileData={props} />;
};

export default PopularItem;
