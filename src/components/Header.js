import React from "react";
import fire from "../config/firebase";
import { connect } from "react-redux";
import SearchBox from "./SearchBox";
import Login from "./Login";
import Register from "./Register";
import setUser from "../actionCreators/setUser";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegisterModalOpen: false,
      isLoginModalOpen: false
    };
  }
  componentDidMount() {
    this.authenicationListener();
  }
  authenicationListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        let { email, displayName } = user;
        this.props.setUser({ email, displayName });
      } else {
        this.props.setUser({ email: "", displayName: "" });
      }
    });
  }
  toggleRegister = () => {
    this.setState({
      isRegisterModalOpen: !this.state.isRegisterModalOpen
    });
  };
  toggleLogin = () => {
    this.setState({
      isLoginModalOpen: !this.state.isLoginModalOpen
    });
  };
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <header className="row header-row">
        <SearchBox />
        {this.props.user.displayName ? (
          <div className="col-md-2">
            <span className=" loginLink">
              {this.props.user.displayName.toUpperCase()}
            </span>
            <span className="divider">|</span>
            <span className="loginLink" onClick={this.logout}>
              Logout
            </span>
          </div>
        ) : (
          <div className="col-md-2">
            <span className=" loginLink" onClick={this.toggleLogin}>
              LOGIN
            </span>
            <span className="divider">|</span>
            <span className="loginLink" onClick={this.toggleRegister}>
              REGISTER
            </span>
          </div>
        )}
        {this.state.isLoginModalOpen ? (
          <Login toggleLogin={this.toggleLogin} />
        ) : null}
        {this.state.isRegisterModalOpen ? (
          <Register toggleRegister={this.toggleRegister} />
        ) : null}
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  {
    setUser
  }
)(Header);
