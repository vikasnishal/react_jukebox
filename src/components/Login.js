import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="popup row">
        <div className="popup_inner col-md-6 col-xs-12">
          <input
            type="text"
            placeholder="Email ID "
            className="login-modal-email"
          />

          <input
            type="password"
            placeholder="Password"
            className="login-modal-password"
          />

          <button className="btn login-modal-button" ng-click="login(user)">
            Login
          </button>

          <div className="clickable login-modal-action">
            forgot your password?
          </div>

          <button className="btn signup-modal-button">
            Don't have an account? Sign up now!
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
