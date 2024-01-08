import React from "react";
import { Project } from "components/Project";

import BluePrint1 from "assets/img/project6/garden-side.jpg";
import BluePrint2 from "assets/img/project6/screen-door-side-blueprint.jpg";
import GravelShot from "assets/img/project6/gravel-shot.png";
import HammerTime from "assets/img/project6/hammer-time.png";

import ImageDetail from "assets/img/project6/Pour-Footer-Thumbnail.png";
import ImageDetail1 from "assets/img/project6/rafters.jpg";

import "./project-base.css";
import "./project-6.css";

export const CoveredPorch = () => {
  return (
    <div>
      <Project
        projectName="Three Season Covered Porch"
        projectDesc="Black Aluminum against White - Completed in One Week"
        images={[BluePrint1, BluePrint2]}
        stickerType="blueprint"
        bulletPoints={[
          "Created a 3-season covered porch that protects against insects and rain.",
          "",
          "The screen-tight system gives an easy to to install and repair system that looks beautiful with white vinyl caps.",
          "",
          '20 rafters were installed along with three 6"x6" posts.',
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
      <Project
        projectName="Three Season Covered Porch"
        projectDesc="Black Aluminum against White - Completed in One Week"
        images={[GravelShot, HammerTime, GravelShot]}
        stickerType="BeforeAfter"
        bulletPoints={[
          "Created a 3-season covered porch that protects against insects and rain.",
          "",
          "The screen-tight system gives an easy to to install and repair system that looks beautiful with white vinyl caps.",
          "",
          '20 rafters were installed along with three 6"x6" posts.',
        ]}
        detailImage={GravelShot}
        more={{
          title1: "Cutting the Angles",
          detail1:
            "Cutting angles with a Miter saw is recommended.  If you do not have a chop saw available, angles can be marked with a speed square and cut with a skill saw.",
          detailImage1: HammerTime,
          bulletPoints1: [
            "Railtop corners can appear to be seamless if cut to 45 degree angles.  Be sure to account for any imperfections in the angle of the railing.",
          ],
        }}
      />
    </div>
  );
};
