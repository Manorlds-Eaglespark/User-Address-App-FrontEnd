/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import theBannerImage from '../assets/images/take_action1.jpg';
import loginImage from '../assets/images/login.png';
import InfoComponent from './common/InfoComponent';

const landingPageComponent = () => (
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
          <div className="brother">
            <p id="theme">Welcome</p>
            <Link to="/login">
              <button type="button" id="loginButton" name="loginButton" className="createAccount">
                <img
                  src={loginImage}
                  alt={loginImage}
                />
                {' '}
                Login

              </button>
            </Link>
          </div>

        </div>

      </div>
      <InfoComponent />

    </div>

  </div>
);

export default landingPageComponent;
