import React from "react";
import { withRouter } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

import Logo from "./vocali_logo2.svg";
import "./css/header.css";

const SimpleHeader = ({ history, back }) => {
  if (back === "none") {
    return (
      <div className="navbar">
        <div onClick={() => history.push("/")}>
          <img className="logo" src={Logo} alt="Vocali Logo" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <div onClick={() => history.push(back)}>
          <LeftOutlined className="return-button" />
        </div>
        <div onClick={() => history.push("/")}>
          <img className="logo" src={Logo} alt="Vocali Logo" />
        </div>
      </div>
    );
  }
};

export default withRouter(SimpleHeader);
