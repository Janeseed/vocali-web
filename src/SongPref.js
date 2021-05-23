import React from "react";
import { Button, Typography, Card, Space } from "antd";
import { HeartOutlined, LeftOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import "./css/start.css";
import "./css/songpref.css";

const { Paragraph } = Typography;

class SongPref extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div>
        <Button
          className="return-button"
          onClick={() => this.nextPath("/pitch")}
          Type="text"
          Class="standard"
          State="normal"
          icon={<LeftOutlined />}
        >
          Back
        </Button>
        <Paragraph className="description">
          Next,<br></br>Check the songs you like!
        </Paragraph>
        <div className="space-div">
          <Space>
            <Card size="small" title="문어의 꿈" extra={<Button shape="circle" icon={<HeartOutlined />} />} style={{ width: 160 }}>
              <p>안예은</p>
            </Card>
            <Card size="small" title="문어의 꿈" extra={<Button shape="circle" icon={<HeartOutlined />} />} style={{ width: 160 }}>
              <p>안예은</p>
            </Card>
            <Card size="small" title="문어의 꿈" extra={<Button shape="circle" icon={<HeartOutlined />} />} style={{ width: 160 }}>
              <p>안예은</p>
            </Card>
          </Space>
        </div>
        <Button
          className="next-button"
          onClick={() => this.nextPath("/home")}
          Type="primary"
          Class="standard"
          State="normal"
        >
          NEXT
        </Button>
      </div>
    );
  }
}

export default withRouter(SongPref);
