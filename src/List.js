import React from 'react';
import {
    BrowserRouter as Router,
    withRouter
  } from "react-router-dom";

  import { Button, Typography, Input, Skeleton, Switch, Card, Layout, Tag, Avatar, Row, Col } from 'antd';
  import { FrownOutlined, HeartOutlined, EditOutlined, QuestionOutlined, SettingOutlined } from '@ant-design/icons';
import "./css/home.css";
import "./css/list.css";
import Logo from "./vocali_logo2.svg";
import Heart from "./favorite_black_24dp.svg";

const { Header, Footer, Sider, Content } = Layout;
const { CheckableTag } = Tag;
const { Meta } = Card;

class List extends React.Component {
    
    nextPath(path) {
        this.props.history.push(path);
    }

    state = {
        songList: [], loading: false,
    };

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }
    
    render() {
        const { selectedTags } = this.state;
        const { loading } = this.state;

        return (
            <Layout className="layout">
                <Header className="header" style={{ backgroundColor: '#ffffff'}}>
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
                    <div className="list-div">
                        <p className="list-title">List of Likes</p>
                        <div className ="song-card">
                            <Card
                                className = "song-info"
                                title="######"
                                extra={<a href="#">More</a>}
                                style={{ width: 170, marginTop: 16 }}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title="Song Title"
                                        description="Artist Name"
                                    />
                                </Skeleton>
                            </Card>
                            <Card
                                className = "song-info"
                                title="######"
                                extra={<a href="#">More</a>}
                                style={{ width: 170, marginTop: 16 }}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title="Song Title"
                                        description="Artist Name"
                                    />
                                </Skeleton>
                            </Card>
                            <Card
                                className = "song-info"
                                title="######"
                                extra={<a href="#">More</a>}
                                style={{ width: 170, marginTop: 16 }}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title="Song Title"
                                        description="Artist Name"
                                    />
                                </Skeleton>
                            </Card>
                            <Card
                                className = "song-info"
                                title="######"
                                extra={<a href="#">More</a>}
                                style={{ width: 170, marginTop: 16 }}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title="Song Title"
                                        description="Artist Name"
                                    />
                                </Skeleton>
                            </Card>
                            <Card
                                className = "song-info"
                                title="######"
                                extra={<a href="#">More</a>}
                                style={{ width: 170, marginTop: 16 }}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title="Song Title"
                                        description="Artist Name"
                                    />
                                </Skeleton>
                            </Card>
                            <Card
                                className = "song-info"
                                title="######"
                                extra={<a href="#">More</a>}
                                style={{ width: 170, marginTop: 16 }}
                            >
                                <Skeleton loading={loading} avatar active>
                                    <Meta
                                        title="Song Title"
                                        description="Artist Name"
                                    />
                                </Skeleton>
                            </Card>
                        </div>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default withRouter(List);