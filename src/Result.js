import React from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Cookies from "universal-cookie";

import { Button, Skeleton, Card, Layout, Avatar, Tag, Modal, Drawer } from "antd";
import { FrownOutlined, HeartOutlined, QuestionOutlined } from "@ant-design/icons";

import "./css/home.css";
import "./css/result.css";
import InfoHeader from "./InfoHeader.js";
import * as vocaliAPI from "./api/api.js";

const { Content, Footer } = Layout;
const { Meta } = Card;
const { CheckableTag } = Tag;

class Result extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  userActions = [
    { name: "dislike", displayName: "Dislike", icon: <FrownOutlined /> },
    { name: "noclue", displayName: "No clue", icon: <QuestionOutlined /> },
    { name: "like", displayName: "Like", icon: <HeartOutlined /> },
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
      {
        id: "1hOEq5q9L41E2YbLhVvW5x",
        title: '아로하(드라마 "슬기로운 의사 생활")',
        artist: "조정석",
        publishedYear: 2020,
        genre: "Ballad",
        mood: "energetic",
        pitch: "A#",
        songNum: 27615,
      },
      {
        id: "1hOEq5q9L41E2YbLhVvWx",
        title: '아로하(드라마 "슬기로운 의사 생활")',
        artist: "조정석",
        publishedYear: 2020,
        genre: "Ballad",
        mood: "energetic",
        pitch: "A#",
        songNum: 27615,
      },
    ],
    feedbacks: new Map(),
    loading: false,
    modal: false,
    drawer: false,
    selectedFeedback: "",
  };

  handleSelectedFeedback(tag, checked, songid) {
    if (checked) {
      this.setState({ feedbacks: this.state.feedbacks.set(songid, tag) });
    }
    console.log(this.state.feedbacks);
  }

  handleModalChange = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleDrawerChange = () => {
    this.setState({ drawer: !this.state.drawer });
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
    const { loading } = this.state;

    function moreInfo() {
      Modal.info({
        title: "The score of consideration",
        content: (
          <div>
            <div className="score-div">
              <p className="score-title">Pitch</p>
              <p className="score">0</p>
            </div>
            <div className="score-div">
              <p className="score-title">Song Preference</p>
              <p className="score">0</p>
            </div>
            <div className="score-div">
              <p className="score-title">Mood</p>
              <p className="score">0</p>
            </div>
          </div>
        ),
        onOk() {},
      });
    }

    return (
      <>
        <InfoHeader />
        <Content style={{ backgroundColor: "#F6F0FE" }}>
          <div className="songs">
            {this.state.songList.map((song) => (
              <Card
                className="song-info"
                title={song.songNum}
                extra={
                  <Button type="link" onClick={moreInfo}>
                    Explain
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
                    <span></span>
                    {userAction.displayName}
                  </CheckableTag>
                ))}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
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
          <Modal
            title="Want to adjust the result?"
            visible={this.state.modal}
            onCancel={this.handleModalChange}
            footer={[
              <Button key="update" type="primary" onClick={this.handleModalChange}>
                Update Song List
              </Button>,
              <Button
                key="weigth-control"
                type="primary"
                onClick={() => this.props.history.push("/weight")}
              >
                Control Weight
              </Button>,
            ]}
          >
            <p>
              You can (1) UPDATE the song list with new recommendation reflecting your feedback or
              <br />
              (2) CONTROL the weights of the recommendation
            </p>
          </Modal>

          <Drawer
            title="List of Likes"
            placement="left"
            closable={true}
            onClose={this.handleDrawerChange}
            visible={this.state.drawer}
          >
            <Card style={{ width: 170, height: 100 }}>
              <p className="songNum">000000</p>
              <p className="song-title">문어의 꿈</p>
              <p className="artist">안예은</p>
            </Card>
          </Drawer>
        </Content>
        <Footer class="vocali-footer">
          <div class="buttons">
            <Button
              className="show-like-button"
              type="primary"
              icon={<HeartOutlined />}
              onClick={this.handleDrawerChange}
            >
              Like List
            </Button>
            <Button className="adjust-button" type="primary" onClick={this.handleModalChange}>
              Adjusting Results
            </Button>
          </div>
        </Footer>
      </>
    );
  }
}

export default withRouter(Result);
