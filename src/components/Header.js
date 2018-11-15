import React from "react";
import SearchBox from "./SearchBox";

class Header extends React.Component {
  render() {
    return (
      <header>
        <SearchBox />
        <div className="span4">
          <span className=" loginLink" ng-click="login()">
            LOGIN
          </span>
          <span className="divider">|</span>
          <span className="loginLink float-right" ng-click="register()">
            REGISTER
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
