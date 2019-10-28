/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import viewUserDataAction from '../actions/viewUserDataAction';
import history from '../utils/history';
import theBannerImage from '../assets/images/take_action1.jpg';
import LogOutComponent from './common/LogOutComponent';
import InfoComponent from './common/InfoComponent';

export class homePageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { fetchUserData } = this.props;
    fetchUserData();
  }

  calcLocalTime =(city, offset_) => {
    const regex = /[+-]?\d+(?:\.\d+)?/g;
    const offset = regex.exec(offset_);
    // create Date object for current location
    const d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    const nd = new Date(utc + (3600000 * offset));

    // return time as a string
    return `The local time for city ${city} is + ${nd.toUTCString()}`;
  }


  handleLogOutClick = () => {
    sessionStorage.removeItem('token');
    sessionStorage.setItem('isLoggedIn', false);
    history.push('/');
  };

  render() {
    const { userInfo, userLocation } = this.props;

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

            <h4 className="father">
              Welcome
              &nbsp;
              <span className="theme_blue">
                {userInfo.title}
                &nbsp;
                {userInfo.last}
              </span>
            </h4>

            <p>
              Date Of Birth:
              &nbsp;
              {userInfo.dob}
            </p>


            <div className="father">
              <h2>Personal Information</h2>
              <div className="head-liner">
                &nbsp;
              </div>
              <img alt="" src={userInfo.thumbnail} className="user-image" />
              <div className="father">
                Title:
                {userInfo.title}
              </div>
              <div className="father">
                First Name:
                {userInfo.first}
              </div>
              <div className="father">
                Last Name:
                {userInfo.last}
              </div>
              <div className="father">
                Gender:
                {userInfo.gender}
              </div>
              <div className="father">
                Date of Birth:
                {userInfo.dob}
              </div>
              <div className="father">
                Phone Number:
                {userInfo.phone}
              </div>
              <div className="father">
                Cell Number:
                {userInfo.cell}
              </div>
              <div className="father">
                Email:
                {userInfo.email}
              </div>
              <div className="father">
                Nationality:
                {userInfo.nat}
              </div>
              <div className="father">
                Username:
                {userInfo.username}
              </div>
            </div>

            <div className="father">
              <h2>Address Details</h2>
              <div className="head-liner">
                &nbsp;
              </div>
              <div className="father">
                street number:
                {userLocation.street_number}
              </div>
              <div className="father">
                street name:
                {userLocation.street_description}
              </div>
              <div className="father">
                city:
                {userLocation.city}
              </div>
              <div className="father">
                state:
                {userLocation.state}
              </div>
              <div className="father">
                country:
                {userLocation.country}
              </div>
              <div className="father">
                postcode:
                {userLocation.postcode}
              </div>
              <div className="father">
                latitude:
                {userLocation.latitude}
              </div>
              <div className="father">
                longitude:
                {userLocation.longitude}
              </div>
              <div className="father">
                timezone offset:
                {userLocation.timezone_offset}
              </div>
              <div className="father">
                timezone description:
                {userLocation.timezone_description}
              </div>
              <div className="father theme_blue">
                {
                  this.calcLocalTime(userLocation.city, userLocation.timezone_offset)
                }
              </div>
              <div className="sister">
                <Link to="/edit-address">
                  {localStorage.setItem('location', JSON.stringify(userLocation))}
                  <button type="button" className="signin">
                    Edit Address
                  </button>
                </Link>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>

          <LogOutComponent handleLogOut={this.handleLogOutClick} />
          <InfoComponent />


        </div>

      </div>
    );
  }
}


homePageComponent.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  userLocation: PropTypes.shape({}),
  userInfo: PropTypes.shape({}),
};

homePageComponent.defaultProps = {
  userInfo: {},
  userLocation: {},
};

export const mapStateToProps = (state) => {
  const { userInfo, userLocation } = state.viewUserDataReducer;
  return { userInfo, userLocation };
};

export default connect(mapStateToProps,
  { fetchUserData: viewUserDataAction })(homePageComponent);
