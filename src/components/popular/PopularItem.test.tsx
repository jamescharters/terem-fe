import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PopularItem from "./PopularItem";

describe("PopularItem", () => {
    it("renders the component", () => {
        const result = render(<PopularItem imageUrl="http://a.b" linkUrl="http://b.c" location="Sydney, Australia" title="A Fake Title" />);
        expect(result.asFragment()).toMatchSnapshot();
    });
});
