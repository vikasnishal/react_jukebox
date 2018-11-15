import React from "react";
import logo from "../images/title-logo2.png";
import searchIcon from "../images/search.png";

class SearchBox extends React.Component {
  render() {
    return (
      <div className="">
        <img src={logo} className="app-title" alt="page logo" />
        <form id="search" data-ng-submit="search(query)">
          <input
            id="query"
            name="q"
            type="text"
            placeholder="Search a YouTube video"
            data-ng-model="query"
          />
          <input id="submit" type="image" src={searchIcon} alt="Search" />
        </form>
      </div>
    );
  }
}

export default SearchBox;
