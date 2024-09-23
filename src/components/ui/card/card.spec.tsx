import React from "react";
import { render } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";

describe("<Card/>", () => {
  it("renders Card correctly", () => {
    const { asFragment } = render(<Card>Test Card</Card>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders CardHeader correctly", () => {
    const { asFragment } = render(<CardHeader>Test Header</CardHeader>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders CardFooter correctly", () => {
    const { asFragment } = render(<CardFooter>Test Footer</CardFooter>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders CardTitle correctly", () => {
    const { asFragment } = render(<CardTitle>Test Title</CardTitle>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders CardDescription correctly", () => {
    const { asFragment } = render(
      <CardDescription>Test Description</CardDescription>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders CardContent correctly", () => {
    const { asFragment } = render(<CardContent>Test Content</CardContent>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders full Card structure correctly", () => {
    const { asFragment } = render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
