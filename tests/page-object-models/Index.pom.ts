import type { Page, Locator } from "@playwright/test";

export class IndexPage {
    public readonly popularHeading: Locator;

    public readonly featuredHeading: Locator;

    public readonly sectionPopular: Locator;

    public readonly carouselPrevious: Locator;

    public readonly carouselNext: Locator;

    constructor(public readonly page: Page) {
        this.popularHeading = page.getByTestId("heading-popular-items");
        this.featuredHeading = page.getByTestId("heading-featured-items");
        this.sectionPopular = page.getByTestId("section-popular");
        this.carouselPrevious = page.getByTestId("button-carousel-previous");
        this.carouselNext = page.getByTestId("button-carousel-next");
    }

    public async goTo() {
        await this.page.goto(`/`, { waitUntil: "networkidle" });
    }
}

export default IndexPage;
