/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import theBannerImage from '../assets/images/take_action1.jpg';
import signinImage from '../assets/images/new-user2.png';
import editAddressAction from '../actions/editAddressAction';
import Loader from './common/Loader';
import InfoComponent from './common/InfoComponent';

export class editAddressComponent extends Component {
  constructor(props) {
    super(props);
    const currentInfo = JSON.parse(localStorage.getItem('location'));
    this.state = {
      isLoading: false,
      id: currentInfo.address_id,
      city: currentInfo.city,
      country: currentInfo.country,
      latitude: currentInfo.latitude,
      longitude: currentInfo.longitude,
      postcode: currentInfo.postcode,
      state: currentInfo.state,
      street_name: currentInfo.street_name,
      street_number: currentInfo.street_number,
      timezone_description: currentInfo.timezone_description,
      timezone_offset: currentInfo.timezone_offset,
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
        const {
          city, country, latitude, longitude, postcode, state, street_name, street_number,
          timezone_description, timezone_offset,
        } = this.state;

        const editInfo = {
          city,
          country,
          latitude,
          longitude,
          postcode,
          state,
          street_name,
          street_number,
          timezone_description,
          timezone_offset,
        };

        const { editAction } = this.props;

        const { id } = this.state;
        await editAction(id, editInfo);

        await this.setState({ isLoading: false });
      }


      render() {
        const {
          city, country, latitude, longitude, postcode, state, street_name, street_number,
          timezone_description, timezone_offset, isLoading,
        } = this.state;
        return (
          <div>
            <div className="pageHeading">
              <span className="logo-l">User </span>
              <span className="logo-r">Address APP</span>
            </div>
            <div>
              <div className="menu">&nbsp;</div>
              <div className="main">
                <p id="theme_about">A Stand Against Corruption</p>
                <div className="head-liner">&nbsp;</div>

                <div className="father">
                  <img className="bannerImage" src={theBannerImage} alt="" />
                </div>

                <div className="head-liner">&nbsp;</div>

                <div className="father">

                  <form className="modal-content animate" id="register-form" onSubmit={this.handleSubmit}>
                    <div className="imgcontainer">
                      <img src={signinImage} alt="Avatar" className="avatar" />
                    </div>

                    <div className="container">
                      {
                        isLoading
                          ? <Loader />
                          : (
                            <div>

                              <label htmlFor="uname"><b>City</b></label>
                              <input
                                id="city"
                                type="text"
                                name="city"
                                value={city}
                                onChange={this.onInputChange}
                                placeholder="Enter City Name"
                                required
                              />

                              <label htmlFor="uname"><b>Country</b></label>
                              <input
                                id="country"
                                type="text"
                                name="country"
                                value={country}
                                onChange={this.onInputChange}
                                placeholder="Country"
                                required
                              />

                              <label htmlFor="uname"><b>Latitude</b></label>
                              <input
                                id="latitude"
                                type="text"
                                name="latitude"
                                value={latitude}
                                onChange={this.onInputChange}
                                placeholder="Latitude"
                              />

                              <label htmlFor="uname"><b>Longitude</b></label>
                              <input
                                id="longitude"
                                type="text"
                                name="longitude"
                                value={longitude}
                                onChange={this.onInputChange}
                                placeholder="Longitude"
                                required
                              />

                              <label htmlFor="psw"><b>PostCode</b></label>
                              <input
                                id="postcode"
                                type="text"
                                name="postcode"
                                value={postcode}
                                onChange={this.onInputChange}
                                placeholder="PostCode"
                                required
                              />

                              <label htmlFor="uname"><b>State</b></label>
                              <input
                                id="state"
                                type="text"
                                name="state"
                                value={state}
                                onChange={this.onInputChange}
                                placeholder="State"
                                required
                              />

                              <label htmlFor="uname"><b>Street Name</b></label>
                              <input
                                id="street_name"
                                type="text"
                                name="street_name"
                                value={street_name}
                                onChange={this.onInputChange}
                                placeholder="Street Name"
                              />


                              <label htmlFor="uname"><b>Street Number</b></label>
                              <input
                                id="street_number"
                                type="text"
                                name="street_number"
                                value={street_number}
                                onChange={this.onInputChange}
                                placeholder="Street Number"
                              />

                              <label htmlFor="uname"><b>Time Zone Description</b></label>
                              <input
                                id="timezone_description"
                                type="text"
                                name="timezone_description"
                                value={timezone_description}
                                onChange={this.onInputChange}
                                placeholder="Time Zone Description"
                              />

                              <label htmlFor="uname"><b>Time Zone Offset</b></label>
                              <input
                                id="timezone_offset"
                                type="text"
                                name="timezone_offset"
                                value={timezone_offset}
                                onChange={this.onInputChange}
                                placeholder="Time Zone Offset"
                              />

                              <button className="register_button" type="submit">SAVE</button>
                              <div className="head-liner">&nbsp;</div>
                            </div>

                          )}
                    </div>
                  </form>

                </div>
                <div className="head-liner">&nbsp;</div>
              </div>
              <Link to="/"><h4>Home </h4></Link>
              <InfoComponent />
            </div>

          </div>
        );
      }
}

editAddressComponent.propTypes = {
  editAction: PropTypes.func,
};

editAddressComponent.defaultProps = {
  editAction: () => {},
};


export const mapStateToProps = state => ({
  editAddressReducer: state.editAddressReducer,
});

export default connect(mapStateToProps, { editAction: editAddressAction })(editAddressComponent);
