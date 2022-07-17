import React from "react";
import JupViewer from "./Jupviewer";

function GetSummary() {
  return (
    <>
      <JupViewer 
        file="https://raw.githubusercontent.com/shaurya5/meeting-summarizer-web/master/Extractive%20Summarization.ipynb" 
      />
    </>
  );
}

export default GetSummary;