import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DefaultLayout } from "./DefaultLayout";

describe("DefaultLayout", () => {
    it("renders the component", () => {
        const result = render(<DefaultLayout />);

        expect(result.asFragment()).toMatchSnapshot();
    });
});
