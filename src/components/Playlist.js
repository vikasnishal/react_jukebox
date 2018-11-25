import React from "react";
import { connect } from "react-redux";
import PlayVideoMeta from "./PlayVideoMeta";
import setPlaylist from "../actionCreators/editPlaylist";
import changeVideo from "../actionCreators/changeVideo";

class Playlist extends React.Component {
  componentDidMount() {
    this.props.getPlaylist();
    setTimeout(() => {
      this.props.setDefaultVideo(this.props.playlist[0].id);
    }, 1);
  }

  render() {
    return (
      <div id="playlist">
        <ol>
          {this.props.playlist.map(video => {
            return (
              <PlayVideoMeta
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

export default connect(
  mapStateToProps,
  {
    getPlaylist: setPlaylist,
    setDefaultVideo: changeVideo
  }
)(Playlist);
