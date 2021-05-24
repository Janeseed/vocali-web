import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Tag, Avatar } from "antd";

import Logo from "./vocali_logo2.svg";
import Cookies from "universal-cookie";

const { Header } = Layout;

const InfoHeader = ({ people, mood }) => {
  const [selectedPeople, setPeople] = useState(people);
  const [selectedMood, setMood] = useState(mood);
  const cookies = new Cookies();

  useEffect(() => {
    if (people && mood) {
      setPeople(people);
      setMood(mood);
    } else {
      setMood(cookies.get("mood", { path: "/" }));
      setPeople(cookies.get("people", { path: "/" }));
    }
  }, [mood, people]);

  return (
    <Header className="header">
      <img className="App-logo" src={Logo} alt="Vocali Logo" />
      <div className="user-info">
        <Avatar className="avatar" style={{ backgroundColor: "#D9D9D9" }}>
          S
        </Avatar>
        <Tag className="age-info">27</Tag>
        <Tag className="pitch-info">A#</Tag>
      </div>
      <div className="mood-dashboard">
        <p className="mood-title">Today's Mood</p>
        <Tag>{selectedPeople}</Tag>
        <Tag>{selectedMood}</Tag>
      </div>
    </Header>
  );
};

export default withRouter(InfoHeader);
