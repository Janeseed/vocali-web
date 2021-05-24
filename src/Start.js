import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Typography } from "antd";

import "./css/start.css";
import SimpleHeader from "./SimpleHeader";

const { Paragraph } = Typography;

class Start extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <>
        <SimpleHeader />
        <div class="row-flex-container">
          <Paragraph className="slogan">
            Vocali will find you a perfect song to sing at Noraebang
          </Paragraph>
          <Button
            className="start-button"
            onClick={() => this.nextPath("/info")}
            Type="primary"
            Class="circle"
            State="hover or pressed"
          >
            START
          </Button>
        </div>
      </>
    );
  }
}

export default withRouter(Start);
