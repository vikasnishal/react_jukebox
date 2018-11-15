import React from "react";
import axios from "axios";
import SearchVideoMeta from "./SearchVideoMeta";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  componentDidMount() {
    this.search();
  }
  search = () => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: "AIzaSyBMBhKQT8s8pJq9AkFbRfP66KvgktwgLBA",
          type: "video",
          maxResults: "8",
          order: "viewCount",
          videoDuration: "medium",
          part: "id,snippet",
          fields:
            "items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default",
          q: ""
        }
      })
      .then(res => {
        if (res.data && res.data.items) {
          let results = [];
          for (var i = res.data.items.length - 1; i >= 0; i--) {
            results.push({
              id: res.data.items[i].id.videoId,
              title: res.data.items[i].snippet.title,
              description: res.data.items[i].snippet.description,
              thumbnail: res.data.items[i].snippet.thumbnails.default.url,
              author: res.data.items[i].snippet.channelTitle
            });
          }
          this.setState({
            results
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="col-xs-12 col-md-6">
        {this.state.results.map(video => {
          return (
            <SearchVideoMeta
              key={video.id}
              id={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              description={video.description}
            />
          );
        })}
      </div>
    );
  }
}

export default SearchResults;
