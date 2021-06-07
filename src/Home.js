import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Layout, Tag, Divider, Modal } from "antd";

import "./css/home.css";
import Cookies from "universal-cookie";
import InfoHeader from "./InfoHeader.js";
// import VocaliFooter from "./Footer.js";

const { Content } = Layout;
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
      showModal: false,
    };
    this.nextPath = this.nextPath.bind(this);
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

  handleModalChange = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  handleFindButtonClick = () => {
    const selectedMood = this.state.selectedMood;
    const selectedPeople = this.state.selectedPeople;
    if (selectedMood === "" || selectedPeople === "") {
      this.handleModalChange();
      return;
    }
    this.props.history.push("/result?people=" + selectedPeople + "&mood=" + selectedMood);
  };

  render() {
    return (
      <div className="custom-container">
        <InfoHeader
          history={this.props.history}
          people={this.state.selectedPeople}
          mood={this.state.selectedMood}
        />
        <div className="flex-row-container">
          <div className="selection-board">
            <div className="mood-selection">
              <p className="select-title">
                Select<br></br>Today's Mood
              </p>
            </div>
            <hr />
            <div className="question">With Whom?</div>
            <div className="checkable-tag-div">
              {tagsData.map((tag) => (
                <CheckableTag
                  key={tag}
                  className="checkable-tags"
                  checked={this.state.selectedPeople === tag}
                  onChange={(checked) => this.handlePeopleChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
            <Divider />
            <div className="question">What type of mood are you feeling today?</div>
            <div className="checkable-tag-div">
              {tagsData2.map((tag) => (
                <CheckableTag
                  key={tag}
                  className="checkable-tags"
                  checked={this.state.selectedMood === tag}
                  onChange={(checked) => this.handleMoodChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </div>
          </div>
          <Button
            className="next-button standard"
            onClick={this.handleFindButtonClick}
            type="primary"
          >
            FIND SONG
          </Button>
        </div>

        <Modal
          title="Warning"
          visible={this.state.showModal}
          onOk={this.handleModalChange}
          footer={[
            <Button key="ok" type="primary" onClick={this.handleModalChange}>
              OK
            </Button>,
          ]}
        >
          <p>You should select one tag from each category :)</p>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Home);
