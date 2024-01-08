import React from "react";
import { Brochure } from "components/Brochure";

import ImageBefore from "assets/img/project4/quarter-ceiling-planks.jpg";
import ImageAfter from "assets/img/project4/last-plank-installation.jpg";

import ImageDetail from "assets/img/project4/overall-finish.jpg";
import ImageDetail1 from "assets/img/project4/awe-inspiring-deck.jpg";

import "./brochure1.css";

export const PrintableBrochure = () => {
  return (
    <Brochure
      images={[ImageBefore, ImageAfter]}
      bulletPoints={[
        "Screened-in three season covered porches are a great choice for North Carolina.",
        "Porch can be used from April until December of most years.",
        "Screening protects from insects like mosquitoes and horse flies",
        "Protect your decking and outdoor furniture from rain and UV damage.",
        "Save money by taking advantage of our fall discount on screened-in covered porch today!",
      ]}
      detailImage={ImageDetail}
      more={{
        title1: "Searching for a finished look?",
        detail1:
          "It's often the final pieces of plank and trim that make the deck shine.  These stained ceiling planks brought the whole project together!",
        detailImage1: ImageDetail1,
        bulletPoints1: [
          "Covering up those ceiling joists on a second floor deck makes all the difference.",
          "Ask about any electrical fixtures you want installed for your screened-in porch today!",
        ],
      }}
    />
  );
};
