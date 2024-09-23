import React from "react";
import { render } from "@testing-library/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

describe("<Avatar/>", () => {
  it("renders Avatar correctly", () => {
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Avatar with AvatarImage correctly", () => {
    const { asFragment } = render(
      <Avatar>
        <AvatarImage src="test.jpg" alt="Test Avatar" />
      </Avatar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Avatar with AvatarFallback correctly", () => {
    const { asFragment } = render(
      <Avatar>
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Avatar with both AvatarImage and AvatarFallback", () => {
    const { asFragment } = render(
      <Avatar>
        <AvatarImage src="test.jpg" alt="Test Avatar" />
        <AvatarFallback>TA</AvatarFallback>
      </Avatar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
