import React from "react";
import { Button } from "@rmwc/button";
import { useNavigate } from "react-router-dom";

export const CustomerPrices = () => {
  const low = { details: getPriceDetails("low") };
  const medium = { details: getPriceDetails("medium") };
  const high = { details: getPriceDetails("high") };

  const navigate = useNavigate();
  const navToContact = () => navigate.push("/contact-us");
  return (
    <div id="pricing-section" className="gray-bg">
      <div className="container">
        <div className="row pricing-col">
          <div className="col-sm-4 col-4 pricebox1">
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
          <div className="col-sm-4 col-4 pricebox2">
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
          <div className="col-sm-4 col-4 pricebox3">
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
      "Attached to house",
      "Offering discounts for detached stand-alone decks",
    ];
  if (prices === "medium")
    return ["Option to add electric", "Enjoy additional rain-free space"];
  if (prices === "high")
    return ["Strong Redwood Staircase", "Long last foundation", ""];
  return [];
}

function toCash(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function priceHead(name, price) {
  return (
    <div className="pricing-head">
      <h4>{name}</h4>
      <h1 style={{ fontWeight: "normal" }}>${toCash(price)}+</h1>
      <div className="spacer" />
    </div>
  );
}
