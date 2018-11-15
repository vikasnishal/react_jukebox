import React from "react";

class PlayVideoMeta extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <li>
        <p
          className="item-delete"
          data-ng-click="delete(upcoming, video.id,'new')"
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
export default PlayVideoMeta;
