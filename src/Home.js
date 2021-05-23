import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

import { Button, Typography, Input, InputNumber, Layout, Tag, Avatar } from 'antd';
import { UserOutlined, LeftOutlined } from '@ant-design/icons';

import "./css/home.css";
import Logo from "./vocali_logo2.svg";

const { Header, Footer, Sider, Content } = Layout;
const { CheckableTag } = Tag;
const tagsData = ['Alone', 'Friends', 'Superior'];
const tagsData2 = ['Happy', 'Exuberant', 'Frantic', 'Anxious/Sad', 'Calm', 'Contentment', 'Energetic', 'Depression'];

class Home extends React.Component {
    
    nextPath(path) {
        this.props.history.push(path);
    }

    state = {
        selectedTags: [],
    };

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({ selectedTags: nextSelectedTags });
    }
    
    render() {
        const { selectedTags } = this.state;

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
                        <p className="mood-title">Today's Mood</p>
                    </div>
                </Header>
                <Content style={{ backgroundColor: '#ffffff'}}>
                    <div className="selection-board">
                        <div className="mood-selection">   
                            <p className="select-title">Select<br></br>Today's Mood</p>
                        </div>
                        <hr />
                        <span className="question">With Whom?</span>
                        {tagsData.map(tag => (
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.indexOf(tag) > -1}
                                onChange={checked => this.handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}

                        <span className="question">What kind of mood you like today?</span>
                        {tagsData2.map(tag => (
                            <CheckableTag
                                key={tag}
                                checked={selectedTags.indexOf(tag) > -1}
                                onChange={checked => this.handleChange(tag, checked)}
                            >
                                {tag}
                            </CheckableTag>
                        ))}
                    </div>
                    <Button className="find-button" onClick={() => this.nextPath("/result")} Type="primary" Class="standard" State="normal">FIND SONG</Button>
                </Content>
            </Layout>
        )
    }
}

export default withRouter(Home);