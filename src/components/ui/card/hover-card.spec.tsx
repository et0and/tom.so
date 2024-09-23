import React from "react";
import { render } from "@testing-library/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card";

describe("<HoverCard/>", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <p>Hover card content</p>
        </HoverCardContent>
      </HoverCard>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders HoverCardTrigger correctly", () => {
    const { asFragment } = render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
      </HoverCard>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders HoverCardContent correctly", () => {
    const { asFragment } = render(
      <HoverCard>
        <HoverCardContent>
          <p>Hover card content</p>
        </HoverCardContent>
      </HoverCard>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
