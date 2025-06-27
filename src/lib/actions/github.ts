"use server";

export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  html_url: string;
  prerelease: boolean;
  draft: boolean;
}

export async function getGitHubReleases(
  owner: string = "et0and",
  repo: string = "tom.so",
  perPage: number = 10,
): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${perPage}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "tom.so-changelog",

          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        // Cache for 1 hour (3600 seconds)
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`,
      );
    }

    const releases: GitHubRelease[] = await response.json();

    // Filter out drafts and sort by published date
    return releases
      .filter((release) => !release.draft)
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime(),
      );
  } catch (error) {
    console.error("Error fetching GitHub releases:", error);
    return [];
  }
}
