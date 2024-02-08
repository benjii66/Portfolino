import { Octokit } from "@octokit/rest";

export async function getGitHubStats(username) {
  const octokit = new Octokit();

  try {
    const response = await octokit.rest.users.getByUsername({
      username,
    });

    const publicReposCount = response.data.public_repos;

    const reposResponse = await octokit.rest.repos.listForUser({
      username,
    });
    const totalCommits = reposResponse.data.reduce(
      (acc, repo) => acc + repo.commits,
      0
    );

    const languages = await Promise.all( reposResponse.data.map(async (repo) => {
      const repoLanguagesResponse = await octokit.rest.repos.listLanguages({
        owner: username,
        repo: repo.name,
      });
      return repoLanguagesResponse.data;
    })
  );
  const languageCounts = {};
  languages.forEach((repoLanguages) => {
    for (const lang in repoLanguages) {
      languageCounts[lang] = (languageCounts[lang] || 0) + repoLanguages[lang];
    }
  });
  const mostUsedLanguage = Object.keys(languageCounts).reduce(
    (a, b) => (languageCounts[a] > languageCounts[b] ? a : b)
  );

  return {
    publicReposCount,
    totalCommits,
    mostUsedLanguage,
  };
} catch (error) {
  console.error("Error fetching GitHub data:", error.message);
  return {
    publicReposCount: 0,
    totalCommits: 0,
    mostUsedLanguage: "",
  };
}
}