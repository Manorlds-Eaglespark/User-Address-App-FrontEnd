import React from 'react';
import emailImage from '../../assets/images/email.png';
import callImage from '../../assets/images/call.png';

const InfoComponent = () => (
  <div className="right">
    <h2 id="text_left">ABOUT</h2>
    <p id="text_left">
                            We aim at creating a for people to conviniently
                            register their addresses.

    </p>
                        &nbsp;
    <h2 id="text_left">HOTLINE</h2>
    <p id="text_left">
      <img id="contact_images" src={callImage} alt="" />
      {' '}
                            0414 5555 555
    </p>
    <p id="text_left">
      <img id="contact_images" src={callImage} alt="" />
      {' '}
                            0414 4444 444
    </p>
    <p id="text_left">
      <img id="contact_images" src={emailImage} alt="" />
      {' '}
                            ask@address-app.com
    </p>

  </div>
);

export default InfoComponent;
