import './index.css';
import GreenBall from '../../asset/green-ball.png';
import PurpleBall from '../../asset/purple-ball.png';


import {Fragment} from 'react';
function Footer() {
  return (
    <Fragment>
        <div className='bottom'>
            <img className='l-b-ball' src={PurpleBall} alt=""/>
            <img className='r-b-ball' src={GreenBall} alt=""/>
            <p className='footer-tag'>Copyright@BAOZHU</p>
        </div>
    </Fragment>
    
  );
}

export default Footer;