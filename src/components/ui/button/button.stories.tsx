import * as React from "react";
import { Button } from "./button";
import { StoryFn, Meta } from "@storybook/react";

// Define the metadata for the component
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "secondary", "link"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    children: {
      control: "text",
      description: "The text content of the button",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
} as Meta<typeof Button>;

// Create a template for the component
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Create different stories for each variant and size
export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: "Destructive Button",
  variant: "destructive",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const Link = Template.bind({});
Link.args = {
  children: "Link Button",
  variant: "link",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  size: "lg",
};

export const Icon = Template.bind({});
Icon.args = {
  children: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2v11z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  ),
  size: "icon",
  "aria-label": "Icon Button", // Important for accessibility
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
};

export const AsChild = Template.bind({});
AsChild.args = {
  children: <a href="#">Link as Child</a>,
  asChild: true,
};
