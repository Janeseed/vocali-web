import React from 'react';
import { Button, Typography, Input, InputNumber, Layout, Checkbox, Space } from 'antd';
import { UserOutlined, LeftOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom"
import "./css/start.css";
import Logo from "./vocali_logo2.svg";

const { Paragraph } = Typography;

class SongPref extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <Button className="return-button" onClick={() => this.nextPath("/info")} Type="text" Class="standard" State="normal" icon={<LeftOutlined />}>Back</Button>
                <Paragraph className="description">Next,<br></br>Swipe Up the song you like!</Paragraph>
                <div className="cards">
                </div>
                <Button className="next-button" onClick={() => this.nextPath("/home")} Type="primary" Class="standard" State="normal">NEXT</Button>
            </div>
        )
    }
}

export default withRouter(SongPref);