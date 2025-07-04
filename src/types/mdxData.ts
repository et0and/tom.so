export type Metadata = {
  date: string | number | Date;
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export interface MDXData {
  metadata: Metadata;
  slug: string;
  content: string;
}
