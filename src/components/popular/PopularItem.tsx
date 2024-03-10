import React from "react";
import Styles from "./PopularItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { TileItem } from "@/types/TileItem";

export const PopularItem: React.FC<TileItem> = (props) => {
    return (
        <div className={Styles.container}>
            <img alt={props.title} src={props.imageUrl} />
            <div>
                <h4>{props.title}</h4>
                <p>
                    <FontAwesomeIcon icon={faLocationPin} />
                    <span>{props.location}</span>
                </p>
            </div>
        </div>
    );
};

export default PopularItem;
