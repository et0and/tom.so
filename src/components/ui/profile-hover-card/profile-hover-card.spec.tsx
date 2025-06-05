import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ProfileHoverCard } from "./profile-hover-card";

describe("<ProfileHoverCard />", () => {
  it("should render correctly", () => {
    const { container } = render(
      <ProfileHoverCard
        href="https://example.com"
        linkTitle="Example Link"
        avatarSrc="/avatar.jpg"
        avatarFallback="EX"
        title="Example Title"
        description="Example description text"
        joinedDate="Joined December 2023"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render with custom className", () => {
    const { container } = render(
      <ProfileHoverCard
        href="https://example.com"
        linkTitle="Example Link"
        avatarSrc="/avatar.jpg"
        avatarFallback="EX"
        title="Example Title"
        description="Example description text"
        joinedDate="Joined December 2023"
        className="custom-link"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
