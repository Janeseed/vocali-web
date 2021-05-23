import React from "react";
import Wad from "web-audio-daw";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { Button, Typography, Progress, Space } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import "./css/pitch.css";

const { Paragraph } = Typography;

class Pitch extends React.Component {
  constructor(props) {
    super(props);
    let voice;
    let tuner;
    let animation;
    this.getPitch = this.getPitch.bind(this);
    this.logPitch = this.logPitch.bind(this);
    this.stopPitch = this.stopPitch.bind(this);
  }

  componentDidMount() {
    this.voice = new Wad({ source: "mic" });
    this.tuner = new Wad.Poly();
  }

  state = {
    currentPitch: "None",
    minPitch: [1000, "None"],
    maxPitch: [0, "None"],
  };

  nextPath(path) {
    this.props.history.push(path);
  }

  getPitch() {
    this.tuner.setVolume(0);
    this.tuner.add(this.voice);
    this.voice.play();
    this.tuner.updatePitch();
    this.logPitch();
  }

  logPitch() {
    console.log(this.tuner.pitch, this.tuner.noteName);
    if (this.tuner.noteName) {
      console.log(this.maxPitch);
      if (this.tuner.pitch > this.state.maxPitch[0]) {
        this.maxPitch = this.tuner.pitch;
        this.setState({
          maxPitch: [this.tuner.pitch, this.tuner.noteName],
        });
      }
      if (this.tuner.pitch < this.state.minPitch[0]) {
        this.minPitch = this.tuner.pitch;
        this.setState({
          minPitch: [this.tuner.pitch, this.tuner.noteName],
        });
      }
      this.setState({
        currentPitch: this.tuner.noteName,
      });
    }
    this.animation = requestAnimationFrame(this.logPitch);
  }

  stopPitch() {
    this.tuner.stopUpdatingPitch();
    cancelAnimationFrame(this.animation);
    this.voice.stop();
    this.tuner.stop();
  }

  render() {
    return (
      <div className="Pitch-app">
        <Button
          className="return-button"
          onClick={() => this.nextPath("/info")}
          Type="text"
          Class="standard"
          State="normal"
          icon={<LeftOutlined />}
        >
          Back
        </Button>
        <Space direction="vertical">
          <Paragraph className="description2">
            Click the botton to record your voice
          </Paragraph>
        </Space>
        <div className="pitches">
          <div className="currentpitches">
            Current Pitch
            <div className="pitchDisplay">{this.state.currentPitch}</div>
          </div>
          <div className="maxminpitches">
            <div>
              Max Pitch
              <div className="pitchDisplay">{this.state.maxPitch[1]}</div>
            </div>
            <div>
              Min Pitch
              <div className="pitchDisplay">{this.state.minPitch[1]}</div>
            </div>
          </div>
        </div>
        <div className="pitch-buttons">
          <Button
            className="record-button"
            Type="primary"
            Class="standard"
            State="normal"
            onClick={this.getPitch}
          >
            RECORD
          </Button>
          <Button
            className="stop-button"
            Type="primary"
            Class="standard"
            State="normal"
            onClick={this.stopPitch}
          >
            STOP
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Pitch);
