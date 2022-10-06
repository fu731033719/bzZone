import './index.css';


import {Fragment} from 'react';
function Footer() {
  return (
    <Fragment>
        <div className='bottom'>
            <img className='l-b-ball' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fpurple-ball.png" alt=""/>
            <img className='r-b-ball' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fgreen-ball.png" alt=""/>
            <p className='footer-tag'>Copyright@BAOZHU</p>
        </div>
    </Fragment>
    
  );
}

export default Footer;