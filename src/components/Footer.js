import React from 'react';
import '../App.css';
import '../Footer.css';
import netscape from '../images/netscape.png'
import ie from '../images/ie.png'

const Footer = () => (
    <footer>
      Best viewed with <br />
      <div className='slide-container'>
        <img className='browser' src={netscape} alt='netscape logo' />
        <img className='browser' src={ie} alt='internet explorer logo' />
        <div className='overlay'>
          <div className='slide-text'>{"Just kidding, Chrome is fine."}</div>
        </div>
      </div>
      <div>
        <a href='http://www.free-website-hit-counter.com'><img className='counter' src='http://www.free-website-hit-counter.com/c.php?d=9&id=103686&s=1' alt='hit counter' title='free website hit counter' /></a><br / ><small><a href='http://www.free-website-hit-counter.com' title="free website hit counter">Free website hit counter</a><br />{'© Joel Guerra 1998'}</small>
      </div>
    </footer>
  );

export default Footer;
