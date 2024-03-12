import React from "react";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./FeaturedItem.module.scss";
import { TileItem } from "@/types/TileItem";

export const FeaturedItem: React.FC<TileItem> = (props) => {
    return (
        <div className={Styles.container}>
            <img alt={props.title} src={props.imageUrl} />
            <div>
                <h4>{props.title}</h4>
                <p>
                    <FontAwesomeIcon icon={faLocationPin} size="1x" />
                    <span>{props.location}</span>
                </p>
            </div>
        </div>
    );
};

export default FeaturedItem;
