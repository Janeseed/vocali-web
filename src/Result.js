import React from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Cookies from "universal-cookie";

import { Button, Skeleton, Card, Layout, Tag, Modal, Radio } from "antd";
import { FrownOutlined, HeartOutlined, QuestionOutlined } from "@ant-design/icons";

import "./css/home.css";
import "./css/result.css";
import InfoHeader from "./InfoHeader.js";
import VocaliFooter from "./Footer.js";
import * as vocaliAPI from "./api/api.js";

const { Content } = Layout;
const { Meta } = Card;
const { CheckableTag } = Tag;

class Result extends React.Component {
  userActions = [
    {
      name: "dislike",
      displayName: (
        <p className="feedback-tag-description">
          I don't <br></br>like it
        </p>
      ),
      icon: <FrownOutlined className="feedback-tag-icon" />,
    },
    {
      name: "noclue",
      displayName: (
        <p className="feedback-tag-description">
          I have <br></br>no clue
        </p>
      ),
      icon: <QuestionOutlined className="feedback-tag-icon" />,
    },
    {
      name: "like",
      displayName: (
        <p className="feedback-tag-description">
          Show more <br></br>like this!
        </p>
      ),
      icon: <HeartOutlined className="feedback-tag-icon" />,
    },
  ];

  state = {
    songList: [
      {
        songNum: 83377,
        title: '만약에 (드라마"쾌도 홍길동")',
        artist: "태연(소녀시대)",
        year: 2008,
        genre: "Ballad",
        id: "1BHLy0efFQ8FFxyxgJtTMf",
      },
      {
        songNum: 21022,
        title: "흔들리는 꽃들 속에서 네 샴푸 향이 느껴진 거야",
        artist: "장범준",
        year: 2019,
        genre: "Ballad",
        id: "2skS61BQztE5bUpqJnBJAx",
      },
      {
        songNum: 4772,
        title: "취중진담",
        artist: "전람회",
        year: 1996,
        genre: "Ballad",
        id: "39FFkPyRLQtYBJkgV6ETAw",
      },
      {
        songNum: 90515,
        title: "시차(We Are)(Feat. 로꼬,그레이(GRAY))",
        artist: "우원재",
        year: 2017,
        genre: "Hiphop",
        id: "2SMq0lOqCTHayWa9juoI0d",
      },
      {
        songNum: 91954,
        title: "IndiGO",
        artist: "Justhis,Kid Milli,NO:EL(장용준),Young B",
        year: 2018,
        genre: "Hiphop",
        id: "5oxmx6B0kWTuCKgBzv8NpH",
      },
    ],
    currSongIndex: 0,
    feedbacks: new Map(),
    loading: true,
    adjustModal: false,
    explainModal: false,
    selectedFeedback: "",
    moodWeight: "0",
    pitchWeight: "0",
    prefWeight: "0",
    selectedMood: "",
    selectedPeople: "",
    userId: "",
  };

