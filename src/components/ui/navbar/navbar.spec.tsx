import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./navbar";
import { expect, describe, it, vi } from "vitest";

// Mock the next/link and next/navigation modules
vi.mock("next/link", () => {
  const MockedLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  MockedLink.displayName = "MockedLink";
  return {
    default: MockedLink,
  };
});

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("<Navbar/>", () => {
  it("renders correctly", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
