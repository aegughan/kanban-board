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
      <div className="iconDiv pad_10">
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="iconDiv pad_10">
        <FontAwesomeIcon icon={faSuitcase} />
      </div>
      <div className="iconDiv active pad_10">
        <FontAwesomeIcon icon={faPeopleGroup} />
      </div>
      <div className="iconDiv pad_10">
        <FontAwesomeIcon icon={faBook} />
      </div>
      <div className="iconDiv bottomFixed pad_10">
        <FontAwesomeIcon icon={faQuestionCircle} />
      </div>
    </div>
  );
};

export default Menubar;
