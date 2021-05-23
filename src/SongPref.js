import React from "react";
import { Button, Typography, Card, Space, Tag } from "antd";
import { HeartOutlined, LeftOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import "./css/start.css";
import "./css/songpref.css";

const { Paragraph } = Typography;
const { CheckableTag } = Tag;

const songPrefTags = ["songId1","songId2", "songId3"];

class SongPref extends React.Component {
  
  state = {
    selectedSongs: [],
  };

  handleSongPref(tag, checked) {
    const { selectedSongs } = this.state;
    const nextSelectedTags = checked ? [...selectedSongs, tag] : selectedSongs.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedSongs: nextSelectedTags });
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    const { selectedSongs } = this.state;
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
            {songPrefTags.map((tag) => (
              <Card
              size="small"
              title="문어의 꿈"
              extra={
                <CheckableTag
                  key={tag}
                  checked={selectedSongs.indexOf(tag) > -1}
                  onChange={checked => this.handleSongPref(tag, checked)}
                >
                  <HeartOutlined />
                </CheckableTag>
              }
              style={{ width: 160 }}
              >
                <p>안예은</p>
              </Card>
            ))}
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
