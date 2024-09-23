import React from "react";
import { render } from "@testing-library/react";
import { Separator } from "./separator";

describe("<Separator/>", () => {
  it("renders correctly with default props", () => {
    const { container } = render(<Separator />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with vertical orientation", () => {
    const { container } = render(<Separator orientation="vertical" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with custom className", () => {
    const { container } = render(<Separator className="custom-class" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with decorative set to false", () => {
    const { container } = render(<Separator decorative={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
