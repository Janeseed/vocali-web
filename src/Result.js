import React from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Cookies from "universal-cookie";

import { Button, Skeleton, Card, Layout, Avatar, Tag, Modal, Slider, Col, Row } from "antd";
import { FrownOutlined, HeartOutlined, QuestionOutlined, DownOutlined } from "@ant-design/icons";

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
    modal: false,
    drawer: false,
    selectedFeedback: "",
    moodWeight: 0,
    pitchWeight: 0,
    songPrefWeight: 0,
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  concatSongNum(songNum) {
    const concated = "Song No. " + songNum;
    return concated;
  }

  handleSelectedFeedback(tag, checked, songid) {
    if (checked) {
      this.setState({ feedbacks: this.state.feedbacks.set(songid, tag) });
    }
    console.log(this.state.feedbacks);
  }

  handleModalChange = () => {
    this.setState({ modal: !this.state.modal });
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
    const cookies = new Cookies();
    const userId = cookies.get("id", { path: "/" });
    // vocaliAPI.getRecommendation(userId, values.mood + "," + values.people).then((result) => {
    //   console.log(result);
    // });
    // TODO: Input 받아서 this.state.songList에 넣기
  }

  render() {
    const { loading, moodWeight, pitchWeight, songPrefWeight } = this.state;

    function moreInfo() {
      Modal.info({
        title: "This Score of Each",
        content: (
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
                <Tag color="#6200ee">selectedMood</Tag>
              </div>
            </div>
            <div className="song-score-div">
              <p className="score-title">Preference</p>
              <div className="pref-score">
                <p>
                  <strong>99% of users</strong> who have similar tastes like this song
                </p>
              </div>
            </div>
          </div>
        ),
        onOk() {},
      });
    }

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
              title={this.concatSongNum(song.songNum)}
              extra={
                <Button type="link" onClick={moreInfo} style={{ padding: "0" }}>
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
                  <div className="feedback-tag-div">
                    {userAction.icon}
                    {userAction.displayName}
                  </div>
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
          <Button
            className="adjust-button"
            type="primary"
            Class="standard"
            State="normal"
            onClick={this.handleModalChange}
          >
            Adjust weight
          </Button>
          <Modal
            title="You can change the condition of recommendation with slider"
            visible={this.state.modal}
            onCancel={this.handleModalChange}
            footer={[
              <Button key="update" onClick={this.handleModalChange}>
                CANCLE
              </Button>,
              <Button key="weight-control-confirm" type="primary" onClick={this.handleModalChange}>
                CONFIRM
              </Button>,
            ]}
          >
            <div className="weight-control-slider">
              <Row>
                <p className="weight-slider-title">Mood</p>
                <Col span={16}>
                  <Slider
                    min={-1}
                    max={1}
                    onChange={this.onChangeMood}
                    value={typeof moodWeight === "number" ? moodWeight : 0}
                    step={1}
                  />
                </Col>
              </Row>
              <p className="weight-slider-description">Mood</p>
            </div>
            <div className="weight-control-slider">
              <Row>
                <p className="weight-slider-title">Pitch</p>
                <Col span={16}>
                  <Slider
                    min={-1}
                    max={1}
                    onChange={this.onChangePitch}
                    value={typeof pitchWeight === "number" ? pitchWeight : 0}
                    step={1}
                  />
                </Col>
              </Row>
              <p className="weight-slider-description">Pitch description</p>
            </div>
            <div className="weight-control-slider">
              <Row>
                <p className="weight-slider-title">Song Preference</p>
                <Col span={16}>
                  <Slider
                    min={-1}
                    max={1}
                    onChange={this.onChangeSongPref}
                    value={typeof songPrefWeight === "number" ? songPrefWeight : 0}
                    step={1}
                  />
                </Col>
              </Row>
              <p className="weight-slider-description">Song Preference description</p>
            </div>
          </Modal>
        </Content>
        <VocaliFooter />
      </div>
    );
  }
}

export default withRouter(Result);
