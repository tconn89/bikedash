import React from "react";
import { Button } from "@rmwc/button";
import CustomerPrices from "./CustomerPrices";
import Services from "./Services";
import "../../css/test.css";

const videoHeight = () => (window.innerWidth * 3) / 4;

export default class Home extends React.Component {
  navToCoreValues() {
    console.log("what");
    window.location.href = "/core-values";
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css"
        />

        {/* Transparency Overlay on top of Video Player */}
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
        <div className="test-container" style={{ height: videoHeight() }}>
          <div
            style={{
              background: "url(/img/ty-paints.jpg)",
              backgroundSize: "100% 100%",
              zIndex: 10,
              height: videoHeight(),
            }}
          />
          <div className="circle-row">
            <div className="circle">
              <img src="img/deck-repair2.jpg" alt="Circle Image 1" />
            </div>
            <div className="circle">
              <img src="img/deck-repair.jpg" alt="Circle Image 2" />
            </div>
            <div className="circle">
              <img src="img/deck-repair.jpg" alt="Circle Image 3" />
            </div>
            <div className="circle">
              <img src="img/deck-repair.jpg" alt="Circle Image 4" />
            </div>
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
      </div>
    );
  }
}

function Spacer() {
  return <div className="spacer grey" />;
}
