import { describe, it, expect } from "vitest";
import { IndexLoader } from "./Index.loader";

describe("Index.loader", () => {
    it("returns data", async () => {
        const result = await IndexLoader();
        expect(result).toMatchSnapshot();
    });
});
