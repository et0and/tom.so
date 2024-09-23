import React from "react";
import { render } from "@testing-library/react";
import { SkipLink } from "./skiplink";

describe("<SkipLink/>", () => {
  it("renders correctly", () => {
    const { container } = render(<SkipLink />);
    expect(container).toMatchSnapshot();
  });
});
