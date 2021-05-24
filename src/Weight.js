import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Slider, Layout, Row, Col } from "antd";

import "./css/home.css";
import "./css/weight.css";
import InfoHeader from "./InfoHeader.js";

const { Content } = Layout;

class Weight extends React.Component {
  state = {
    moodWeight: 1,
    songPrefWeight: 1,
    pitchWeight: 1,
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  onChangeMood = (value) => {
    this.setState({
      moodWeight: value,
    });
  };

  onChangePitch = (value) => {
    this.setState({
      pitchWeight: value,
    });
  };

  onChangeSong = (value) => {
    this.setState({
      songPrefWeight: value,
    });
  };

  render() {
    const { moodWeight, pitchWeight, songPrefWeight } = this.state;
    return (
      <Layout className="layout">
        <InfoHeader />
        <Content style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
          <div className="weight-dashboard">
            <div className="consideration-title">Weights of Consideration</div>
            <div className="weight-slider">
              <Row>
                <Col span={8}>
                  <div className="slider-name">Pitch</div>
                </Col>
                <Col span={12}>
                  <Slider
                    min={0}
                    max={1}
                    onChange={this.onChangePitch}
                    value={typeof pitchWeight === "number" ? pitchWeight : 0}
                    step={0.01}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="slider-name">Mood</div>
                </Col>
                <Col span={12}>
                  <Slider
                    min={0}
                    max={1}
                    onChange={this.onChangeMood}
                    value={typeof moodWeight === "number" ? moodWeight : 0}
                    step={0.01}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="slider-name">Song Preference</div>
                </Col>
                <Col span={12}>
                  <Slider
                    min={0}
                    max={1}
                    onChange={this.onChangeSong}
                    value={
                      typeof songPrefWeight === "number" ? songPrefWeight : 0
                    }
                    step={0.01}
                  />
                </Col>
              </Row>
            </div>
          </div>
          <Button
            className="find-button"
            onClick={() => this.nextPath("/result")}
            Type="primary"
            Class="standard"
            State="normal"
          >
            Go to Result
          </Button>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(Weight);
