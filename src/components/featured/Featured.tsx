import React from "react";
import Styles from "./Featured.module.scss";
import { FeaturedItem } from "./FeaturedItem";
import { TileItem } from "@/types/TileItem";

export type FeaturedProps = {
    items: TileItem[];
};

export const Featured: React.FC<FeaturedProps> = (props) => {
    return (
        <section className={Styles.container}>
            <h3 data-testid="heading-featured-items">Featured</h3>
            <div className={Styles.items}>
                {props.items.length === 0 ? (
                    <p>Sorry, there are no featured items available.</p>
                ) : (
                    props.items.map((item) => <FeaturedItem key={item.title} {...item} />)
                )}
            </div>
        </section>
    );
};

export default Featured;
