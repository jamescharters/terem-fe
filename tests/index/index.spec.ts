import { test, expect } from "./index.base";

test("Render index page", async ({ page, IndexPage }) => {
    await IndexPage.goTo();

    await expect(IndexPage.popularHeading).toHaveText("Popular around you");

    await expect(IndexPage.featuredHeading).toHaveText("Featured");

    await expect(page).toHaveScreenshot({ fullPage: true });
});

test("Render 404 if user navigates to invalid location", async ({ page, NotFoundPage }) => {
    await NotFoundPage.goTo();

    await expect(NotFoundPage.heading).toHaveText("404");

    await expect(page).toHaveScreenshot({ fullPage: true });
});

test("Filter 'Popular around you' results on search text change with matches", async ({ page, IndexPage }) => {
    await IndexPage.goTo();

    await page.getByTestId("input-search").fill("Corporate");

    await expect(IndexPage.sectionPopular).toHaveScreenshot();
});

test("Filter 'Popular around you' and show message if no matches", async ({ page, IndexPage }) => {
    await IndexPage.goTo();

    await page.getByTestId("input-search").fill("FooBar");

    await expect(IndexPage.sectionPopular).toHaveScreenshot();
});

test("Scroll the carousel forwards", async ({ page, IndexPage }) => {
    await IndexPage.goTo();

    await expect(IndexPage.sectionPopular).toHaveScreenshot();

    await expect(IndexPage.carouselPrevious).not.toBeVisible();

    await page.getByTestId("button-carousel-next").click({
        clickCount: 5,
    });

    await expect(IndexPage.sectionPopular).toHaveScreenshot();

    await expect(IndexPage.carouselPrevious).toBeVisible();
});

test("Scroll the carousel backwards", async ({ page, IndexPage }) => {
    await IndexPage.goTo();

    await expect(IndexPage.sectionPopular).toHaveScreenshot();

    await page.getByTestId("button-carousel-next").click({
        clickCount: 5,
    });

    await expect(IndexPage.sectionPopular).toHaveScreenshot();

    await page.getByTestId("button-carousel-previous").click({
        clickCount: 5,
    });

    await expect(IndexPage.sectionPopular).toHaveScreenshot();

    await expect(IndexPage.carouselPrevious).not.toBeVisible();
});
