import React from "react";
import { connect } from "react-redux";
import playIcon from "../images/play-icon2.gif";
import changeVideo from "../actionCreators/changeVideo";
import setPlaylist from "../actionCreators/editPlaylist";

class SearchVideoMeta extends React.Component {
  componentDidMount() {
    console.log(`${this.props.id} is mounted`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} is unmounted`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} is updated`);
  }
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
        <div>
          <p className="video-title">{title}</p>
          {description ? (
            <p className="video-description">{description}</p>
          ) : null}
        </div>
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
