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
import "./css/weight.css";
import Logo from "./vocali_logo2.svg";

const { Header, Footer, Sider, Content } = Layout;

class Weight extends React.Component {
    
    nextPath(path) {
        this.props.history.push(path);
    }
    
    render() {
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
                <Content style={{ textAlign: 'center' , backgroundColor: '#ffffff'}}>
                    <Button className="find-button" onClick={() => this.nextPath("/result")} Type="primary" Class="standard" State="normal">FIND SONG</Button>
                </Content>
            </Layout>
        )
    }
}

export default withRouter(Weight);