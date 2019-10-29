/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import loginUserAction from '../actions/auth/loginAction';
import { toastFailure } from '../utils/toast';
import theBannerImage from '../assets/images/take_action1.jpg';
import login2Image from '../assets/images/login2.png';
import Loader from './common/Loader';
import InfoComponent from './common/InfoComponent';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: '',
      password: '',
    };
  }

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const { email, password } = this.state;
    const loginInfo = {
      email,
      password,
    };
    const { loginAction } = this.props;

    if (this.validateEmailPasswordEntry(email, password)) {
      return;
    }

    await loginAction(loginInfo);

    await this.setState({ isLoading: false });

    this.handleClearForm();
  }


  validateEmailPasswordEntry(email, password) {
    if ((email === '') || (password === '')) {
      toast.dismiss();
      toastFailure('Both Email & Password Details Required', 'A');
      this.setState({ isLoading: false });
      return true;
    }
    return false;
  }

  handleClearForm() {
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    const { email, password, isLoading } = this.state;
    return (
      <div>
        <div className="pageHeading">
          <span className="logo-l">User </span>
          <span className="logo-r">Address APP</span>
        </div>
        <div>
          <div className="menu">
            &nbsp;
          </div>
          <div className="main">
            <p id="theme_about">Ultimate Address Directory</p>
            <div className="head-liner">
              &nbsp;
            </div>
            <div className="father">
              <img className="bannerImage" src={theBannerImage} alt="" />
            </div>

            <div className="head-liner">
              &nbsp;
            </div>

            <div className="father">
              <form className="modal-content animate" id="login-form" onSubmit={this.handleSubmit}>
                <div className="imgcontainer">
                  <img src={login2Image} alt="Avatar" className="avatar" />
                </div>

                <div className="container">

                  {isLoading ? <Loader /> : (

                    <div>

                      <label htmlFor="uname"><b>Email</b></label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.onInputChange}
                        placeholder="Email"
                        required
                      />
                      <label htmlFor="psw"><b>Password</b></label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={this.onInputChange}
                        required
                      />

                      <button className="login_button" type="submit">LOGIN</button>
                    </div>
                  )}

                </div>
              </form>
            </div>
            <div className="head-liner">
              &nbsp;
            </div>

          </div>
          <Link to="/"><h4>Home </h4></Link>
          <InfoComponent />

        </div>

      </div>
    );
  }
}


LoginComponent.propTypes = {
  loginAction: PropTypes.func.isRequired,
};


export const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
});

export default connect(mapStateToProps, { loginAction: loginUserAction })(LoginComponent);
