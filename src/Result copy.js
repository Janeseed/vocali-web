import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Cookies from "universal-cookie";

import { Button, Skeleton, Card, Layout, Tag, Modal, Radio } from "antd";
import { FrownOutlined, HeartOutlined, QuestionOutlined } from "@ant-design/icons";

import "./css/home.css";
import "./css/result.css";
import InfoHeader from "./InfoHeader.js";
import VocaliFooter from "./Footer.js";
import * as vocaliAPI from "./api/api.js";

const { Content } = Layout;
const { Meta } = Card;
const { CheckableTag } = Tag;

const Result = () => {
  const userActions = [
    {
      name: "dislike",
      displayName: (
        <p className="feedback-tag-description">
          I don't <br></br>like it
        </p>
      ),
      icon: <FrownOutlined className="feedback-tag-icon" />,
    },
    {
      name: "noclue",
      displayName: (
        <p className="feedback-tag-description">
          I have <br></br>no clue
        </p>
      ),
      icon: <QuestionOutlined className="feedback-tag-icon" />,
    },
    {
      name: "like",
      displayName: (
        <p className="feedback-tag-description">
          Show more <br></br>like this!
        </p>
      ),
      icon: <HeartOutlined className="feedback-tag-icon" />,
    },
  ];

  const [songList, setSongList] = useState([]);
  const [currSongIndex, setCurrSongList] = useState(0);
  const [feedbacks, setFeedbacks] = useState(new Map());
  const [loading, setLoading] = useState(true);
  const [adjustModal, setAdjustModal] = useState(false);
  const [explainModal, setExplainModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState("");
  const [moodWeight, setMoodWeight] = useState("0");
  const [pitchWeight, setPitchWeight] = useState("0");
  const [prefWeight, setPrefWeight] = useState("0");
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedPeople, setSelectedPeople] = useState("");
  const [userId, setUserId] = useState("");

  function loadSongFromModel() {
    console.log(this.state.userId);
    vocaliAPI
      .getRecommendation(
        this.state.userId,
        this.state.selectedMood + "," + this.state.selectedPeople
      )
      .then((result) => {
        console.log(result);
      });
    this.setState({ loading: false });
    // TODO: Input 받아서 this.state.songList에 넣기
  }

  function handleSelectedFeedback(tag, checked, song) {
    if (checked) {
      this.setState({ feedbacks: this.state.feedbacks.set(song.id, tag) });
    }
    vocaliAPI.selectSong(this.state.userId, [song], tag);
    console.log(this.state.feedbacks);
    if (this.state.currSongIndex < 4) {
      this.setState({ currSongIndex: this.state.currSongIndex + 1 });
    } else {
      console.log("end!");
      this.setState({ loading: true });
    }
  }

  function handleExplainModalChange() {
    setExplainModal(!explainModal);
  }

  function handleAdjustModalChange() {
    if (this.state.adjustModal) {
      const cookies = new Cookies();
      const userId = cookies.get("id", { path: "/" });
      const data = {
        moodWeight: parseFloat(this.state.moodWeight),
        prefWeight: parseFloat(this.state.prefWeight),
        pitchWeight: parseFloat(this.state.pitchWeight),
      };
      vocaliAPI.modifyUser(userId, data).then(() => window.location.reload());
    }
    this.setState({ adjustModal: !this.state.adjustModal });
  }

  function onChangeMood(e) {
    setMoodWeight(e.target.value);
  }

  function onChangePitch(e) {
    setPitchWeight(e.target.value);
  }

  function onChangeSongPref(e) {
    setPrefWeight(e.target.value);
  }

  function componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const cookies = new Cookies();
    const userId = cookies.get("id", { path: "/" });
    this.setState({ userId: userId, selectedMood: values.mood, selectedPeople: values.people });

    // Get weight
    vocaliAPI.getUser(userId).then((result) => {
      this.setState({ moodWeight: result.data.moodWeight.toString() });
      this.setState({ pitchWeight: result.data.pitchWeight.toString() });
      this.setState({ prefWeight: result.data.prefWeight.toString() });
    });
    this.loadSongFromModel();
  }

  const currSong = this.state.songList[this.state.currSongIndex];
  return (
    <div style={{ backgroundColor: "#F6F0FE" }}>
      <InfoHeader history={this.props.history} />
      <Content className="result-contents">
        <p className="result-description">Vocali found the best song for you!</p>
        <p className="result-description-small">
          If you leave feedback on the recommended song, <br />
          we will recommend a new song.
        </p>
        <Card
          className="song-info"
          title={`Song No. ${currSong.songNum}`}
          extra={
            <Button type="link" onClick={this.handleExplainModalChange} style={{ padding: "0" }}>
              Why this song?
            </Button>
          }
          actions={this.userActions.map((userAction) => (
            <CheckableTag
              key={userAction.name}
              checked={this.state.feedbacks.get(currSong.id) === userAction.name}
              onChange={(checked) =>
                this.handleSelectedFeedback(userAction.name, checked, currSong)
              }
              style={{ width: "80%", padding: "5px", margin: "0" }}
            >
              {userAction.icon}
              {userAction.displayName}
            </CheckableTag>
          ))}
        >
          <Skeleton loading={this.state.loading} active>
            <Meta className="card-skeleton" title={currSong.title} description={currSong.artist} />
          </Skeleton>
        </Card>
        <p className="result-description-small">Don't like the result?</p>
        <Button className="adjust-button" type="primary" onClick={this.handleAdjustModalChange}>
          Adjust factor importance
        </Button>
        <Modal
          title="Adjust factor importance"
          visible={this.state.adjustModal}
          onCancel={this.handleAdjustModalChange}
          footer={[
            <Button
              key="weight-control-confirm"
              type="primary"
              onClick={this.handleAdjustModalChange}
            >
              CONFIRM
            </Button>,
          ]}
        >
          <p>You can change how much each factor influences the recommendation</p>
          <div className="weight-control-slider">
            <p className="weight-slider-title">Mood</p>
            <p className="weight-slider-description">
              How much your mood factors into recommendations
            </p>
            <Radio.Group
              className="weight-options"
              defaultValue={this.state.moodWeight}
              onChange={this.onChangeMood}
              buttonStyle="solid"
            >
              <Radio.Button value="0">None</Radio.Button>
              <Radio.Button value="0.5">Moderate</Radio.Button>
              <Radio.Button value="1">Strong</Radio.Button>
            </Radio.Group>
          </div>
          <div className="weight-control-slider">
            <p className="weight-slider-title">Pitch</p>
            <p className="weight-slider-description">
              How much your pitch factors into recommendations
            </p>
            <Radio.Group
              className="weight-options"
              defaultValue={this.state.pitchWeight}
              onChange={this.onChangePitch}
              buttonStyle="solid"
            >
              <Radio.Button value="0">None</Radio.Button>
              <Radio.Button value="0.5">Moderate</Radio.Button>
              <Radio.Button value="1">Strong</Radio.Button>
            </Radio.Group>
          </div>
          <div className="weight-control-slider">
            <p className="weight-slider-title">Song Preference</p>
            <p className="weight-slider-description">
              How much your rating history factors into recommendations
            </p>
            <Radio.Group
              className="weight-options"
              defaultValue={this.state.prefWeight}
              onChange={this.onChangeSongPref}
              buttonStyle="solid"
            >
              <Radio.Button value="0">None</Radio.Button>
              <Radio.Button value="0.5">Moderate</Radio.Button>
              <Radio.Button value="1">Strong</Radio.Button>
            </Radio.Group>
          </div>
        </Modal>
        <Modal
          title="Score of this song"
          visible={this.state.explainModal}
          onCancel={this.handleExplainModalChange}
          footer={[
            <Button
              key="weight-control-confirm"
              type="primary"
              onClick={this.handleExplainModalChange}
            >
              OK
            </Button>,
          ]}
        >
          <div className="song-score-info">
            <div className="pitch-score-div">
              <p className="score-title">Pitch</p>
              <div>
                <Tag color="#6200ee">Easy</Tag>
                <Tag>Normal</Tag>
                <Tag>Hard</Tag>
              </div>
            </div>
            <div className="mood-score-div">
              <p className="score-title">Mood</p>
              <div>
                This song is <strong>99%</strong> {this.state.selectedMood}
              </div>
            </div>
            <div className="song-score-div">
              <p className="score-title">Preference</p>
              <div className="pref-score">
                <p>
                  <strong>99% of users</strong> with similar <br />
                  music tastes as you <br />
                  liked this song
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </Content>
      <VocaliFooter history={this.props.history} />
    </div>
  );
};

export default withRouter(Result);
