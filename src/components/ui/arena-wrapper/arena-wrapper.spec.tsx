import { render } from "@testing-library/react";
import ArenaWrapper from "./arena-wrapper";

describe("<ArenaWrapper />", () => {
  it("renders correctly with channel slug", () => {
    const channelSlug = "example-channel";
    const { container } = render(<ArenaWrapper channelSlug={channelSlug} />);

    expect(container).toMatchSnapshot();
  });

  it("creates iframe with correct src based on channelSlug", () => {
    const channelSlug = "example-channel";
    const { getByTitle } = render(<ArenaWrapper channelSlug={channelSlug} />);

    const iframe = getByTitle(`Are.na channel ${channelSlug}`);
    expect(iframe.getAttribute("src")).toBe(
      `https://www.are.na/tom/${channelSlug}/embed`,
    );
    expect(iframe.getAttribute("width")).toBe("100%");
    expect(iframe.getAttribute("height")).toBe("590");
  });
});
