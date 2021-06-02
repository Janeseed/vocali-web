import React from "react";
import { withRouter } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

import Logo from "./vocali_logo2.svg";
import "./css/header.css";

const SimpleHeader = (input) => {
  if (input.back === "none") {
    return (
      <div className="navbar">
        <a href="/">
          <img className="logo" src={Logo} alt="Vocali Logo" />
        </a>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <a href={input.back}>
          <LeftOutlined className="return-button" />
        </a>
        <a href="/">
          <img className="logo" src={Logo} alt="Vocali Logo" />
        </a>
      </div>
    );
  }
};

export default withRouter(SimpleHeader);
