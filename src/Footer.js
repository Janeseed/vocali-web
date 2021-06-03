import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Divider } from "antd";
import { HeartOutlined, CoffeeOutlined, HomeOutlined } from "@ant-design/icons";

import Cookies from "universal-cookie";
import "./css/footer.css";

const { Footer } = Layout;

const VocaliFooter = ({ history }) => {
  const [selectedPeople, setPeople] = useState("");
  const [selectedMood, setMood] = useState("");

  useEffect(() => {
    const cookies = new Cookies();
    setMood(cookies.get("mood", { path: "/" }));
    setPeople(cookies.get("people", { path: "/" }));
  }, []);

  return (
    <>
      <div style={{ height: "100px", backgroundColor: "#f6f0fe" }}></div>
      <Footer className="vocali-footer">
        <div className="buttons">
          <div onClick={() => history.push("/home")} className="footer-button">
            <CoffeeOutlined className="footer-button-icon" />
            <span>Mood</span>
          </div>
          <Divider type="vertical" />
          <div
            onClick={() =>
              history.push("/result?people=" + selectedPeople + "&mood=" + selectedMood)
            }
            className="footer-button"
          >
            <HomeOutlined className="footer-button-icon" />
            <span>Result</span>
          </div>
          <Divider type="vertical" />
          <div onClick={() => history.push("/likelist")} className="footer-button">
            <HeartOutlined className="footer-button-icon" />
            <span>Like List</span>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default withRouter(VocaliFooter);
