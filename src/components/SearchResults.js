import React from "react";
import { connect } from "react-redux";
import SearchVideoMeta from "./SearchVideoMeta";
import getResults from "../actionCreators/getResults";

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.search();
  }
  render() {
    return (
      <div className="col-xs-12 col-md-6">
        {this.props.results.map(video => {
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
const mapStateToProps = ({ query, results }) => ({
  query,
  results
});
const mapDispatchToProps = dispatch => ({
  search() {
    dispatch(getResults());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
