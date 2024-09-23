import React from "react";
import { render } from "@testing-library/react";
import { Skeleton } from "./skeleton";
import "@testing-library/jest-dom";

describe("<Skeleton/>", () => {
  it("renders correctly", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies custom className", () => {
    const { container } = render(<Skeleton className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toMatchSnapshot();
  });

  it("passes through additional props", () => {
    const { container } = render(<Skeleton data-testid="skeleton-test" />);
    expect(container.firstChild).toHaveAttribute(
      "data-testid",
      "skeleton-test",
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
