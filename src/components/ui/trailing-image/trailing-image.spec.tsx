import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TrailingImage from "./trailing-image";

describe("<TrailingImage/>", () => {
  it("renders correctly", () => {
    const { container } = render(<TrailingImage />);
    expect(container).toMatchSnapshot();
  });

  it("renders the correct number of AnimatedImage components", () => {
    const { container } = render(<TrailingImage />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBe(20); // As per the component logic
  });

  it("has the correct class names", () => {
    const { container } = render(<TrailingImage />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass(
      "storybook-fix",
      "relative",
      "flex",
      "min-h-80",
      "w-1/2",
    );
  });
});
