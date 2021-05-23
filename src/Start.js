import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

import { Button, Typography, Input, InputNumber, Layout, Checkbox, Space } from 'antd';
import { UserOutlined, LeftOutlined } from '@ant-design/icons';

import "./css/start.css";
import Logo from "./vocali_logo2.svg";

const { Paragraph } = Typography;

class Start extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <img className="App-logo" src={Logo} alt="Vocali Logo"/>
                <Paragraph className="text1" >Vocali will find you a perfect song to sing at Noraebang</Paragraph>
                <Button className="start-button" onClick={() => this.nextPath("/info")} Type="primary" Class="circle" State="hover or pressed">START</Button>
            </div>
        )
    }
}

export default withRouter(Start);