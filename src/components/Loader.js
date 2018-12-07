import React from 'react';

import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="col-md-9">
      <div className="loader-wrapper">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>);
};

export default Loader;