import React from "react";
import { createPortal } from "react-dom";
import fire from "../config/firebase";

const modalRoot = document.getElementById("modal");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.newEl = document.createElement("div");
    this.state = {
      email: "",
      password: ""
    };
  }
  componentDidMount() {
    modalRoot.appendChild(this.newEl);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.newEl);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  authenticateUser = event => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user);
        this.props.toggleLogin();
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const loginEl = (
      <div>
        <span
          aria-label="close login"
          role="img"
          className="login-close"
          onClick={this.props.toggleLogin}
        >
          ╳
        </span>
        <form onSubmit={this.authenticateUser}>
          <input
            type="email"
            placeholder="Email ID "
            className="login-modal-email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-modal-password"
            value={this.state.password}
            onChange={this.onChange}
          />

          <button className="btn login-modal-button" type="submit">
            Login
          </button>
        </form>
        <div className="clickable login-modal-action">
          forgot your password?
        </div>

        <button className="btn signup-modal-button">
          Don't have an account? Sign up now!
        </button>
      </div>
    );
    return createPortal(loginEl, this.newEl);
  }
}

export default Login;