  loadSongFromModel() {
    console.log(this.state.userId);
    vocaliAPI
      .getRecommendation(
        this.state.userId,
        this.state.selectedMood.toLowerCase() + "," + this.state.selectedPeople.toLowerCase(),
        5
      )
      .then((result) => {
        console.log(result.data);
        this.setState({ songList: result.data, currSongIndex: 0 });
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  handleSelectedFeedback(tag, checked, song) {
    if (checked) {
      this.setState({ feedbacks: this.state.feedbacks.set(song.id, tag) });
    }
    vocaliAPI.selectSong(this.state.userId, [song], tag);
    console.log(this.state.feedbacks);
    if (this.state.currSongIndex < 4) {
      this.setState({ currSongIndex: this.state.currSongIndex + 1 });
    } else {
      console.log("end!");
      this.setState({ loading: true });
      this.loadSongFromModel();
    }
  }

  handleExplainModalChange = () => {
    this.setState({ explainModal: !this.state.explainModal });
  };

  handleAdjustModalChange = () => {
    if (this.state.adjustModal) {
      const cookies = new Cookies();
      const userId = cookies.get("id", { path: "/" });
      const data = {
        moodWeight: parseFloat(this.state.moodWeight),
        prefWeight: parseFloat(this.state.prefWeight),
        pitchWeight: parseFloat(this.state.pitchWeight),
      };
      vocaliAPI
        .modifyUser(userId, data)
        .then(() =>
          this.props.history.push(
            "/result?people=" + this.state.selectedPeople + "&mood=" + this.state.selectedMood
          )
        );
    }
    this.setState({ adjustModal: !this.state.adjustModal });
  };

  onChangeMood = (e) => {
    this.setState({ moodWeight: e.target.value });
  };

  onChangePitch = (e) => {
    this.setState({ pitchWeight: e.target.value });
  };

  onChangeSongPref = (e) => {
    this.setState({ songPrefWeight: e.target.value });
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    const cookies = new Cookies();
    const userId = cookies.get("id", { path: "/" });
    this.setState(
      {
        userId: userId,
        selectedMood: values.mood,
        selectedPeople: values.people,
      },
      () => this.loadSongFromModel()
    );
    // Get weight
    vocaliAPI.getUser(userId).then((result) => {
      this.setState({ moodWeight: result.data.moodWeight.toString() });
      this.setState({ pitchWeight: result.data.pitchWeight.toString() });
      this.setState({ prefWeight: result.data.prefWeight.toString() });
    });
  }

  render() {
    const currSong = this.state.songList[this.state.currSongIndex];
    return (
      <div style={{ backgroundColor: "#F6F0FE" }}>
        <InfoHeader />
        <Content className="result-contents">
          <p className="result-description">Vocali found the best song for you!</p>
          <p className="result-description-small">
            If you leave feedback on the recommended song, <br />
            we will recommend a new song.
          </p>
          <Card
            className="song-info"
            title={`Song No. ${currSong.songNum}`}
            extra={
              <Button type="link" onClick={this.handleExplainModalChange} style={{ padding: "0" }}>
                Why this song?
              </Button>
            }
            actions={this.userActions.map((userAction) => (
              <CheckableTag
                key={userAction.name}
                checked={this.state.feedbacks.get(currSong.id) === userAction.name}
                onChange={(checked) =>
                  this.handleSelectedFeedback(userAction.name, checked, currSong)
                }
                style={{ width: "80%", padding: "5px", margin: "0" }}
              >
                {userAction.icon}
                {userAction.displayName}
              </CheckableTag>
            ))}
          >
            <Skeleton loading={this.state.loading} active>
              <Meta
                className="card-skeleton"
                title={currSong.title}
                description={currSong.artist}
              />
            </Skeleton>
          </Card>
          <p className="result-description-small">Keep getting unsatisfactory results?</p>
          <Button className="adjust-button" type="primary" onClick={this.handleAdjustModalChange}>
            Adjust factor importance
          </Button>
          <Modal
            title="Adjust factor importance"
            visible={this.state.adjustModal}
            onCancel={this.handleAdjustModalChange}
            footer={[
              <Button
                key="weight-control-confirm"
                type="primary"
                onClick={this.handleAdjustModalChange}
              >
                CONFIRM
              </Button>,
            ]}
          >
            <p>You can change how much each factor influences the recommendation</p>
            <div className="weight-control-slider">
              <p className="weight-slider-title">Mood</p>
              <p className="weight-slider-description">
                How much your mood factors into recommendations
              </p>
              <Radio.Group
                className="weight-options"
                defaultValue={this.state.moodWeight}
                onChange={this.onChangeMood}
                buttonStyle="solid"
              >
                <Radio.Button value="0">None</Radio.Button>
                <Radio.Button value="0.5">Moderate</Radio.Button>
                <Radio.Button value="1">Strong</Radio.Button>
              </Radio.Group>
            </div>
            <div className="weight-control-slider">
              <p className="weight-slider-title">Pitch</p>
              <p className="weight-slider-description">
                How much your pitch factors into recommendations
              </p>
              <Radio.Group
                className="weight-options"
                defaultValue={this.state.pitchWeight}
                onChange={this.onChangePitch}
                buttonStyle="solid"
              >
                <Radio.Button value="0">None</Radio.Button>
                <Radio.Button value="0.5">Moderate</Radio.Button>
                <Radio.Button value="1">Strong</Radio.Button>
              </Radio.Group>
            </div>
            <div className="weight-control-slider">
              <p className="weight-slider-title">Song Preference</p>
              <p className="weight-slider-description">
                How much your rating history factors into recommendations
              </p>
              <Radio.Group
                className="weight-options"
                defaultValue={this.state.prefWeight}
                onChange={this.onChangeSongPref}
                buttonStyle="solid"
              >
                <Radio.Button value="0">None</Radio.Button>
                <Radio.Button value="0.5">Moderate</Radio.Button>
                <Radio.Button value="1">Strong</Radio.Button>
              </Radio.Group>
            </div>
          </Modal>
          <Modal
            title="Score of this song"
            visible={this.state.explainModal}
            onCancel={this.handleExplainModalChange}
            footer={[
              <Button
                key="weight-control-confirm"
                type="primary"
                onClick={this.handleExplainModalChange}
              >
                OK
              </Button>,
            ]}
          >
            <div className="song-score-info">
              <div className="pitch-score-div">
                <p className="score-title">Pitch</p>
                <div>
                  <Tag color="#6200ee">Easy</Tag>
                  <Tag>Normal</Tag>
                  <Tag>Hard</Tag>
                </div>
              </div>
              <div className="mood-score-div">
                <p className="score-title">Mood</p>
                <div>
                  This song is <strong>{(currSong.moodScore * 100).toFixed(1)}%</strong>{" "}
                  {this.state.selectedMood}
                </div>
              </div>
              <div className="song-score-div">
                <p className="score-title">Preference</p>
                <div className="pref-score">
                  <p>
                    <strong>{(currSong.prefScore * 100).toFixed(1)}%</strong> match based on{" "}
                    <br />
                    users with similar<br />
                    music taste as you
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </Content>
        <VocaliFooter />
      </div>
    );
  }
}

export default withRouter(Result);
