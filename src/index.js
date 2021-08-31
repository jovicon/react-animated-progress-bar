// import React, { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import ProgressLine from "./ProgressLine";

function App() {
  return (
    <>
      {/* <ProgressLine label="Empty progressbar" />
      <ProgressLine
        label="Full progressbar"
        visualParts={[
          {
            percentage: "100%",
            color: "tan"
          }
        ]}
      />
      <ProgressLine
        label="One visual percentage - changed background"
        backgroundColor="lightblue"
        visualParts={[
          {
            percentage: "23%",
            color: "indianred"
          }
        ]}
      />
      <ProgressLine
        label="Two visual percentages"
        backgroundColor="lightgrey"
        visualParts={[
          {
            percentage: "53%",
            color: "steelblue"
          },
          {
            percentage: "13%",
            color: "deepskyblue"
          }
        ]}
      /> */}
      <ProgressLine
        label="Multiple parts"
        visualParts={[
          {
            percentage: "33.3%",
            color: "#2349A9"
          },
          {
            percentage: "33.3%",
            color: "#EFEF6C"
          },
          {
            percentage: "33.4%",
            color: "#00ADCC"
          }
        ]}
      />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
