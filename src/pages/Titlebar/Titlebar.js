import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Titlebar.css";
const Titlebar = () => {
  return (
    <div className="titlebar font_weight_600">
      <FontAwesomeIcon icon={faSuitcase} border/> &nbsp;&nbsp;
      <span>Jobs &gt; Full-stack Engineer</span>
      <span className="viewJob">View Job Details</span>
    </div>
  );
};

export default Titlebar;
