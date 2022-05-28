import React from "react";
import "./Header.css";

const Header = ({ userName, onChangeHandler }) => {
  return (
    <div className="header">
      <div className="leftHeader font_weight_600">
        iamneo.ai Talent Center
      </div>
      <div className="rightHeader">
        <div>
          <input
            name="search"
            value={userName}
            placeholder="Search"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <button>+ Add New </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
