import React from "react";
import { Button, Typography, Input, Modal } from "antd";
import { ApiFilled, UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import "./css/start.css";

import * as vocaliAPI from "./api/api.js";
import Cookies from "universal-cookie";

const { Paragraph } = Typography;

class InfoSet extends React.Component {
  state = {
    name: "",
    age: "",
    modal: false,
  };
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleAgeChange = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleModalChange = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  setInfo = () => {
    const name = this.state.name;
    const age = this.state.age;
    if (name === "" || age === "") {
      this.handleModalChange();
      return;
    }
    vocaliAPI.createUser(name).then((response) => {
      const userId = response.data.id;
      const cookies = new Cookies();
      cookies.set("id", userId, { path: "/" });
      this.props.history.push("/pitch");
    });
  };

  render() {
    return (
      <div>
        <Paragraph className="description">
          First,<br></br> Put your brief information
        </Paragraph>
        <div className="inputs">
          <div className="name-div">
            <p className="subtitle">Name</p>
            <Input
              className="name-input"
              size="large"
              placeholder="ex. Gildong"
              prefix={<UserOutlined />}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="age-div">
            <p className="subtitle">Age</p>
            <Input
              className="age-input"
              size="large"
              placeholder="ex. 27"
              onChange={this.handleAgeChange}
            />
          </div>
        </div>
        <Button
          className="next-button"
          onClick={this.setInfo}
          Type="primary"
          Class="standard"
          State="normal"
        >
          NEXT
        </Button>

        <Modal
          title="Warning"
          visible={this.state.modal}
          onOk={this.handleModalChange}
          footer={[
            <Button key="ok" type="primary" onClick={this.handleModalChange}>
              OK
            </Button>,
          ]}
        >
          <p>You should fill out your name and age :)</p>
        </Modal>
      </div>
    );
  }
}
export default withRouter(InfoSet);
