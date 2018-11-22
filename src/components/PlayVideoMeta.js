import React from "react";
import { connect } from "react-redux";
import changeVideo from "../actionCreators/changeVideo";
import editPlaylist from "../actionCreators/editPlaylist";

class PlayVideoMeta extends React.Component {
  componentWillUnmount() {
    console.log("playlist element component destroyed");
  }
  render() {
    const { title, id } = this.props;
    return (
      <li
        className="playlist-video"
        onClick={this.props.playVideo}
        data-id={id}
      >
        <p
          className="item-delete"
          data-id={id}
          data-delete="true"
          onClick={this.props.deleteVideo}
        >
          delete
        </p>
        <p className="item-title" data-ng-click="launch(video.id, video.title)">
          {title}
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
)(PlayVideoMeta);
