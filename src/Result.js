import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

import { Button, Typography, Input, Skeleton, Switch, Card, Layout, Tag, Avatar, Row, Col } from 'antd';
import { FrownOutlined, HeartOutlined, EditOutlined, QuestionOutlined, SettingOutlined } from '@ant-design/icons';

import "./css/home.css";
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
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card
                                    className = "song-info"
                                    style={{ width: 170, marginTop: 16 }}
                                    actions={[
                                        <FrownOutlined key="dislike" />,
                                        <QuestionOutlined key="don't know" />,
                                        <HeartOutlined key="like" />,
                                    ]}
                                >
                                    <Skeleton loading={loading} avatar active>
                                        <Meta
                                            avatar={
                                                <Avatar style={{ color: '#000000', backgroundColor: '#D9D9D9'}}>A#</Avatar>
                                            }
                                            title="Song Title"
                                            description="Artist Name"
                                        />
                                    </Skeleton>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    className = "song-info"
                                    style={{ width: 170, marginTop: 16 }}
                                    actions={[
                                        <FrownOutlined key="dislike" />,
                                        <QuestionOutlined key="don't know" />,
                                        <HeartOutlined key="like" />,
                                    ]}
                                >
                                    <Skeleton loading={loading} avatar active>
                                        <Meta
                                            avatar={
                                                <Avatar style={{ color: '#000000', backgroundColor: '#D9D9D9'}}>A#</Avatar>
                                            }
                                            title="Song Title"
                                            description="Artist Name"
                                        />
                                    </Skeleton>
                                </Card>
                            </Col>
                        </Row>
                        <Card
                            className = "song-info"
                            style={{ width: 170, marginTop: 16 }}
                            actions={[
                                <FrownOutlined key="dislike" />,
                                <QuestionOutlined key="don't know" />,
                                <HeartOutlined key="like" />,
                            ]}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar={
                                        <Avatar style={{ color: '#000000', backgroundColor: '#D9D9D9'}}>A#</Avatar>
                                    }
                                    title="Song Title"
                                    description="Artist Name"
                                />
                            </Skeleton>
                        </Card>
                        <Card
                            className = "song-info"
                            style={{ width: 170, marginTop: 16 }}
                            actions={[
                                <FrownOutlined key="dislike" />,
                                <QuestionOutlined key="don't know" />,
                                <HeartOutlined key="like" />,
                            ]}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar={
                                        <Avatar style={{ color: '#000000', backgroundColor: '#D9D9D9'}}>A#</Avatar>
                                    }
                                    title="Song Title"
                                    description="Artist Name"
                                />
                            </Skeleton>
                        </Card>
                        <Card
                            className = "song-info"
                            style={{ width: 170, marginTop: 16 }}
                            actions={[
                                <FrownOutlined key="dislike" />,
                                <QuestionOutlined key="don't know" />,
                                <HeartOutlined key="like" />,
                            ]}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar={
                                        <Avatar style={{ color: '#000000', backgroundColor: '#D9D9D9'}}>A#</Avatar>
                                    }
                                    title="Song Title"
                                    description="Artist Name"
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