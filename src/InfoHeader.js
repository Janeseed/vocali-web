import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Tag, Avatar, Space } from "antd";

import Logo from "./vocali_logo2.svg";
import Cookies from "universal-cookie";
import * as vocaliAPI from "./api/api.js";
import "./css/header.css";

const { Header } = Layout;

const InfoHeader = ({ people, mood }) => {
  const [selectedPeople, setPeople] = useState(people);
  const [selectedMood, setMood] = useState(mood);
  const [userName, setName] = useState("-");
  const [userAge, setAge] = useState("-");
  const [userPitch, setPitch] = useState("-");
  const cookies = new Cookies();

  useEffect(() => {
    const userid = cookies.get("id", { path: "/" });
    vocaliAPI.getUser(userid).then((res) => {
      setAge(res.data.age);
      setName(res.data.name);
      setPitch(res.data.minPitch + " - " + res.data.maxPitch);
    });
  }, []);

  useEffect(() => {
    if (people && mood) {
      setPeople(people);
      setMood(mood);
    } else {
      setMood(cookies.get("mood", { path: "/" }));
      setPeople(cookies.get("people", { path: "/" }));
    }
  }, [cookies, mood, people]);

  return (
    <Header className="header">
      <div className="row">
        <a href="/" style={{ lineHeight: 0 }}>
          <img className="logo-left" src={Logo} alt="Vocali Logo" />
        </a>
        <div className="user-info">
          <Avatar className="avatar" style={{ backgroundColor: "#D9D9D9" }}>
            {userName.slice(0, 1)}
          </Avatar>
          <Tag className="age-info">{userAge}</Tag>
          <Tag className="pitch-info">{userPitch}</Tag>
        </div>
      </div>
      <div className="mood-dashboard">
        <p className="mood-title">Today's Mood</p>
        <div className="mood-info-div">
          <Tag className="whom-info">{selectedPeople}</Tag>
          <Tag className="mood-info">{selectedMood}</Tag>
        </div>
      </div>
    </Header>
  );
};

export default withRouter(InfoHeader);
