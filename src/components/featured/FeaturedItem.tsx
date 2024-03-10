import React from "react";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./FeaturedItem.module.scss";

export type FeaturedItemProps = {
    title: string;
    location: string;
    imageUrl: string;
    linkUrl: string;
};

export const FeaturedItem: React.FC<React.PropsWithChildren<FeaturedItemProps>> = (props) => {
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
