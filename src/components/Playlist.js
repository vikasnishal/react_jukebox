import React from "react";
import { connect } from "react-redux";
import PlayVideoMeta from "./PlayVideoMeta";
import setPlaylist from "../actionCreators/editPlaylist";

class Playlist extends React.Component {
  componentDidMount() {
    this.props.getPlaylist();
  }

  render() {
    return (
      <div id="playlist">
        <ol>
          {this.props.playlist.map(video => {
            return (
              <PlayVideoMeta key={video.id} id={video.id} title={video.title} />
            );
          })}
        </ol>
      </div>
    );
  }
}
const mapStateToProps = ({ playlist = [] }) => ({
  playlist
});
const mapDispatchToProps = dispatch => ({
  getPlaylist() {
    dispatch(setPlaylist());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
