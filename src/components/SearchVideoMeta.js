import React from "react";
import playIcon from "../images/play-icon2.gif";
export default function SearchVideoMeta(props) {
  const { thumbnail, title, description, id } = props;
  return (
    <div
      className="video"
      onClick={props.addVideoToPlaylist}
      data-id={id}
      data-title={title}
    >
      {thumbnail ? (
        <img className="video-image" src={thumbnail} alt="video " />
      ) : null}
      <p className="video-title">{title}</p>
      {description ? <p className="video-description">{description}</p> : null}
      {thumbnail ? (
        <img
          src={playIcon}
          className="playVideo"
          alt="play video"
          onClick={props.handleVideoChange}
          data-id={id}
        />
      ) : null}
    </div>
  );
}
