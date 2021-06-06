import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Typography } from "antd";

import "./css/common.css";
import SimpleHeader from "./SimpleHeader";

import * as vocaliAPI from "./api/api.js";

const { Paragraph } = Typography;

class Start extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    vocaliAPI.getUser(1); // For waking up backend server
    return (
      <>
        <SimpleHeader history={this.props.history} back="none" />
        <div className="row-flex-container">
          <Paragraph>
            <div className="slogan">
              Vocali will find you a{" "}
              <span className="highlight">perfect song to sing at Noraebang</span>
            </div>
          </Paragraph>

          <Button
            className="start-button circle"
            onClick={() => this.nextPath("/info")}
            type="primary"
          >
            START
          </Button>
          <div className="recommendation-slogan">
            This site is optimized for mobile environments. <br />
            We recommend using the Chrome browser.
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Start);
