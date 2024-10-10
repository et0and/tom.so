import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card";
import { Button } from "../button/button";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <HoverCardTrigger>
          <Button variant="link">Hover over me</Button>
        </HoverCardTrigger>
        <HoverCardContent>This is the hover card content.</HoverCardContent>
      </>
    ),
  },
};
