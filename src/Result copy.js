import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
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

const Result = ({ props }) => {
  const history = useHistory();
  const [songList, setSongList] = useState([
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
  ]);
  const [feedbacks, setFeedbacks] = useState(new Map());
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const userid = cookies.get("id", { path: "/" });
    feedbacks.forEach((value, key, mapObject) => console.log(key + " , " + value));
    // feedbacks.map((feedback) => vocaliAPI.selectSong(userid,feedback[key],));
  }, [feedbacks]);

  const userActions = [
    { name: "dislike", displayName: "Display", icon: <FrownOutlined /> },
    { name: "noclue", displayName: "No clue", icon: <QuestionOutlined /> },
    { name: "like", displayName: "Like", icon: <HeartOutlined /> },
  ];

  function handleSelectedFeedback(tag, checked, songid) {
    if (checked) {
      setFeedbacks(feedbacks.set(songid, tag));
    } else {
      setFeedbacks(feedbacks.delete(songid));
    }
  }

  const handleModalChange = () => {
    setModal(!modal);
  };

  const handleDrawerChange = () => {
    setDrawer(!drawer);
  };

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
          {songList.map((song) => (
            <Card
              className="song-info"
              title={song.songNum}
              extra={
                <Button type="link" onClick={moreInfo}>
                  Explain
                </Button>
              }
              actions={userActions.map((userAction) => (
                <CheckableTag
                  key={userAction.name}
                  checked={feedbacks.get(song.id) === userAction.name}
                  onChange={(checked) => handleSelectedFeedback(userAction.name, checked, song.id)}
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
          visible={modal}
          onCancel={handleModalChange}
          footer={[
            <Button key="update" type="primary" onClick={handleModalChange}>
              Update Song List
            </Button>,
            <Button key="weigth-control" type="primary" onClick={() => history.push("/weight")}>
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
          onClose={handleDrawerChange}
          visible={drawer}
        >
          <Card style={{ width: 170, height: 100 }}>
            <p className="songNum">000000</p>
            <p className="song-title">문어의 꿈</p>
            <p className="artist">안예은</p>
          </Card>
        </Drawer>
      </Content>
      <Footer>
        <Button
          className="show-like-button"
          type="primary"
          icon={<HeartOutlined />}
          onClick={handleDrawerChange}
        >
          Like List
        </Button>
        <Button className="adjust-button" type="primary" onClick={handleModalChange}>
          Adjusting Results
        </Button>
      </Footer>
    </>
  );
};

export default withRouter(Result);
