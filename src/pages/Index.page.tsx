import React from "react";
import PageStyles from "./Index.module.scss";

export const Component: React.FC<React.PropsWithChildren> = () => {
    return (
        <div className={PageStyles.dashboard}>
            <header></header>
            <main></main>
        </div>
    );
};

export default Component;
