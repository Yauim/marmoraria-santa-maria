import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "marmoraria-santa-maria";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
        typescript: {
          tsconfigPath: "tsconfig.github-pages.json",
        },
      }
    : {}),
};

export default nextConfig;
