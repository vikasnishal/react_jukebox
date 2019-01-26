import React from "react";
import { connect } from "react-redux";
import changeVideo from "../actionCreators/changeVideo";
import editPlaylist from "../actionCreators/editPlaylist";

class PlayVideoMetaPure extends React.PureComponent {
  componentDidUpdate() {}
  render() {
    return (
      <li
        className="playlist-video"
        onClick={this.props.playVideo}
        data-id={this.props.id}
      >
        <p
          className="item-delete"
          data-id={this.props.id}
          data-delete="true"
          onClick={this.props.deleteVideo}
        >
          delete
        </p>
        <p
          className={
            "item-title" +
            (this.props.id === this.props.videoId
              ? " playlist-video-active"
              : "")
          }
        >
          {this.props.title}
        </p>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  playVideo(event) {
    dispatch(changeVideo(event.currentTarget.dataset.id));
  },
  deleteVideo(event) {
    event.stopPropagation();
    let data = JSON.parse(JSON.stringify(event.target.dataset));
    dispatch(editPlaylist(data));
  }
});
export default connect(
  "",
  mapDispatchToProps
)(PlayVideoMetaPure);
