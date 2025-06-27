import type { Metadata } from "next";
import { getGitHubReleases, type GitHubRelease } from "@/lib/actions/github";
import { Separator } from "@/components/ui/separator/separator";
import { ReleaseCard } from "@/components/ui/release-card/release-card";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Recent updates and releases for tom.so",
  openGraph: {
    title: "Changelog",
    description: "Recent updates and releases for tom.so",
    images: [
      {
        url: "https://tom.so/api/og?title=Changelog",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// Enable ISR with 1 hour revalidation
export const revalidate = 3600;

export default async function ChangelogPage() {
  const releases = await getGitHubReleases();

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-4xl pt-4">Changelog</h1>
      </div>

      <Separator className="my-4" />

      <p>Recent updates and releases for this site.</p>

      {releases.length === 0 ? (
        <div className="py-12">
          <p>No releases found.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {releases.map((release) => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>
      )}
    </>
  );
}
