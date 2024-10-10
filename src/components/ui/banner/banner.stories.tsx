import * as React from "react";
import { Banner } from "./banner";
import { StoryFn, Meta } from "@storybook/react";

// Define the metadata for the component
export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "maintenance", "error", "link"],
      description: "The visual style of the banner",
    },
  },
} as Meta<typeof Banner>;

// Create a template for the component
const Template: StoryFn<typeof Banner> = (args) => <Banner {...args} />;

// Create different stories for each variant and size
export const Default = Template.bind({});
Default.args = {
  title: "Default banner",
  message: "This is a default banner message.",
  variant: "info",
  showIcon: true,
};

export const Maintenance = Template.bind({});
Maintenance.args = {
  title: "Maintenance banner",
  message: "This is a maintenance banner message.",
  variant: "maintenance",
  showIcon: true,
};

export const Error = Template.bind({});
Error.args = {
  title: "Error banner",
  message: "This is a error banner message.",
  variant: "error",
  showIcon: true,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  title: "Banner without Icon",
  message: "This is a banner without an icon.",
  variant: "info",
  showIcon: false,
};
