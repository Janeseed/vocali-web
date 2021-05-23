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

import "./css/pitch.css";
import Logo from "./vocali_logo2.svg";

const { Paragraph } = Typography;

class Pitch extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="Pitch-app">
                <Button className="return-button" onClick={() => this.nextPath("/info")} Type="text" Class="standard" State="normal" icon={<LeftOutlined />}>Back</Button>
                <Paragraph className="description2">Click the botton to record your voice</Paragraph>
                <div className="inputs">
                </div>
                <div className="pitch-buttons">
                    <Button className="record-button" Type="primary" Class="standard" State="normal">RECORD</Button>
                    <Button className="stop-button" Type="primary" Class="standard" State="normal">STOP</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Pitch);