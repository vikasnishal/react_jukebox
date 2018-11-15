import React from "react";
import PlayVideoMeta from "./PlayVideoMeta";

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: []
    };
  }
  componentDidMount() {
    let playlist = JSON.parse(localStorage.getItem("jukeboxPlaylist"));
    if (playlist) {
      this.setState({
        playlist
      });
    }
  }
  render() {
    return (
      <div className="col-xs-12 col-md-6">
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
