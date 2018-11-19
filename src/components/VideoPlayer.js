import React from "react";
import YouTube from "react-youtube";
import { connect } from "react-redux";

class VideoPlayer extends React.Component {
  render() {
    const opts = {
      height: "480",
      width: "570",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
        <YouTube
          videoId={this.props.videoId}
          opts={opts}
          onReady={this.onReady}
        />
      </div>
    );
  }

  onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
const mapStateToProps = ({ videoId }) => ({ videoId });
export default connect(mapStateToProps)(VideoPlayer);
