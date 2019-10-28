import React from 'react';
import { PropTypes } from 'prop-types';

const LogOutComponent = ({ handleLogOut }) => (
  <div>
    <button type="button" className="logout-button" onClick={handleLogOut}> Log Out </button>
  </div>
);

export default LogOutComponent;

LogOutComponent.propTypes = {
  handleLogOut: PropTypes.func,
};

LogOutComponent.defaultProps = {
  handleLogOut: () => {},
};
