import React from "react";

import P5Wrapper from "react-p5-wrapper";
import Wad from "web-audio-daw";

export default class PitchDetector extends React.Component {
  constructor(props) {
    super(props);
    let tuner;
    let animation;
    this.getPitch = this.getPitch.bind(this);
    this.logPitch = this.logPitch.bind(this);
    this.stopPitch = this.stopPitch.bind(this);
  }

  getPitch() {
    var voice = new Wad({ source: "mic" }); // At this point, your browser will ask for permission to access your microphone.
    this.tuner = new Wad.Poly();
    this.tuner.setVolume(0); // If you're not using headphones, you can eliminate microphone feedback by muting the output from the tuner.
    this.tuner.add(voice);

    voice.play(); // You must give your browser permission to access your microphone before calling play().

    this.tuner.updatePitch(); // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in <code>tuner.pitch</code> and <code>tuner.noteName</code>.

    // var self = this;
    // var logPitch = function() {
    //     console.log(self.tuner.pitch, self.tuner.noteName)
    //     requestAnimationFrame(logPitch)
    // };
    this.logPitch();
    // If you sing into your microphone, your pitch will be logged to the console in real time.
  }

  logPitch() {
    console.log(this.tuner.pitch, this.tuner.noteName);
    this.animation = requestAnimationFrame(this.logPitch);
  }

  stopPitch() {
    this.tuner.stopUpdatingPitch();
    cancelAnimationFrame(this.animation);
    // console.log(this.tuner.pitch, this.tuner.noteName)
  }

  render() {
    return (
      <div>
        <button onClick={this.getPitch}>Start</button>
        <button onClick={this.stopPitch}>End</button>
      </div>
    );
  }
}
