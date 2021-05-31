import React from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Cookies from "universal-cookie";

import { Button, Skeleton, Card, Layout, Avatar, Tag, Modal, Radio } from "antd";
import { FrownOutlined, HeartOutlined, QuestionOutlined } from "@ant-design/icons";

import "./css/home.css";
import "./css/result.css";
import InfoHeader from "./InfoHeader.js";
import VocaliFooter from "./Footer.js";
import * as vocaliAPI from "./api/api.js";

const { Content } = Layout;
const { Meta } = Card;
const { CheckableTag } = Tag;

class Result extends React.Component {
  userActions = [
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

  state = {
    songList: [
      {
        id: "x1yk42m_99d",
        title: "문어의 꿈",
        artist: "안예은",
        publishedYear: 2021,
        genre: "Dance",
        mood: "happy",
        pitch: "A#",
        songNum: 48394,
      },
    ],
    feedbacks: new Map(),
    loading: false,
    adjustModal: false,
    explainModal: false,
    selectedFeedback: "",
    moodWeight: "mid",
    pitchWeight: "mid",
    songPrefWeight: "mid",
    mood: "",
  };

  handleSelectedFeedback(tag, checked, songid) {
    if (checked) {
      this.setState({ feedbacks: this.state.feedbacks.set(songid, tag) });
    }
    console.log(this.state.feedbacks);
  }

  handleExplainModalChange = () => {
    this.setState({ explainModal: !this.state.explainModal });
  };

  handleAdjustModalChange = () => {
    this.setState({ adjustModal: !this.state.adjustModal });
    // TODO: API connection
  };

  onChangeMood = (value) => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      moodWeight: value,
    });
  };

  onChangePitch = (value) => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      pitchWeight: value,
    });
  };

  onChangeSongPref = (value) => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      songPrefWeight: value,
    });
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.setState({ mood: values.mood });
    const cookies = new Cookies();
    const userId = cookies.get("id", { path: "/" });
    // vocaliAPI.getRecommendation(userId, values.mood + "," + values.people).then((result) => {
    //   console.log(result);
    // });
    // TODO: Input 받아서 this.state.songList에 넣기
  }

  render() {
    const { loading } = this.state;

    return (
      <div style={{ backgroundColor: "#F6F0FE" }}>
        <InfoHeader />
        <Content className="result-contents">
          <p className="result-description">Vocali found the best song for you!</p>
          <p className="result-description-small">
            If you leave feedback on the recommended song, <br />
            we will recommend a new song.
          </p>
          {this.state.songList.map((song) => (
            <Card
              className="song-info"
              title={`Song No. ${song.songNum}`}
              extra={
                <Button
                  type="link"
                  onClick={this.handleExplainModalChange}
                  style={{ padding: "0" }}
                >
                  Why this song?
                </Button>
              }
              actions={this.userActions.map((userAction) => (
                <CheckableTag
                  key={userAction.name}
                  checked={this.state.feedbacks.get(song.id) === userAction.name}
                  onChange={(checked) =>
                    this.handleSelectedFeedback(userAction.name, checked, song.id)
                  }
                >
                  {userAction.icon}
                  {userAction.displayName}
                </CheckableTag>
              ))}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  className="card-skeleton"
                  avatar={
                    <Avatar
                      style={{
                        color: "#000000",
                        backgroundColor: "#D9D9D9",
                      }}
                    >
                      {song.pitch}
                    </Avatar>
                  }
                  title={song.title}
                  description={song.artist}
                />
              </Skeleton>
            </Card>
          ))}
          <p className="result-description-small">Don't like the result?</p>
          <Button className="adjust-button" type="primary" onClick={this.handleAdjustModalChange}>
            Adjust weight
          </Button>
          <Modal
            title="Weight control"
            visible={this.state.adjustModal}
            onCancel={this.handleAdjustModalChange}
            footer={[
              <Button key="update" onClick={this.handleAdjustModalChange}>
                CANCLE
              </Button>,
              <Button
                key="weight-control-confirm"
                type="primary"
                onClick={this.handleAdjustModalChange}
              >
                CONFIRM
              </Button>,
            ]}
          >
            <p>You can change the condition of recommendation with slider</p>
            <div className="weight-control-slider">
              <p className="weight-slider-title">Mood</p>
              <p className="weight-slider-description">
                How much the mood affect the recommendation
              </p>
              <Radio.Group
                className="weight-options"
                defaultValue={this.state.moodWeight}
                onChange={this.onChangeMood}
                buttonStyle="solid"
              >
                <Radio.Button value="small">No affect</Radio.Button>
                <Radio.Button value="mid">Moderate</Radio.Button>
                <Radio.Button value="large">Large affect</Radio.Button>
              </Radio.Group>
            </div>
            <div className="weight-control-slider">
              <p className="weight-slider-title">Pitch</p>
              <p className="weight-slider-description">
                How much the pitch affect the recommendation
              </p>
              <Radio.Group
                className="weight-options"
                defaultValue={this.state.pitchWeight}
                onChange={this.onChangePitch}
                buttonStyle="solid"
              >
                <Radio.Button value="small">No affect</Radio.Button>
                <Radio.Button value="mid">Moderate</Radio.Button>
                <Radio.Button value="large">Large affect</Radio.Button>
              </Radio.Group>
            </div>
            <div className="weight-control-slider">
              <p className="weight-slider-title">Song Preference</p>
              <p className="weight-slider-description">
                How much your like history affect the recommendation
              </p>
              <Radio.Group
                className="weight-options"
                defaultValue={this.state.songPrefWeight}
                onChange={this.onChangeSongPref}
                buttonStyle="solid"
              >
                <Radio.Button value="small">No affect</Radio.Button>
                <Radio.Button value="mid">Moderate</Radio.Button>
                <Radio.Button value="large">Large affect</Radio.Button>
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
                  This song is <strong>99%</strong> {this.state.mood}
                </div>
              </div>
              <div className="song-score-div">
                <p className="score-title">Preference</p>
                <div className="pref-score">
                  <p>
                    <strong>99% of users</strong> who have <br />
                    similar tastes like this song
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </Content>
        <VocaliFooter />
      </div>
    );
  }
}

export default withRouter(Result);
