import React from "react";
import {
  faHome,
  faSuitcase,
  faPeopleGroup,
  faBook,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menubar.css";
const Menubar = () => {
  return (
    <div className="menubar">
      <div className="iconDiv">
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="iconDiv">
        <FontAwesomeIcon icon={faSuitcase} />
      </div>
      <div className="iconDiv active">
        <FontAwesomeIcon icon={faPeopleGroup} />
      </div>
      <div className="iconDiv">
        <FontAwesomeIcon icon={faBook} />
      </div>
      <div className="iconDiv bottomFixed">
        <FontAwesomeIcon icon={faQuestionCircle} />
      </div>
    </div>
  );
};

export default Menubar;
