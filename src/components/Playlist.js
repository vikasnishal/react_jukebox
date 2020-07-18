import React from "react";
import { connect } from "react-redux";
import PlayVideoMetaPure from "./PlayVideoMetaPure";
import setPlaylist from "../actionCreators/editPlaylist";
import changeVideo from "../actionCreators/changeVideo";

class Playlist extends React.Component {
  componentDidMount() {
    this.props.getPlaylist();
  }
  componentDidUpdate() {
    console.log("playlist comp updated");
  }
  render() {
    return (
      <div id="playlist">
        <ol>
          {this.props.playlist.map(video => {
            return (
              <PlayVideoMetaPure
                key={video.id}
                id={video.id}
                title={video.title}
                videoId={this.props.videoId}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}
const mapStateToProps = ({ playlist = [], videoId }) => ({
  playlist,
  videoId
});

export default connect(mapStateToProps, {
  getPlaylist: setPlaylist,
  setDefaultVideo: changeVideo
})(Playlist);
