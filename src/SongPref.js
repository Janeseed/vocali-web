import React from "react";
import { Button, Typography, Card, Tag } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";

import * as vocaliAPI from "./api/api.js";
import Cookies from "universal-cookie";
import "./css/common.css";
import songlist from "./static/songPref.json";
import SimpleHeader from "./SimpleHeader";

const { Paragraph } = Typography;
const { CheckableTag } = Tag;

class SongPref extends React.Component {
  state = {
    selectedSongs: [],
  };

  handleSongPref(tag, checked) {
    const { selectedSongs } = this.state;
    const nextSelectedTags = checked
      ? [...selectedSongs, tag]
      : selectedSongs.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    this.setState({ selectedSongs: nextSelectedTags });
  }

  onNextClick(selectedSongs) {
    console.log(selectedSongs);
    const cookies = new Cookies();
    const userId = cookies.get("id", { path: "/" });
    vocaliAPI.selectSong(userId, selectedSongs, "like");
    this.props.history.push("/home");
  }

  render() {
    const { selectedSongs } = this.state;
    return (
      <div>
        <SimpleHeader back="/pitch" />
        <Paragraph className="description">
          Next,<br></br>Check all the songs you would sing at Noraebang!
        </Paragraph>
        <div className="song-pref-div">
          {songlist.map((song) => (
            <Card
              size="small"
              className="song-pref-card"
              title={song.title}
              extra={
                <CheckableTag
                  key={song.songNum}
                  checked={selectedSongs.indexOf(song) > -1}
                  onChange={(checked) => this.handleSongPref(song, checked)}
                >
                  <HeartOutlined />
                </CheckableTag>
              }
            >
              <p>{song.artist}</p>
            </Card>
          ))}
        </div>
        <Button
          className="next-button"
          onClick={() => this.onNextClick(this.state.selectedSongs)}
          type="primary"
        >
          NEXT
        </Button>
      </div>
    );
  }
}

export default withRouter(SongPref);
