import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Destination } from "./DestinationTile";

describe("Destination", () => {
    it("renders correctly", () => {
        const mockTileData = {
            imageUrl: "http://a.b",
            linkUrl: "http://b.c",
            location: "Sydney, Australia",
            title: "A Fake Title",
        };
        const result = render(<Destination className="fooClassName" tileData={mockTileData} />);
        expect(result.asFragment()).toMatchSnapshot();
    });
});
