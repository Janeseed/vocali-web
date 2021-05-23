import React from 'react';
import {
    BrowserRouter as Router,
    withRouter
  } from "react-router-dom";

import { Button, Typography, Input, Skeleton, Switch, Card, Layout, Tag, Avatar, Row, Col, Popover } from 'antd';
import { FrownOutlined, HeartOutlined, EditOutlined, QuestionOutlined, SettingOutlined } from '@ant-design/icons';

import "./css/home.css";
import "./css/result.css";
import Logo from "./vocali_logo2.svg";

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

class Result extends React.Component {
    nextPath(path) {
        this.props.history.push(path);
    }

    state = {
        songList: [], loading: false,
    };
    
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
        const {artist, title, pitch, songNum} = songInfo;

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
                        style={{ width: 170, marginTop: 16 }}
                        actions={[
                            <Popover title="dislike" trigger="click">
                                <Button className="taste-button" type="text" icon={<FrownOutlined key="dislike" />}/>
                            </Popover>,
                            <Popover title="don't know" trigger="click">
                                <Button className="taste-button" type="text" icon={<QuestionOutlined key="don't know" />}/>
                            </Popover>,
                            <Popover title="like" trigger="click">
                                <Button className="taste-button" type="text" icon={<HeartOutlined key="like" />}/>
                            </Popover>,
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
                </Content>
            </Layout>
        )
    }
}

export default withRouter(Result);