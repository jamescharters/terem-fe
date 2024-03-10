import { test as base } from "@playwright/test";
import { IndexPage } from "../page-object-models/Index.pom";
import { NotFoundPage } from "../page-object-models/NotFound.pom";

type Fixtures = {
    IndexPage: IndexPage;
    NotFoundPage: NotFoundPage;
};

export const test = base.extend<Fixtures>({
    IndexPage: async ({ page }, use) => {
        await use(new IndexPage(page));
    },
    NotFoundPage: async ({ page }, use) => {
        await use(new NotFoundPage(page));
    },
});

export { expect } from "@playwright/test";

export default test;
