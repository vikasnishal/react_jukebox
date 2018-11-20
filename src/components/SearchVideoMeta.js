import React from "react";
import { connect } from "react-redux";
import playIcon from "../images/play-icon2.gif";
import changeVideo from "../actionCreators/changeVideo";
import setPlaylist from "../actionCreators/editPlaylist";

class SearchVideoMeta extends React.Component {
  render() {
    const { thumbnail, title, description, id } = this.props;
    return (
      <div
        className="video"
        onClick={this.props.addVideoToPlaylist}
        data-id={id}
        data-title={title}
      >
        {thumbnail ? (
          <img className="video-image" src={thumbnail} alt="video " />
        ) : null}
        <p className="video-title">{title}</p>
        {description ? (
          <p className="video-description">{description}</p>
        ) : null}

        {thumbnail ? (
          <img
            src={playIcon}
            className="playVideo"
            alt="play video"
            onClick={this.props.handleVideoChange}
            data-id={id}
          />
        ) : null}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleVideoChange(event) {
    event.stopPropagation();
    dispatch(changeVideo(event.target.dataset.id));
  },
  addVideoToPlaylist(event) {
    let data = JSON.parse(JSON.stringify(event.currentTarget.dataset));
    dispatch(setPlaylist(data));
  }
});

export default connect(
  "",
  mapDispatchToProps
)(SearchVideoMeta);
