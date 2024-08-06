import { createReader } from "@keystatic/core/reader";
import { createGitHubReader } from "@keystatic/core/reader/github";
import keystaticConfig from "../../keystatic.config";

import { cache } from "react";
import { cookies, draftMode } from "next/headers";

export const reader = cache(() => {
  let isDraftModeEnabled = false;
  // draftMode throws in e.g. generateStaticParams
  try {
    isDraftModeEnabled = draftMode().isEnabled;
  } catch {}

  if (isDraftModeEnabled) {
    const branch = cookies().get("ks-branch")?.value;

    if (branch) {
      return createGitHubReader(keystaticConfig, {
        // Replace the below with your repo org an name
        repo: "et0and/tom.so",
        ref: branch,
        // Assuming an existing GitHub app
        token: cookies().get("keystatic-gh-access-token")?.value,
      });
    }
  }
  // If draft mode is off, use the regular reader
  return createReader(process.cwd(), keystaticConfig);
});
