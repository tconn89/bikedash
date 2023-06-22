import React from "react";
import { Button } from "@rmwc/button";
import { useNavigate } from "react-router-dom";
import "css/customerPrice.css";

export const CustomerPrices = () => {
  const low = { details: getPriceDetails("low") };
  const medium = { details: getPriceDetails("medium") };
  const high = { details: getPriceDetails("high") };

  const navigate = useNavigate();
  const navToContact = () => navigate("/contact-us");
  return (
    <div id="pricing-section" className="gray-bg">
      <div className="container pricing">
        <div className="row pricing-col">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 pricebox1">
            <div className="pricing-box">
              {priceHead("Ground-level Deck", 4200)}
              <div className="pricing-body">
                <ul>
                  {low.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <Button onClick={navToContact} unelevated>
                  <strong>Free Estimate</strong>
                </Button>
                <span />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 pricebox2">
            <div className="pricing-box popular">
              {priceHead("Screened-In Deck", 12000)}
              <div className="pricing-body">
                <ul>
                  {medium.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <Button onClick={navToContact} unelevated>
                  <strong>Free Estimate</strong>
                </Button>
                <span />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 pricebox3">
            <div className="pricing-box">
              {priceHead("Upper-Level Deck", 25000)}
              <div className="pricing-body">
                <ul>
                  {high.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <Button onClick={navToContact} unelevated>
                  <strong>Free Estimate</strong>
                </Button>
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function getPriceDetails(prices) {
  if (prices === "low")
    return [
      "Starting at standard 12'x8' sizes",
      "Offering discounts for detached stand-alone decks",
      "Flashings, beams, posts, joists, and more!",
    ];
  if (prices === "medium")
    return [
      "Enjoy additional rain-free space",
      "Enhanced Privacy and Comfort",
      "Option to add electric",
      "Insect Protection",
    ];
  if (prices === "high")
    return [
      "Strong Redwood Staircase",
      "Long last foundation",
      "Durable 6x6 posts",
      "Anchored Concrete Frost Piers",
    ];
  return [];
}

function toCash(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function priceHead(name, price) {
  return (
    <div className="pricing-head">
      <h4>{name}</h4>
      <h1 style={{ fontWeight: "normal" }}>
        ${toCash(price)}
        <span className="plus">+</span>
      </h1>
      <div className="spacer" />
    </div>
  );
}
