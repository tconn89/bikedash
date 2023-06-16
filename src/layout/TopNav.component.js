import {
  TopAppBar,
  TopAppBarNavigationIcon,
  TopAppBarRow,
  TopAppBarSection,
} from "@rmwc/top-app-bar";
import { Grid, GridCell } from "@rmwc/grid";

import React from "react";

const Logo = () => {
  return (
    <Grid className="logo-row">
      <GridCell phone={1} tablet={4} desktop={9}>
        <div style={{ height: 10 }} />
      </GridCell>
      <GridCell phone={3} tablet={4} desktop={3} className="logo-overflow">
        <div className="logo-container">
          <img className="logo" src="/img/full_logo.png" alt="logo" />
        </div>
      </GridCell>
    </Grid>
  );
};
export default class TopNav extends React.Component {
  render() {
    return (
      <TopAppBar style={{ background: "rgba(255,255,255,1)" }}>
        <TopAppBarRow>
          <TopAppBarSection style={{ overflowY: "hidden" }}>
            <TopAppBarNavigationIcon
              style={{ color: "#222" }}
              icon="menu"
              onClick={this.props.onMenuIconClick}
            />
            <Logo />
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    );
  }
}
