import React from "react";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./DestinationTile.module.scss";
import { TileItem } from "@/types/TileItem";
import classNames from "classnames";

interface MyComponentProps {
    className?: string;
    tileData: TileItem;
}

export const Destination: React.FC<MyComponentProps> = ({ className, tileData }) => {
    return (
        <div className={classNames(Styles.container, className)}>
            <img alt={tileData.title} src={tileData.imageUrl} />
            <div>
                <h4>{tileData.title}</h4>
                <p>
                    <FontAwesomeIcon icon={faLocationPin} />
                    <span>{tileData.location}</span>
                </p>
            </div>
        </div>
    );
};

export default Destination;
