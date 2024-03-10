import { render, screen, waitFor  } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

describe("Search", () => {
    it("renders correctly", () => {
        const result = render(<Search onSearch={() => {}} />);
        expect(result.asFragment()).toMatchSnapshot();
    });

    it("calls 'onSearch' when text is changed", async () => {
        const mockFn = vi.fn()
        render(<Search onSearch={mockFn} />);
        const input = await screen.findByTestId("input-search");
        userEvent.type(input, "new value");
        await waitFor(() => expect(mockFn).toHaveBeenCalledWith("new value"));
    });
});
