import React from "react";
import { Grid, GridCell } from "@rmwc/grid";

const development = Content("development");
const mobile = Content("mobile");
const geo = Content("geo");

export default class Services extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center", background: "#eee", width: "100%" }}>
        <div className="spacer" />
        <div className="spacer" />
        <h2 style={{ fontWeight: "bold" }}> Deck Services </h2>
        <Grid style={{ margin: "0 auto" }}>
          <Service data={development} />
          <Service data={mobile} />
          <Service data={geo} />
        </Grid>
      </div>
    );
  }
}

const Cell = (props) => (
  <GridCell style={{ textAlign: "center" }} span="4">
    {props.children}
  </GridCell>
);
function Service(props) {
  return (
    <Cell>
      <div style={{ marginLeft: "20%", width: "60%" }}>
        <img
          style={{
            width: props.data.title.toLowerCase() === "mobile" ? "88%" : "100%",
          }}
          src={props.data.image}
          alt="mobile"
        />
      </div>
      <div className="spacer" />
      <div style={{ fontWeight: "bold" }}> {props.data.title} </div>
      <div className="spacer" />
      <div style={{ marginLeft: "10%", width: "80%" }}>{props.data.detail}</div>
    </Cell>
  );
}

function Content(type) {
  if (type === "development")
    return {
      title: "Custom Builds",
      image: "/img/blueprint.png",
      detail: "Decking built to the dimensions you require.",
    };
  if (type === "mobile")
    return {
      title: "Extensions and Improvements",
      image: "/img/board-repair.png",
      detail:
        "Assess and replace damaged lumber.  Lengthen and create more deck space for your enjoyment.",
    };
  if (type === "geo")
    return {
      title: "High-quality and durable materials",
      image: "/img/lumber.png",
      detail:
        "All beams, joists, and posts constructed from the best white oak, cedar and redwood in the land!",
    };
  return {};
}
