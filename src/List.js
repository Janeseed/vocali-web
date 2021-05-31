import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Skeleton, Card, Layout, Avatar, Tag, Modal, Divider } from "antd";
import { FrownOutlined, HeartOutlined, QuestionOutlined, CoffeeOutlined, HomeOutlined } from "@ant-design/icons";

import "./css/home.css";
import "./css/list.css";
import InfoHeader from "./InfoHeader.js";

const { Content, Footer } = Layout;
const { Meta } = Card;
const { CheckableTag } = Tag;

class LikeList extends React.Component {
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

    mergeSongNum(songNum) {
        const merge = "Song No. " + songNum;
        return merge;
    }
    
    render() {
      const { loading } = this.state;
  
      function Delete() {
        //카드 지우는거 어떻게 하는 거지?
      }
  
      return (
        <>
          <InfoHeader />
          <Content>
            <div className="like-style-layout-content">
                <div className="like-list-div">
                {this.state.songList.map((song) => (
                    <Card
                    className="like-list"
                    title={this.mergeSongNum(song.songNum)}
                    extra={
                        <Button type="link" onClick={Delete}>
                        Delete
                        </Button>
                    }
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
            </div>
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
  
  export default withRouter(LikeList);