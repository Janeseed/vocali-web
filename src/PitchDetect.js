import React from "react";
import Wad from "web-audio-daw";
import { withRouter } from "react-router-dom";
import { Button, Typography, Divider } from "antd";

import SimpleHeader from "./SimpleHeader";
import * as vocaliAPI from "./api/api.js";
import Cookies from "universal-cookie";
import "./css/pitch.css";

const { Paragraph } = Typography;

class Pitch extends React.Component {
  constructor(props) {
    super(props);
    this.getPitch = this.getPitch.bind(this);
    this.logPitch = this.logPitch.bind(this);
    this.stopPitch = this.stopPitch.bind(this);
    this.handleRecordChange = this.handleRecordChange.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  componentDidMount() {
    this.voice = new Wad({ source: "mic" });
    this.tuner = new Wad.Poly();
  }

  state = {
    record: false,
    disabled: true,
    currentPitch: "None",
    minPitch: [10000, "None"],
    maxPitch: [0, "None"],
  };
  handleRecordChange = () => {
    this.setState({
      record: !this.state.record,
    });
    if (!this.state.record) {
      this.getPitch();
    } else {
      this.stopPitch();
    }
  };
  bool2str = (bool) => {
    if (bool) return "Stop";
    else return "Record";
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
      console.log(this.state.minPitch[0]);
      if (this.state.disabled) {
        this.setState({ disabled: false });
      }
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

  onNextClick() {
    const cookies = new Cookies();
    const userid = cookies.get("id", { path: "/" });
    const data = {
      minPitch: this.state.minPitch[1],
      maxPitch: this.state.maxPitch[1],
    };
    vocaliAPI.modifyUser(userid, data).then((response) => {
      this.nextPath("/songpref");
    });
  }

  render() {
    return (
      <>
        <SimpleHeader history={this.props.history} back="/info" />
        <Paragraph className="description">
          Sing from your lowest possible note to your highest possible note
        </Paragraph>
        <div className="pitches">
          <div className="currentpitches">
            Current Pitch
            <div className="pitchDisplay">{this.state.currentPitch}</div>
          </div>
          <Divider />
          <div className="maxminpitches">
            <div>
              Min Pitch
              <div className="pitchDisplay">{this.state.minPitch[1]}</div>
            </div>
            <div>
              Max Pitch
              <div className="pitchDisplay">{this.state.maxPitch[1]}</div>
            </div>
          </div>
        </div>
        <div className="pitch-buttons">
          <Button className="record-button" type="primary" onClick={this.handleRecordChange}>
            {this.bool2str(this.state.record)}
          </Button>
          <Button
            className="stop-button"
            type="primary"
            disabled={this.state.disabled || this.state.record}
            onClick={this.onNextClick}
          >
            NEXT
          </Button>
        </div>
      </>
    );
  }
}

export default withRouter(Pitch);
