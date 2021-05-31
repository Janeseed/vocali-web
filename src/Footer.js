import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Divider } from "antd";
import { HeartOutlined, CoffeeOutlined, HomeOutlined } from "@ant-design/icons";

import Cookies from "universal-cookie";
import "./css/footer.css";

const { Footer } = Layout;

const VocaliFooter = () => {
  const [selectedPeople, setPeople] = useState("");
  const [selectedMood, setMood] = useState("");
  const cookies = new Cookies();

  useEffect(() => {
    setMood(cookies.get("mood", { path: "/" }));
    setPeople(cookies.get("people", { path: "/" }));
  }, [cookies]);

  return (
    <Footer className="vocali-footer">
      <div className="buttons">
        <a href="/home" className="footer-button">
          <CoffeeOutlined className="footer-button-icon" />
          <span>Mood</span>
        </a>
        <Divider type="vertical" />
        <a
          href={"/result?people=" + selectedPeople + "&mood=" + selectedMood}
          className="footer-button"
        >
          <HomeOutlined className="footer-button-icon" />
          <span>Result</span>
        </a>
        <Divider type="vertical" />
        <a href="/likelist" className="footer-button">
          <HeartOutlined className="footer-button-icon" />
          <span>Like List</span>
        </a>
      </div>
    </Footer>
  );
};

export default withRouter(VocaliFooter);
