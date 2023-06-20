import React from "react";
import ToolsNotFound from "assets/img/tools-not-found.png";
import { Typography } from "@rmwc/typography";

export const NotFound = () => {
  return (
    <div>
      <div style={{ margin: "0 20px" }}>
        <Typography theme="primary" use="headline2">
          <strong>Tool Not Found</strong>
        </Typography>
        <p>The page you are looking for does not exist.</p>
      </div>
      <div style={{ margin: "20px 0" }}>
        <img src={ToolsNotFound} alt="tools not found" />
      </div>
    </div>
  );
};
