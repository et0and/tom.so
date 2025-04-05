export interface ArenaAttachment {
  file_name: string;
  file_size: number;
  file_size_display: string;
  content_type: string;
  extension: string;
  url: string;
}

export interface ArenaImage {
  filename: string;
  content_type: string;
  updated_at: string;
  thumb: { url: string };
  square: { url: string };
  display: { url: string };
  large: { url: string };
  original: {
    url: string;
    file_size?: number;
    file_size_display?: string;
  };
}

export interface ArenaUser {
  id: number;
  slug: string;
  username: string;
  full_name: string;
  avatar: string;
  avatar_image?: {
    thumb: string;
    display: string;
  };
  [key: string]: any;
}

export interface ArenaContent {
  id: number;
  title: string;
  updated_at: string;
  created_at: string;
  description: string | null;
  content: string | null;
  source: string | null;
  image: ArenaImage | null;
  attachment: ArenaAttachment | null;
  position: number;
  selected: boolean;
  class: string;
  base_class: string;
  user: ArenaUser;
  connection_id: number;
  connected_at: string;
  connected_by_user_id: number;
  connected_by_username: string;
  connected_by_user_slug: string;
}

export interface ArenaChannel {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  published: boolean;
  slug: string;
  length: number;
  kind: string;
  status: string;
  contents: ArenaContent[];
  [key: string]: any;
}
