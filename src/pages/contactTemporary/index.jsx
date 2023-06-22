import React from "react";
import { Typography } from "@rmwc/typography";
import { Grid, GridCell } from "@rmwc/grid";

export const ContactTemporary = () => {
  const styles = Styles();
  return (
    <div style={{ display: "block" }}>
      <Grid style={Object.assign(styles.white, styles.fullwidth)}>
        <GridCell span="3" />
        <GridCell span="6">
          <Typography theme="primary" use="headline2">
            <strong>Contact Us</strong>
          </Typography>
        </GridCell>
        <GridCell span="3" />

        <GridCell span="3" />
        <GridCell span="6">Give us a ring!</GridCell>
        <GridCell span="3" />

        <GridCell span="3" />
        <GridCell span="6">
          <ul>
            <li>phone - {decoratePhoneNumber(process.env.REACT_APP_PHONE)}</li>
            <li>email - {process.env.REACT_APP_EMAIL}</li>
          </ul>
        </GridCell>
        <GridCell span="3" />
      </Grid>
    </div>
  );
};

function Styles() {
  return {
    paper: {
      padding: 28,
      marginTop: 10,
      marginBottom: 10,
    },
    field: {
      padding: 12,
    },
    fullwidth: {
      width: "100%",
    },
    white: { background: "white" },
  };
}

function decoratePhoneNumber(str = "") {
  if (str.length < 0) return str;
  let result = "";
  let spaces = 0; // only add two spaces
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    counter++;

    if (counter === 3 && i !== str.length - 1 && spaces < 2) {
      result += " ";
      spaces += 1;
      counter = 0;
    }
  }

  return result;
}
