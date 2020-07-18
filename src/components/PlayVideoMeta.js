import React from "react";
import { connect } from "react-redux";
import changeVideo from "../actionCreators/changeVideo";
import editPlaylist from "../actionCreators/editPlaylist";

const PlayVideoMeta = props => {
  const { title, id } = props;

  return (
    <li className="playlist-video" onClick={props.playVideo} data-id={id}>
      <p
        className="item-delete"
        data-id={id}
        data-delete="true"
        onClick={props.deleteVideo}
      >
        delete
      </p>
      <p
        className={
          "item-title" + (id === props.videoId ? " playlist-video-active" : "")
        }
      >
        {title}
      </p>
    </li>
  );
};

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
