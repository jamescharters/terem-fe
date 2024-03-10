import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Featured } from "./Featured";

describe("Featured", () => {
    it("renders correctly", () => {
        const mockItems = [
            {
                imageUrl: "http://a.b",
                linkUrl: "http://b.c",
                location: "Sydney, Australia",
                title: "A Fake Title",
            },
        ];
        const result = render(<Featured items={mockItems} />);
        expect(result.asFragment()).toMatchSnapshot();
    });

    it("renders correctly if there are no items", () => {
        const result = render(<Featured items={[]} />);
        expect(result.asFragment()).toMatchSnapshot();
    });
});
