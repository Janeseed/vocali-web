import React from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Cookies from "universal-cookie";

import { Button, Skeleton, Card, Layout, Avatar, Tag, Modal, Divider, Slider } from "antd";
import { FrownOutlined, HeartOutlined, QuestionOutlined, CoffeeOutlined, HomeOutlined } from "@ant-design/icons";

import "./css/home.css";
import "./css/result.css";
import InfoHeader from "./InfoHeader.js";
import * as vocaliAPI from "./api/api.js";

const { Content, Footer } = Layout;
const { Meta } = Card;
const { CheckableTag } = Tag;

class Result extends React.Component {
  userActions = [
    { name: "dislike", displayName: "I Don't like it", icon: <FrownOutlined /> },
    { name: "noclue", displayName: "I have No Clue", icon: <QuestionOutlined /> },
    { name: "like", displayName: "Show More Like This!", icon: <HeartOutlined /> },
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
    const concated = "Song No. " + songNum 
    return concated
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

  onChangeMood = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      moodWeight: value,
    });
  };

  onChangePitch = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      pitchWeight: value,
    });
  };

  onChangeSongPref = value => {
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
        title: "This Song is recommended like bellow",
        content: (
          <div className="song-score-info">
            <div className="score-div">
              <p className="score-title">Pitch</p>
              <div>
                <Tag color="#6200ee">Easy</Tag>
                <Tag>Normal</Tag>
                <Tag>Hard</Tag>
              </div>
            </div>
            <div className="score-div">
              <p className="score-title">Song Preference</p>
              <p className="score"><strong>Ninety percent</strong> of users who have similar tastes like this song</p>
            </div>
            <div className="score-div">
              <p className="score-title">Mood</p>
              <div>
                <Tag className="whom-info">selectedPeople</Tag>
                <Tag className="mood-info">selectedMood</Tag>
              </div>
            </div>
          </div>
        ),
        onOk() {},
      });
    }

    return (
      <>
        <InfoHeader />
        <Content className="result-contents" style={{ backgroundColor: "#F6F0FE" }}>
          <div className="style-layout-content">
            {this.state.songList.map((song) => (
              <Card
                className="song-info"
                title={this.concatSongNum(song.songNum)}
                extra={
                  <Button type="link" onClick={moreInfo}>
                    Why this Song?
                  </Button>
                }
                actions={this.userActions.map((userAction) => (
                  <CheckableTag
                    key={userAction.name}
                    className = "feedback-tag"
                    checked={this.state.feedbacks.get(song.id) === userAction.name}
                    onChange={(checked) =>
                      this.handleSelectedFeedback(userAction.name, checked, song.id)
                    }
                  >
                    {userAction.icon}
                    <span></span>
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
          </div>
          <Button
              className="adjust-button"
              type="primary"
              onClick={this.handleModalChange}
            >
              Change Condition
          </Button>
          <Modal
            title="Want to change the recommendation condition?"
            visible={this.state.modal}
            onCancel={this.handleModalChange}
            footer={[
              <Button 
                key="update"
                onClick={this.handleModalChange}
              >
                CANCLE
              </Button>,
              <Button
                key="weight-control-confirm"
                type="primary"
                onClick={this.handleModalChange}
              >
                CONFIRM
              </Button>,
            ]}
          >
            <div className="weight-control-slider">
              <p className="weight-slider-title">Mood</p>
              <Slider
              min={-1}
              max={1}
              onChange={this.onChangeMood}
              value={typeof moodWeight === 'number' ? moodWeight : 0}
              step={1}
              />
              <p className="weight-slider-description">Mood description</p>
            </div>
            <div className="weight-control-slider">
              <p className="weight-slider-title">Pitch</p>
              <Slider
              min={-1}
              max={1}
              onChange={this.onChangePitch}
              value={typeof pitchWeight === 'number' ? pitchWeight : 0}
              step={1}
              />
              <p className="weight-slider-description">Pitch description</p>
            </div>
            <div className="weight-control-slider">
              <p className="weight-slider-title">Song Preference</p>
              <Slider
              min={-1}
              max={1}
              onChange={this.onChangeSongPref}
              value={typeof songPrefWeight === 'number' ? songPrefWeight : 0}
              step={1}
              />
              <p className="weight-slider-description">Song Preference description</p>
            </div>
            
          </Modal>
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
      </>
    );
  }
}

export default withRouter(Result);
