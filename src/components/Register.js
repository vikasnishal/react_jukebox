import React from "react";
import { createPortal } from "react-dom";
import fire from "../config/firebase";

const modalRoot = document.getElementById("modal");

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.newEl = document.createElement("div");
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      showError: false
    };
  }
  componentDidMount() {
    modalRoot.appendChild(this.newEl);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.newEl);
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showError: false
    });
  };

  getName(authData) {
    switch (authData.additionalUserInfo.providerId) {
      case "password":
        return authData.user.email.replace(/@.*/, "");
      case "google":
        return authData.google.displayName;
      case "facebook":
        return authData.facebook.displayName;
    }
  }
  registerUser = e => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        showError: true
      });
      return;
    }
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authData => {
        if (authData.user) {
          authData.user
            .updateProfile({
              displayName: this.getName(authData)
            })
            .then(user => {
              this.props.toggleRegister();
            });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  signUpWithGoogle = e => {
    let provider = fire
      .auth()
      .provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    fire.auth().languageCode = "pt";
    provider.setCustomParameters({
      login_hint: "user@example.com"
    });
    fire
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  render() {
    const register = (
      <form onSubmit={this.registerUser}>
        <span
          aria-label="close signup"
          role="img"
          className="login-close"
          onClick={this.props.toggleRegister}
        >
          ╳
        </span>
        <div className="">
          <input
            name="email"
            type="email"
            className=" register-modal-input"
            placeholder="Enter Email Id"
            onChange={this.onChange}
            value={this.state.email}
            required
          />
          <input
            type="password"
            name="password"
            className="register-modal-input"
            placeholder="Enter Password"
            onChange={this.onChange}
            value={this.state.password}
            pattern=".{6,100}"
            required
            title="Password must contain min. 6 characters"
          />
          <input
            type="password"
            name="confirmPassword"
            className="register-modal-input"
            placeholder="Confirm Password"
            onChange={this.onChange}
            value={this.state.confirmPassword}
            pattern=".{6,100}"
            required
            title="Password must contain min. 6 characters"
          />
          {this.state.showError ? (
            <span className="register-pwd-mismatch-error">
              Passwords don't match.
            </span>
          ) : null}
        </div>
        <button className="btn register-modal-signup-button" type="submit">
          Sign up now!
        </button>
        {/* <button
          className="btn register-modal-signup-button"
          onClick={this.signUpWithGoogle}
        >
          Sign up with google
        </button> */}
      </form>
    );
    return createPortal(register, this.newEl);
  }
}

export default Register;
