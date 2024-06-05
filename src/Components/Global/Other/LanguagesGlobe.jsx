import React from "react";
import IconCloud from "../../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "css3",
  "postgresql",
  "jest",
  "git",
  "mysql",
  "tailwindcss",
  "gitkraken",
  "plesk",
  "express",
  "github",
  "java",
  "vite",
  "expo",
  "flutter",
];

export function LanguagesGlobe() {
  return (
    <div className="flex flex-col mx-auto md:w-1/2 items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
