import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header.js";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist.js";
import VideoPlayer from "./components/VideoPlayer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <SearchResults className="col-xs-12 col-md-6" />
              <div className="col-xs-12 col-md-6">
                <VideoPlayer />
                {/* <Playlist /> */}
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
