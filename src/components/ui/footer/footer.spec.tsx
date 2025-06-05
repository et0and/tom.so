import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "./footer";

describe("<Footer/>", () => {
  it("renders correctly", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("displays the current year", () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it("contains accessibility and webring links", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Accessibility")).toHaveAttribute(
      "href",
      "/accessibility",
    );
    expect(getByText("webring")).toHaveAttribute(
      "href",
      "https://webring.xxiivv.com/#random",
    );
  });
});
