import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import GetInTouch from "./GetInTouch";
import Stats from "./Stats";
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <AboutUs />
      <Stats />
      <GetInTouch />
    </div>
  );
}
