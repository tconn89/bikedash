import React from "react";
import { Project } from "components/Project";

import ImageAbove from "assets/img/project3/decking-stair-above.jpg";
import Image1 from "assets/img/project3/decking-stairs-1.jpg";
import Image2 from "assets/img/project3/decking-stairs-2.jpg";
import ImageStar from "assets/img/project3/decking-stairs-ty.jpg";
import ImageBefore from "assets/img/project3/old-decking-stairs.jpg";

import ImageDetail from "assets/img/project3/feature-aluminum-tubing.jpg";

import "./project3.css";

export const AluminumDeckRail = () => {
  return (
    <Project
      projectName="Deck Railing Replacement"
      projectDesc="Black Aluminum against White"
      images={[ImageBefore, Image1, Image2]}
      bulletPoints={[
        "Having fun",
        "demolition",
        "Installing the balusters",
        "Drilling holes with a template",
        'Re-alignment of 4"x4" guard posts',
      ]}
      detailImage={ImageDetail}
    />
  );
};

// src/assets/img/project3/decking-stairs-ty.jpg
// ImageStar, ImageAbove
