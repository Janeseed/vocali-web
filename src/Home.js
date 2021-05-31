import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Layout, Tag, Divider } from "antd";
import { HeartOutlined, CoffeeOutlined, HomeOutlined } from "@ant-design/icons";


import "./css/home.css";
import Cookies from "universal-cookie";
import InfoHeader from "./InfoHeader.js";

const { Content, Footer } = Layout;
const { CheckableTag } = Tag;
const tagsData = ["Alone", "Together"];
const tagsData2 = ["Happy", "Energetic", "Depression", "Calm"];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
    this.state = {
      selectedPeople: "",
      selectedMood: "",
    };
  }

  componentDidMount() {
    const people = this.cookies.get("people", { path: "/" });
    if (people) {
      this.setState({ selectedPeople: people });
    }
    const mood = this.cookies.get("mood", { path: "/" });
    if (mood) {
      this.setState({ selectedMood: mood });
    }
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  handlePeopleChange(tag, checked) {
    const nextPeople = checked ? tag : "";
    this.setState({ selectedPeople: nextPeople });
    this.cookies.set("people", nextPeople, { path: "/" });
  }

  handleMoodChange(tag, checked) {
    const nextMood = checked ? tag : "";
    this.setState({ selectedMood: nextMood });
    this.cookies.set("mood", nextMood, { path: "/" });
  }

  render() {
    return (
      <Layout className="layout">
        <InfoHeader
          people={this.state.selectedPeople}
          mood={this.state.selectedMood}
        />
        <Content style={{ backgroundColor: "#ffffff" }}>
          <div className="selection-board">
            <div className="mood-selection">
              <p className="select-title">
                Select<br></br>Today's Mood
              </p>
            </div>
            <hr />
            <div className="question">With Whom?</div>
            <div className = "checkable-tag-div">
              {tagsData.map((tag) => (
                <CheckableTag
                  key={tag}
                  className ="checkable-tags"
                  checked={this.state.selectedPeople === tag}
                  onChange={(checked) => this.handlePeopleChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
            <Divider />
            <div className="question">What kind of mood you like today?</div>
            <div className = "checkable-tag-div">
              {tagsData2.map((tag) => (
                <CheckableTag
                  key={tag}
                  className ="checkable-tags"
                  checked={this.state.selectedMood === tag}
                  onChange={(checked) => this.handleMoodChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
          </div>
          <Button
            className="find-button"
            onClick={() => this.nextPath("/result")}
            Type="primary"
            Class="standard"
            State="normal"
          >
            FIND SONG
          </Button>
        </Content>
        <Footer className="vocali-footer">
            <div class="buttons">
                <Button
                className="show-result-button"
                type="text"
                icon={<CoffeeOutlined />}
                onClick={() => this.nextPath("/home")}
                >
                Mood
                </Button>
                <Divider type="vertical" />
                <Button
                className="show-result-button"
                type="text"
                icon={<HomeOutlined />}
                onClick={() => this.nextPath("/result")}
                >
                Result
                </Button>
                <Divider type="vertical" />
                <Button
                className="show-like-button"
                type="text"
                icon={<HeartOutlined />}
                onClick={() => this.nextPath("/likelist")}
                >
                Like List
                </Button>
            </div>
          </Footer>
      </Layout>
    );
  }
}

export default withRouter(Home);
