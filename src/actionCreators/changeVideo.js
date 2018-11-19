export default function changeVideoFunction(videoId) {
  return { type: "SET_VIDEOID", payload: videoId };
}
