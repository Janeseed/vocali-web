import React from 'react';
import { Button, Typography, Input, InputNumber, Layout, Checkbox, Space } from 'antd';
import { UserOutlined, LeftOutlined } from '@ant-design/icons';
import { withRouter } from "react-router-dom"
import "./css/start.css";
import Logo from "./vocali_logo2.svg";

const { Paragraph } = Typography;

class InfoSet extends React.Component {
    
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <Paragraph className="description">First,<br></br> Put your brief information</Paragraph>
                <div className="inputs">
                    <div className="name-div">
                        <p className="subtitle">Name</p>
                        <Input className="name-input" size="large" placeholder="Name" prefix={<UserOutlined />} />
                    </div>
                    <div className="age-div">
                        <p className="subtitle">Age</p>
                        <InputNumber className="age-input" min={1} max={100} defaultValue={27} />
                    </div>
                    <div className="pitch-div">
                        <p className="subtitle">Pitch</p>
                        <Button className="pitch-button" onClick={() => this.nextPath("/pitch")}>TEST</Button>
                    </div>
                </div>
                <Button className="next-button" onClick={() => this.nextPath("/songpref")} Type="primary" Class="standard" State="normal">NEXT</Button>
            </div>
        )
    }
}
export default withRouter(InfoSet);