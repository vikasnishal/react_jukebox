import React from "react";
import { connect } from "react-redux";
import logo from "../images/title-logo2.png";
import searchIcon from "../images/search.png";
import changeQuery from "../actionCreators/changeQuery";
import getResults from "../actionCreators/setResults";

class SearchBox extends React.Component {
  //   handleFormSubmit() {
  //     event.preventDefault();
  //     this.props.handleSearchResults();
  //   }
  render() {
    return (
      <div className="">
        <img src={logo} className="app-title" alt="page logo" />
        <form id="search" onSubmit={this.props.handleSearchResults}>
          <input
            id="query"
            name="q"
            type="text"
            placeholder="Search a YouTube video"
            value={this.props.query}
            onChange={this.props.handleQueryChange}
          />
          <input id="submit" type="image" src={searchIcon} alt="Search" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ query }) => ({
  query
});
const mapDispatchToProps = dispatch => ({
  handleQueryChange(event) {
    dispatch(changeQuery(event.target.value));
  },
  handleSearchResults(event) {
    event.preventDefault();
    dispatch(getResults());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
