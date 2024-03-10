import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE_PATHS } from "@/config/routes";
import { NotFound } from "@/pages/NotFound.page";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { IndexLoader } from "@/loaders/Index.loader";

const routes = createRoutesFromElements(
    <Route element={<DefaultLayout />}>
        <Route index path={ROUTE_PATHS.index} loader={IndexLoader} lazy={() => import("@/pages/Index.page")} />
        <Route path={ROUTE_PATHS.unknown} element={<NotFound />} />
    </Route>,
);

export const createRouter = () => createBrowserRouter(routes);
export default createRouter;
