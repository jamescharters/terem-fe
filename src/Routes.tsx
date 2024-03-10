import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE_PATHS } from "@/config/routes";
import { DefaultLayout } from "@/layouts/DefaultLayout";

const routes = createRoutesFromElements(
    <Route element={<DefaultLayout />}>
        <Route index path={ROUTE_PATHS.index} lazy={() => import("@/pages/Index.page")} />
    </Route>,
);

export const createRouter = () => createBrowserRouter(routes);
export default createRouter;
