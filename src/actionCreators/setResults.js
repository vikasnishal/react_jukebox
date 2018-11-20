import axios from "axios";
export default function setResultsFunction() {
  return function setResultsThunk(dispatch, getState) {
    let { query = "" } = getState();
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
          q: query
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
          dispatch({
            type: "SET_RESULTS",
            payload: results
          });
        } else {
          dispatch({
            type: "SET_RESULTS",
            payload: []
          });
        }
      });
    //   .then(function(error) {
    //     console.log(error);
    //   });
  };
}
