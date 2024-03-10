import type { Page, Locator } from "@playwright/test";

export class NotFoundPage {
    public readonly heading: Locator;

    constructor(public readonly page: Page) {
        this.heading = page.getByTestId("page-heading");
    }

    public async goTo() {
        await this.page.goto(`/foo-bar`);
    }
}

export default NotFoundPage;
