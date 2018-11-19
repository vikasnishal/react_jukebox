import React from "react";
import PlayVideoMeta from "./PlayVideoMeta";

class Playlist extends React.Component {
  componentDidMount() {
    // let playlist = JSON.parse(localStorage.getItem("jukeboxPlaylist"));
    let playlist = [];
    if (playlist) {
      this.setState({
        playlist
      });
    }
  }
  render() {
    return (
      <div>
        <ol>
          {this.state.playlist.map(video => {
            return (
              <PlayVideoMeta key={video.id} id={video.id} title={video.title} />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Playlist;
