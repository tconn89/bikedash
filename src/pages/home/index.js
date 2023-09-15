import React, { useMemo } from "react";
import { CustomerPrices } from "./CustomerPrices";
import Services from "./Services";
import { CircleImageButton } from "./CircleImageButton";
import "css/test.css";
import { useWindowSize } from "components/WindowSizeListener";
import { ArticleListSection } from "components/ArticleListSection/ArticleListSection";
import TrexFinished from "assets/img/project3/trex-finishing-touches.jpg";
import Image404 from "assets/img/tools-not-found.png";
import { LegalFooter } from "components/LegalFooter/LegalFooter";

export const Home = () => {
  const windowSize = useWindowSize();
  const imageHeight = useMemo(() => (windowSize.width * 3) / 4, [windowSize]);
  const isMobile = windowSize.width < 700;
  const crop = () => {
    if (isMobile) return imageHeight;
    if (imageHeight > 600) return 600;
    return 0.8 * imageHeight;
  };
  const cropImageHeight = crop();

  const articles = [
    {
      title: "Maiden Deck Railing Build",
      imageSrc: TrexFinished,
      link: "/decking-project-3",
    },
    {
      title: "More Coming Soon",
      imageSrc: Image404,
      link: "/",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css"
      />

      <div className="test-container" style={{ height: cropImageHeight }}>
        <div className="landing-image" style={{ height: cropImageHeight }}>
          <div
            style={{
              background: "url(/img/ty-paints.jpg)",
              backgroundSize: "100% 100%",
              height: imageHeight,
            }}
          />
        </div>
        <div
          className="overlay-grace"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            borderRadius: "50%",
          }}
        >
          <h2
            style={{
              fontFamily: "Luminari",
              textAlign: "center",
              color: "#53b2ea",
            }}
          >
            <div>Give grace to </div>
            <div>your backyard</div>
          </h2>
        </div>
        <div className="circle-row">
          <CircleImageButton singleLineText={false} text="Deck Repair" />
          <CircleImageButton singleLineText={false} text="Deck Builds" />
          <CircleImageButton singleLineText={true} text="Permits" />
          {!isMobile ? (
            <CircleImageButton singleLineText={true} text="Remodels" />
          ) : null}
        </div>
      </div>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />

      <Services />

      <WhiteSpacer />
      <WhiteSpacer />
      <WhiteSpacer />

      <CustomerPrices />

      <WhiteSpacer />
      <WhiteSpacer />
      <WhiteSpacer />

      <ArticleListSection articles={articles} />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <LegalFooter />
    </div>
  );
};

function Spacer() {
  return <div className="spacer grey" />;
}
function WhiteSpacer() {
  return <div className="spacer" />;
}
