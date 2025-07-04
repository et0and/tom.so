export interface PostItem {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt?: string;
  };
}

export interface Post {
  slug: string;
  content: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
}
