import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import GetInTouch from "./GetInTouch";
import Stats from "./Stats";
import AboutUs from "./AboutUs";
import TechStack from "./TechStack";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <AboutUs />
      <Stats />
      <TechStack />
      <GetInTouch />
    </div>
  );
}
