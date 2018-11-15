import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import SearchResults from "./components/SearchResults";
import Playlist from "./components/Playlist.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <SearchResults className="col-xs-12 col-md-6" />
            <Playlist className="col-xs-12 col-md-6" />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
