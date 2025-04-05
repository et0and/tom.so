import { ArenaCarouselClient } from "./arena-carousel-client";

interface ArenaBlock {
  image: {
    display: {
      url: string;
    };
  };
  title: string;
}

interface ArenaCarouselProps {
  channelSlug: string;
}

async function fetchArenaChannel(slug: string) {
  const channelUrl = `https://api.are.na/v2/channels/${slug}/contents?per=20`;

  try {
    const response = await fetch(channelUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Are.na channel:", error);
    throw new Error("Failed to fetch Are.na channel");
  }
}

export async function ArenaCarousel({
  channelSlug,
}: Readonly<ArenaCarouselProps>) {
  const data = await fetchArenaChannel(channelSlug);

  const images = data.contents
    .filter((block: ArenaBlock) => block.image?.display)
    .map((block: ArenaBlock) => ({
      url: block.image.display.url,
      title: block.title,
    }))
    .slice(0, 5);

  return <ArenaCarouselClient images={images} channelSlug={channelSlug} />;
}
