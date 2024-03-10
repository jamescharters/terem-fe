import { Outlet } from "react-router-dom";
import PageStyles from "./Default.module.scss";

export const DefaultLayout: React.FC<React.PropsWithChildren> = () => {
    return (
        <div className={PageStyles.container} data-testid="page">
            <Outlet />
        </div>
    );
};
