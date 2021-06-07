import React from "react";
import { Button, Typography, Input, Modal, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import "./css/common.css";

import * as vocaliAPI from "./api/api.js";
import Cookies from "universal-cookie";
import SimpleHeader from "./SimpleHeader";

const { Paragraph } = Typography;

class InfoSet extends React.Component {
  state = {
    name: "",
    age: "",
    modal: false,
    loading: false,
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
    if (name === "" || age === "" || isNaN(age)) {
      this.handleModalChange();
      return;
    }
    this.setState({ loading: true });
    vocaliAPI.createUser(name, age).then((response) => {
      const userId = response.data.id;
      const cookies = new Cookies();
      cookies.set("id", userId, { path: "/" });
      cookies.remove("mood", { path: "/" });
      cookies.remove("people", { path: "/" });
      this.setState({ loading: false });
      this.props.history.push("/pitch");
    });
  };

  render() {
    return (
      <div className="custom-container">
        <SimpleHeader history={this.props.history} back="none" />
        <div className="flex-row-container">
          <Paragraph className="description">
            First,<br></br> Put in your information
          </Paragraph>
          <div className="inputs">
            <div className="input-div">
              <div className="subtitle">Name</div>
              <Input
                className="name-input"
                size="large"
                placeholder="ex. Gildong"
                prefix={<UserOutlined />}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="input-div">
              <div className="subtitle">Age</div>
              <Input
                className="age-input"
                size="large"
                placeholder="ex. 27"
                onChange={this.handleAgeChange}
              />
            </div>
          </div>
          <div style={{ width: "100%", alignItems: "center", textAlign: "center" }}>
            <Spin className="loading-next" spinning={this.state.loading} delay={500} />
            <Button className="next-button" onClick={this.setInfo} type="primary">
              NEXT
            </Button>
          </div>
        </div>

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
          <p>You should fill out your name and age. Also your age should be valid number :)</p>
        </Modal>
      </div>
    );
  }
}
export default withRouter(InfoSet);
