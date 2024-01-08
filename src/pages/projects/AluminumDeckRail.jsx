import React from "react";
import { Project } from "components/Project";

// import ImageAbove from "assets/img/project3/decking-stair-above.jpg";
// import Image1 from "assets/img/project3/decking-stairs-1.jpg";
// import ImageStar from "assets/img/project3/decking-stairs-ty.jpg";
import Image2 from "assets/img/project3/decking-stairs-2.jpg";
import ImageBefore from "assets/img/project3/old-decking-stairs.jpg";
import ImageAfter from "assets/img/project3/decking-finished.jpg";

import ImageDetail from "assets/img/project3/feature-aluminum-tubing.jpg";
import ImageDetail1 from "assets/img/project3/angle-cut1.png";

import "./project-base.css";

export const AluminumDeckRail = () => {
  return (
    <Project
      projectName="Deck Railing Replacement"
      projectDesc="Black Aluminum against White - Completed in One Week"
      images={[ImageBefore, Image2, ImageAfter]}
      bulletPoints={[
        'Painting the 2"x4"s white to match the siding of the house was the first step to create this beautiful railing.  Painting lumber requires that the wood be dried first.  If you do not want to wait 6-months to dry, kiln-dried lumber is a great but expensive option.',
        "",
        "Installing the black aluminum balusters using plastic connectors didn't require glue.  The spacing of the balusters can be created using a unifrom template to predrill the connector locations.",
        "",
        'This project required extra upfront work to re-align the 4"x4" guard posts.  The railing had fallen into a state of disrepair so we used a string level and shims to bring the posts into a straight line.',
      ]}
      detailImage={ImageDetail}
      more={{
        title1: "Cutting the Angles",
        detail1:
          "Cutting angles with a Miter saw is recommended.  If you do not have a chop saw available, angles can be marked with a speed square and cut with a skill saw.",
        detailImage1: ImageDetail1,
        bulletPoints1: [
          "Railtop corners can appear to be seamless if cut to 45 degree angles.  Be sure to account for any imperfections in the angle of the railing.",
        ],
      }}
    />
  );
};

// src/assets/img/project3/decking-stairs-ty.jpg
// ImageStar, ImageAbove
