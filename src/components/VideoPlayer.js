import React from "react";
import YouTube from "react-youtube";
import { connect } from "react-redux";

class VideoPlayer extends React.Component {
  render() {
    const opts = {
      height: "480",
      width: "565",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div id="player">
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this.onReady.bind(this)}
          onEnd={this.onEnd}
        />
      </div>
    );
  }
  playVideo(target, id) {
    target.cueVideoById({
      videoId: id
    });
    target.playVideo();
  }
  onReady(event) {
    // access to player in all event handlers via event.target
    let target = event.target;
    // this.playVideo(target, this.props.playlist[0].id);
    target.mute();
  }
  onEnd = event => {
    let target = event.target;
    let { video_id } = target.getVideoData();
    this.props.playlist.forEach((video, index) => {
      if (video.id === video_id) {
        if (index === this.props.playlist.length - 1) {
          this.playVideo(target, this.props.playlist[0].id);
        } else {
          this.playVideo(target, this.props.playlist[index + 1].id);
        }
      }
    });
  };
}
const mapStateToProps = ({ videoId, playlist }) => ({ videoId, playlist });
export default connect(mapStateToProps)(VideoPlayer);
