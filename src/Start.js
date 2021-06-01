import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Typography } from "antd";

import "./css/common.css";
import SimpleHeader from "./SimpleHeader";

const { Paragraph } = Typography;

class Start extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <>
        <SimpleHeader back="none" />
        <div className="row-flex-container">
          <Paragraph className="slogan">
            Vocali will find you a{" "}
            <span className="highlight">perfect song to sing at Noraebang</span>
          </Paragraph>
          <Button
            className="start-button circle"
            onClick={() => this.nextPath("/info")}
            type="primary"
          >
            START
          </Button>
        </div>
      </>
    );
  }
}

export default withRouter(Start);
