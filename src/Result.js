import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Skeleton, Card, Layout, Avatar, Tag, Modal, Drawer } from "antd";
import {
  FrownOutlined,
  HeartOutlined,
  QuestionOutlined,
} from "@ant-design/icons";

import "./css/home.css";
import "./css/result.css";
import Cookies from "universal-cookie";
import VocaliHeader from "./Header.js";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { CheckableTag } = Tag;


const FeedbackTag = {
  DislikeTag: 'Dislike',
  NoClueTag: 'No Clue',
  LikeTag: 'Like'
};

const tagData = ["dislike", "noclue", "ike"];

class Result extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    songList: [],
    loading: false,
    modal: false,
    drawer: false,
    selectedFeedback: "",
  };

  handleSelectedFeedback(tag, checked) {
    const nextSelectedFeedback = checked ? tag : "";
    this.setState({ selectedFeedback: nextSelectedFeedback });
  }
  
  handleModalChange = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleDrawerChange= () => {
    this.setState({
        drawer: !this.state.drawer,
    });
  }
  
  render() {
    const { loading } = this.state;
    const songInfo = {
      id: "x1yk42m_99d",
      title: "문어의 꿈",
      artist: "안예은",
      publishedYear: 2021,
      genre: "Dance",
      mood: "happy",
      pitch: "A#",
      songNum: "000000",
    };
    const { artist, title, pitch, songNum } = songInfo;
    
    function moreInfo() {
      Modal.info({
        title: 'The score of consideration',
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
      <Layout className="layout">
        <VocaliHeader />
        <Content style={{ backgroundColor: "#F6F0FE" }}>
          <div className="songs">
            <Card
              className="song-info"
              title={songNum}
              extra={<Button type="link" onClick={moreInfo}>Explain</Button>}
              style={{ width: 500, marginTop: 16 }}
              actions={[
                <CheckableTag
                  key="dislike"
                  checked={this.state.selectedFeedback === "dislike"}
                  onChange={(checked) => this.handleSelectedFeedback("dislike", checked)}
                >
                  <FrownOutlined />Dislike
                </CheckableTag>,
                <CheckableTag
                  key="noclue"
                  checked={this.state.selectedFeedback === "noclue"}
                  onChange={(checked) => this.handleSelectedFeedback("noclue", checked)}
                >
                  <QuestionOutlined />No Clue
                </CheckableTag>,
                <CheckableTag
                  key="like"
                  checked={this.state.selectedFeedback === "like"}
                  onChange={(checked) => this.handleSelectedFeedback("like", checked)}
                >
                  <HeartOutlined /> Like
                </CheckableTag>
              ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar
                      style={{ color: "#000000", backgroundColor: "#D9D9D9" }}
                    >
                      {pitch}
                    </Avatar>
                  }
                  title={title}
                  description={artist}
                />
              </Skeleton>
            </Card>
          </div>
          <Modal
          title="Want to adjust the result?"
          visible={this.state.modal}
          onCancel = {this.handleModalChange}
          footer={[
              <Button key="update" type="primary" onClick={this.handleModalChange}>
              Update Song List
              </Button>,
              <Button key="weigth-control" type="primary" onClick={() => this.props.history.push("/weight")}>
              Control Weight
              </Button>
          ]}
          >
          <p>You can UPDATE the song list with new recommendation reflecting your feedback or CONTROL the weights of the recommendation</p>
          </Modal>

          <Drawer
              title="List of Likes"
              placement="left"
              closable={true}
              onClose={this.handleDrawerChange}
              visible={this.state.drawer}
          >
              <Card sstyle={{ width: 170, height: 100 }}>
                <p className="songNum">000000</p>
                <p className="song-title">문어의 꿈</p>
                <p className="artist">안예은</p>
              </Card>
          </Drawer>
        </Content>
        <Footer>
            <Button className="show-like-button" type="primary" icon={<HeartOutlined />} onClick={this.handleDrawerChange}>Like List</Button>
            <Button className="adjust-button" type="primary" onClick={this.handleModalChange}>Adjusting Results</Button>
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(Result);
