import React from "react";
import GeneralSection from "../../GeneralSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <GeneralSection {...homeObjOne} />
      <GeneralSection {...homeObjTwo} />
      <GeneralSection {...homeObjThree} />
      <GeneralSection {...homeObjFour} />
    </>
  );
}

export default Home;
