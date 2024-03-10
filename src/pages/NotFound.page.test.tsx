import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NotFound from "./NotFound.page";

describe("NotFound", () => {
    it("renders the component", () => {
        const result = render(<NotFound />);

        expect(result.asFragment()).toMatchSnapshot();
    });
});
