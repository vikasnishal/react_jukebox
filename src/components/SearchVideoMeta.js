import React from "react";
import playIcon from "../images/play-icon2.gif";

class SearchVideoMeta extends React.Component {
  constructor(props) {
    super(props);
  }
  addVideoToPlaylist({ id, title } = {}) {
    let playlist = JSON.parse(localStorage.getItem("jukeboxPlaylist"));
    if (playlist === null) {
      playlist = [];
      let obj = {
        id,
        title
      };
      playlist.push(obj);
      localStorage.setItem("jukeboxPlaylist", JSON.stringify(playlist));
    } else {
      playlist.push({ id, title });
      localStorage.setItem("jukeboxPlaylist", JSON.stringify(playlist));
    }
  }
  render() {
    const { thumbnail, title, description, id } = this.props;
    return (
      <div className="video" onClick={this.addVideoToPlaylist({ id, title })}>
        {thumbnail ? (
          <img className="video-image" src={thumbnail} alt="video " />
        ) : null}
        <p className="video-title">{title}</p>
        {description ? (
          <p className="video-description">{description}</p>
        ) : null}

        {thumbnail ? (
          <img src={playIcon} className="playVideo" alt="play video" />
        ) : null}
      </div>
    );
  }
}
export default SearchVideoMeta;
