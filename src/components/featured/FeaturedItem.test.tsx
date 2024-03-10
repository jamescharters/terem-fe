import { render  } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FeaturedItem } from "./FeaturedItem";

describe("FeaturedItem", () => {
    it("renders correctly", () => {
        const result = render(<FeaturedItem imageUrl="http://a.b" linkUrl="http://b.c" location="Sydney, Australia" title="A Fake Title" />);
        expect(result.asFragment()).toMatchSnapshot();
    });
});
