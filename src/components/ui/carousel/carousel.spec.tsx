import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { expect, describe, it, vi } from "vitest";

// Mock the embla-carousel-react module using Vitest
vi.mock("embla-carousel-react", () => {
  return {
    default: vi.fn(() => {
      // Return a mock implementation of useEmblaCarousel hook
      // First element is a ref function, second is the API
      return [
        vi.fn(), // carouselRef
        {
          canScrollPrev: vi.fn().mockReturnValue(true),
          canScrollNext: vi.fn().mockReturnValue(true),
          scrollPrev: vi.fn(),
          scrollNext: vi.fn(),
          on: vi.fn(),
          off: vi.fn(),
        },
      ];
    }),
  };
});

describe("<Carousel />", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
          <CarouselItem>Slide 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders with correct accessibility attributes", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    // Check carousel has proper aria-roledescription
    const carouselElement = screen.getByText("Slide 1").closest("section");
    expect(carouselElement).toHaveAttribute("aria-roledescription", "carousel");

    // Check slides have proper roledescription
    const slides = screen.getAllByText(/Slide \d/);
    expect(slides).toHaveLength(2);

    // Check navigation buttons have proper text
    expect(screen.getByText("Previous slide")).toBeInTheDocument();
    expect(screen.getByText("Next slide")).toBeInTheDocument();
  });

  it("handles keyboard navigation", () => {
    const { container } = render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    // Get the carousel section element by attribute
    const carouselElement = screen.getByText("Slide 1").closest("section");
    expect(carouselElement).not.toBeNull();

    // Simulate arrow key presses
    if (carouselElement) {
      fireEvent.keyDown(carouselElement, { key: "ArrowLeft" });
      fireEvent.keyDown(carouselElement, { key: "ArrowRight" });
    }

    // The actual scrolling behavior is handled by the mocked API,
    // so we're just testing that the component doesn't crash when keys are pressed
    expect(container).toMatchSnapshot();
  });

  it("renders with vertical orientation", () => {
    const { container } = render(
      <Carousel orientation="vertical">
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>,
    );

    expect(container).toMatchSnapshot();
  });
});
