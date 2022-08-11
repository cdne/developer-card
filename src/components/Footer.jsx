import React from 'react';
import twitterIcon from '../images/Twitter Icon.png';
import instagramIcon from '../images/Instagram Icon.png';
import facebookIcon from '../images/Facebook Icon.png';
import githubIcon from '../images/GitHub Icon.png';

const Footer = () => {
  return (
    <footer>
      <a href='http://twitter.com' target='_blank' rel='noopener noreferrer'>
        <img src={twitterIcon} alt='Twitter icon' />
      </a>
      <a href='http://facebook.com' target='_blank' rel='noopener noreferrer'>
        <img src={facebookIcon} alt='Facebook icon' />
      </a>
      <a href='http://instagram.com' target='_blank' rel='noopener noreferrer'>
        <img src={instagramIcon} alt='Instagram icon' />
      </a>

      <a href='http://github.com' target='_blank' rel='noopener noreferrer'>
        <img src={githubIcon} alt='GitHub icon' />
      </a>
    </footer>
  );
};

export default Footer;
