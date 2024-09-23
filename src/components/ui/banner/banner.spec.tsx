import React from "react";
import { render } from "@testing-library/react";
import { Banner, BannerProps } from "./banner";

// Mock the Lucide React component
jest.mock("lucide-react", () => ({
  AlertCircle: () => <div data-testid="mock-alert-circle" />,
}));

describe("<Banner/>", () => {
  const defaultProps: BannerProps = {
    title: "Test Title",
    message: "Test Message",
    variant: "info",
  };

  it("renders info banner correctly", () => {
    const { asFragment } = render(<Banner {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders maintenance banner correctly", () => {
    const { asFragment } = render(
      <Banner {...defaultProps} variant="maintenance" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders error banner correctly", () => {
    const { asFragment } = render(<Banner {...defaultProps} variant="error" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders banner without icon", () => {
    const { asFragment } = render(
      <Banner {...defaultProps} showIcon={false} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders banner with link", () => {
    const { asFragment } = render(
      <Banner
        {...defaultProps}
        linkName="Click here"
        linkUrl="https://example.com"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
