import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import GetInTouch from "./GetInTouch";
import Stats from "./Stats";
import TechStack from "./TechStack";
import Services from "./Services";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Partners /> */}
      <Services />
      <TechStack />
      <Projects />
      <Stats />
      <GetInTouch />
    </div>
  );
}
