import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/style.css';
import loading from '../../assets/images/loading.gif';

const Loader = ({ className }) => (
  <div className={className}>
    <img alt="loading..." src={loading} />
  </div>
);

Loader.defaultProps = {
  className: 'loader',
};

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
