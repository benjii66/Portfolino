"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getGitHubStats } from "../api/GithubStats";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const AchievementsSection = () => {
  const [publicReposCount, setPublicReposCount] = useState(0);
  const [totalCommits, setTotalCommits] = useState(0);
  const [mostUsedLanguage, setMostUsedLanguage] = useState("");

  useEffect(() => {
    async function fetchStats() {
      const { publicReposCount, totalCommits, mostUsedLanguage } = await getGitHubStats("benjii66");
      setPublicReposCount(publicReposCount);
      setTotalCommits(totalCommits);
      setMostUsedLanguage(mostUsedLanguage);
    }
    fetchStats();
  }, []);

  const achievementsList = [
    {
      metric: "Repositories",
      value: publicReposCount,
      postfix: "+",
    },
    {
      metric: "Commits",
      value: totalCommits,
      postfix: "+",
    },
    {
      metric: "Most Used Language",
      value: mostUsedLanguage,
    },
    {
      metric: "Awards",
      value: 1,
    },
    {
      metric: "Years",
      value: 2,
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                {achievement.metric === "Most Used Language" ? (
                  <span className="text-white text-4xl font-bold">{achievement.value}</span>
                ) : (
                  <span className="text-white text-4xl font-bold">{achievement.value}</span>
                )}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AchievementsSection;