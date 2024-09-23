import React from "react";
import { render } from "@testing-library/react";
import { Button, ButtonProps } from "./button";

describe("<Button/>", () => {
  const defaultProps: ButtonProps = {
    children: "Click me",
  };

  it("renders default button correctly", () => {
    const { asFragment } = render(<Button {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button with different variants", () => {
    const variants: ButtonProps["variant"][] = [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
    ];
    variants.forEach((variant) => {
      const { asFragment } = render(
        <Button {...defaultProps} variant={variant} />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders button with different sizes", () => {
    const sizes: ButtonProps["size"][] = ["default", "sm", "lg", "icon"];
    sizes.forEach((size) => {
      const { asFragment } = render(<Button {...defaultProps} size={size} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders button as child", () => {
    const { asFragment } = render(
      <Button {...defaultProps} asChild>
        <a href="https://example.com">Link Button</a>
      </Button>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders button with custom className", () => {
    const { asFragment } = render(
      <Button {...defaultProps} className="custom-class" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders disabled button", () => {
    const { asFragment } = render(<Button {...defaultProps} disabled />);
    expect(asFragment()).toMatchSnapshot();
  });
});
