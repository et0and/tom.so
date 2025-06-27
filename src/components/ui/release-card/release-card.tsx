import { GitHubRelease } from "@/lib/actions/github";
import { Badge } from "../badge/badge";
import { formatDate } from "@/utils/dateFormatter";
import { Avatar, AvatarImage, AvatarFallback } from "./../avatar/avatar";
import { CalendarIcon, UserIcon, ExternalLinkIcon } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

interface ReleaseCardProps {
  release: GitHubRelease;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <div className="border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2>{release.name || release.tag_name}</h2>
            {release.prerelease && (
              <Badge variant="secondary">Pre-release</Badge>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm mb-3">
            <div className="flex items-center gap-1">
              <CalendarIcon size={14} />
              <time dateTime={release.published_at}>
                {formatDate(release.published_at)}
              </time>
            </div>

            <div className="flex items-center gap-2">
              <UserIcon size={14} />
              <div className="flex items-center gap-1">
                <Avatar className="w-5 h-5">
                  <AvatarImage
                    src={release.author.avatar_url}
                    alt={release.author.login}
                  />
                  <AvatarFallback>
                    {release.author.login.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <a
                  href={release.author.html_url}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {release.author.login}
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          href={release.html_url}
          className="link flex items-center gap-1 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
          <ExternalLinkIcon size={14} />
        </a>
      </div>

      {release.body && (
        <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300 [&>*]:mb-2">
          <MDXRemote
            source={release.body}
            options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [],
              },
            }}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold mt-6 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {children}
                </a>
              ),
            }}
          />
        </div>
      )}
    </div>
  );
}
