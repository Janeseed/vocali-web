import React from "react";
import { withRouter } from "react-router-dom";

import { Button, Skeleton, Card } from "antd";

import "./css/home.css";
import "./css/list.css";
import InfoHeader from "./InfoHeader.js";
import VocaliFooter from "./Footer.js";
import Cookies from "universal-cookie";
import * as vocaliAPI from "./api/api.js";

const { Meta } = Card;

class LikeList extends React.Component {
  nextPath(path) {
    this.props.history.push(path);
  }

  state = {
    songList: [
      // {
      //   id: "x1yk42m_99d",
      //   title: "문어의 꿈",
      //   artist: "안예은",
      //   publishedYear: 2021,
      //   genre: "Dance",
      //   mood: "happy",
      //   pitch: "A#",
      //   songNum: 48394,
      // },
      // {
      //   id: "1hOEq5q9L41E2YbLhVvW5x",
      //   title: '아로하(드라마 "슬기로운 의사 생활")',
      //   artist: "조정석",
      //   publishedYear: 2020,
      //   genre: "Ballad",
      //   mood: "energetic",
      //   pitch: "A#",
      //   songNum: 27615,
      // },
    ],
    feedbacks: new Map(),
    loading: false,
    modal: false,
    drawer: false,
    selectedFeedback: "",
  };

  handleSelectedFeedback(tag, checked, songid) {
    if (checked) {
      this.setState({ feedbacks: this.state.feedbacks.set(songid, tag) });
    }
    console.log(this.state.feedbacks);
  }

  handleDelete(songid) {
    this.setState({
      songList: this.state.songList.filter((song) => song.id !== songid),
    });
    // TODO: API connection
  }

  componentDidMount() {
    const cookies = new Cookies();
    const userid = cookies.get("id", { path: "/" });
    let songList = [];
    vocaliAPI
      .getEvaluation(userid)
      .then((result) => {
        result.data.map((song) => {
          if (song.category === "LIKE" && song.song) {
            songList.push(song.song);
          }
        });
      })
      .then(() => this.setState({ songList: songList }));
  }

  render() {
    const { loading } = this.state;
    console.log(this.state.songList);
    return (
      <>
        <InfoHeader />
        <div className="like-list-div">
          {this.state.songList.map((song) => (
            <Card
              className="like-list"
              title={`Song No. ${song.songNum}`}
              extra={
                <Button type="link" onClick={() => this.handleDelete(song.id)}>
                  Delete
                </Button>
              }
            >
              <Skeleton loading={loading} avatar active>
                <Meta title={song.title} description={song.artist} />
              </Skeleton>
            </Card>
          ))}
          <div style={{ height: "20px" }} />
        </div>
        <VocaliFooter />
      </>
    );
  }
}

export default withRouter(LikeList);
