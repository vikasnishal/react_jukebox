import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import fire from "./config/firebase";
import store from "./store";
import Header from "./components/Header.js";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist.js";
import VideoPlayer from "./components/VideoPlayer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="appBody">
          <Header register={this.register} />
          <div className="app-container  container">
            <SearchResults />
            <div className="padding-zero">
              <VideoPlayer />
              <Playlist />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
