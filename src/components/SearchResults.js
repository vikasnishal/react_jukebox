import React from "react";
import { connect } from "react-redux";
import SearchVideoMeta from "./SearchVideoMeta";
import getResults from "../actionCreators/setResults";
import changeVideoFunction from "../actionCreators/changeVideo";
import setPlayListFunction from "../actionCreators/editPlaylist";

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.search();
  }
  componentWillUnmount() {
    console.log("results component destroyed");
  }
  render() {
    return (
      <div className="padding-zero" id="results">
        {this.props.results.map(video => {
          return (
            <SearchVideoMeta
              key={video.id}
              id={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              description={video.description}
              handleVideoChange={this.props.handleVideoChange}
              addVideoToPlaylist={this.props.addVideoToPlaylist}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = ({ query, results }) => ({
  query,
  results
});
const mapDispatchToProps = dispatch => ({
  search() {
    dispatch(getResults());
  },
  handleVideoChange(event) {
    event.stopPropagation();
    dispatch(changeVideoFunction(event.target.dataset.id));
  },
  addVideoToPlaylist(event) {
    let data = JSON.parse(JSON.stringify(event.currentTarget.dataset));
    dispatch(setPlayListFunction(data));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
