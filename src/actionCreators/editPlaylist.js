export default function setPlayListFunction(data = {}) {
  let playlist = JSON.parse(localStorage.getItem("jukeboxPlaylist"));
  if (data && data.id) {
    if (playlist === null) {
      playlist = [];
      playlist.push(data);
      localStorage.setItem("jukeboxPlaylist", JSON.stringify(playlist));
    } else {
      for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].id === data.id) {
          if (data.delete === "true") {
            playlist.splice(i, 1);
            localStorage.setItem("jukeboxPlaylist", JSON.stringify(playlist));
          }
          return { type: "EDIT_VIDEO_PLAYLIST", payload: playlist };
        }
      }
      playlist.push(data);
      localStorage.setItem("jukeboxPlaylist", JSON.stringify(playlist));
    }
    return { type: "EDIT_VIDEO_PLAYLIST", payload: playlist };
  } else {
    return {
      type: "EDIT_VIDEO_PLAYLIST",
      payload: playlist === null ? [] : playlist
    };
  }
}
