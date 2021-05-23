import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Layout, Tag, Avatar, Divider } from "antd";

import "./css/home.css";
import Cookies from "universal-cookie";
import VocaliHeader from "./Header.js";

const { Header, Content } = Layout;
const { CheckableTag } = Tag;
const tagsData = ["Alone", "Friends", "Superior"];
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
        <VocaliHeader
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
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={this.state.selectedPeople === tag}
                onChange={(checked) => this.handlePeopleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
            <Divider />
            <div className="question">What kind of mood you like today?</div>
            {tagsData2.map((tag) => (
              <CheckableTag
                key={tag}
                checked={this.state.selectedMood === tag}
                onChange={(checked) => this.handleMoodChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
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
      </Layout>
    );
  }
}

export default withRouter(Home);
