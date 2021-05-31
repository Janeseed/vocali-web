import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Layout, Divider } from "antd";
import { HeartOutlined, CoffeeOutlined, HomeOutlined } from "@ant-design/icons";

import "./css/footer.css";

const { Footer } = Layout;

const VocaliFooter = (input) => {
  return (
    <Footer className="vocali-footer">
      <div class="buttons">
        <a href="/home" className="footer-button">
          <CoffeeOutlined className="footer-button-icon" />
          <span>Mood</span>
        </a>
        <Divider type="vertical" />
        <a href="/result" className="footer-button">
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
