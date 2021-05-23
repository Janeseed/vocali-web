import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Skeleton, Card, Layout, Avatar, Popover, Modal, Drawer } from "antd";
import {
  FrownOutlined,
  HeartOutlined,
  QuestionOutlined,
} from "@ant-design/icons";

import "./css/home.css";
import "./css/result.css";
import VocaliHeader from "./Header.js";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

class Result extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    songList: [],
    loading: false,
  };
  
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

    return (
      <Layout className="layout">
        <VocaliHeader />
        <Content style={{ backgroundColor: "#F6F0FE" }}>
          <div className="songs">
            <Card
              className="song-info"
              title={songNum}
              extra={<a href="#">More</a>}
              style={{ width: 170, marginTop: 16 }}
              actions={[
                <Popover title="dislike" trigger="click">
                  <Button
                    className="taste-button"
                    type="text"
                    icon={<FrownOutlined key="dislike" />}
                  />
                </Popover>,
                <Popover title="don't know" trigger="click">
                  <Button
                    className="taste-button"
                    type="text"
                    icon={<QuestionOutlined key="don't know" />}
                  />
                </Popover>,
                <Popover title="like" trigger="click">
                  <Button
                    className="taste-button"
                    type="text"
                    icon={<HeartOutlined key="like" />}
                  />
                </Popover>,
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
              closable={false}
              onClose={this.handleDrawerChange}
              visible={this.handleDrawerChange}
          >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </Drawer>
        </Content>
        <Footer>
            <Button className="show-like-button" type="primary" icon={<HeartOutlined />}>Like List</Button>
            <Button className="adjust-button" type="primary" onClick={this.handleModalChange}>Adjusting Results</Button>
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(Result);
