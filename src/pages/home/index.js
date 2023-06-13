import React from "react";
import { Button } from "@rmwc/button";
import CustomerPrices from "./CustomerPrices";
import Services from "./Services";
import { CircleImageButton } from "./CircleImageButton";
import "../../css/test.css";

const videoHeight = () => (window.innerWidth * 3) / 4;

export default class Home extends React.Component {
  navToCoreValues() {
    console.log("what");
    window.location.href = "/core-values";
  }
  render() {
    const cropImageHeight = 0.8 * videoHeight();
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
                height: videoHeight(),
              }}
            />
          </div>
          <div className="circle-row">
            <CircleImageButton singleLineText={false} text="Deck Repair" />
            <CircleImageButton singleLineText={false} text="Deck Builds" />
            <CircleImageButton singleLineText={true} text="Permitting" />
            <CircleImageButton singleLineText={true} text="Demolition" />
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

        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <CustomerPrices />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />

        <div className="title-container">
          <p className="company-statement">
            Work together to make a sustainable impact on the world
          </p>
          <div
            className="action-button"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button onClick={this.navToCoreValues} unelevated>
              <strong>Learn More</strong>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

function Spacer() {
  return <div className="spacer grey" />;
}
