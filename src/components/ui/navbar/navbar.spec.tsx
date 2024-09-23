import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./navbar";

// Mock the next/link and next/navigation modules
jest.mock("next/link", () => {
  const MockedLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  MockedLink.displayName = "MockedLink";
  return MockedLink;
});

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("<Navbar/>", () => {
  it("renders correctly", () => {
    const { usePathname } = require("next/navigation");
    usePathname.mockReturnValue("/");

    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  it("does not render when pathname starts with /keystatic", () => {
    const { usePathname } = require("next/navigation");
    usePathname.mockReturnValue("/keystatic/some-path");

    const { container } = render(<Navbar />);
    expect(container.firstChild).toBeNull();
  });
});
