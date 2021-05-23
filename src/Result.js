import React from 'react';
import {
    BrowserRouter as Router,
    withRouter
  } from "react-router-dom";

import { Button, Typography, Drawer, Skeleton, Modal, Card, Layout, Tag, Avatar, Row, Col, Popover } from 'antd';
import { FrownOutlined, HeartOutlined, EditOutlined, QuestionOutlined, SettingOutlined } from '@ant-design/icons';

import "./css/home.css";
import "./css/result.css";
import Logo from "./vocali_logo2.svg";

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

class Result extends React.Component {
    state = {
        songList: [],
        loading: false,
        modal: false,
        drawer: false,
    };
    
    showMoreInfo(songinfo) {
        const {artist, title, pitch, songNum, pitchScore, songPrefScore, moodScore} = songinfo;
        Modal.info({
            title: {title},
            content: (
              <div>
                <p>{artist}</p>
                <p>{pitch}</p>
              </div>
            ),
            onOk() {},
          });
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
        }
        const { artist, title, pitch, songNum } = songInfo;

        return (
            <Layout className="layout">
                <Header className="header">
                    <img className="App-logo" src={Logo} alt="Vocali Logo"/>
                    <div className="user-info">
                        <Avatar className = "avatar" style={{ backgroundColor: '#D9D9D9' }}>S</Avatar>
                        <Tag className="age-info">27</Tag>
                        <Tag className="pitch-info">A#</Tag>
                    </div>
                    <div className="mood-dashboard">
                        <p className="mood-title-chosen">Today's Mood</p>
                        <div className="chosen-info">
                            <Tag className="whom-info">Alone</Tag>
                            <Tag className="mood-info">Happy</Tag>
                        </div>
                    </div>
                </Header>
                <Content style={{ backgroundColor: '#F6F0FE'}}>
                    <div className ="songs">
                    <Card
                        className = "song-info"
                        title={songNum}
                        extra={<a href="#">More</a>}
                        style={{ width: 500, marginTop: 16 }}
                        actions={[
                            <Button className="taste-button" type="text" icon={<FrownOutlined />}>Dislike</Button>,
                            <Button className="taste-button" type="text" icon={<QuestionOutlined />}>No Clue</Button>,
                            <Button className="taste-button" type="text" icon={<HeartOutlined />}>Like</Button>,
                        ]}
                    >
                        <Skeleton loading={loading} avatar active>
                            <Meta
                                avatar={
                                    <Avatar style={{ color: '#000000', backgroundColor: '#D9D9D9'}}>{pitch}</Avatar>
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
        )
    }
}

export default withRouter(Result);