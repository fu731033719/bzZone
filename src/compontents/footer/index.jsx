import './index.css';


import {Fragment} from 'react';
function Footer() {
  const openSocial = (url) => {
    window.open(url);
  }
  return (
    <Fragment>
        <div className='bottom'>
            <div className="contact">
              <img className='contact-pic' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/home/CONTACT.png" alt="" />
              <div className='contact-card'>
                <div className='info'>
                  <p>INFO@BAOZHUCARRIE.ART</p>
                  <p>TEL：15088780681</p>
                  <p>Email：ylsun_sun@163.com</p>
                </div>
                <div className='social'>
                  <p>Follow Me</p>
                  <div className='social-icon'>
                    <img onClick={e => openSocial('https://www.xiaohongshu.com/user/profile/5992445a50c4b46b02bac2ed?xhsshare=CopyLink&appuid=5992445a50c4b46b02bac2ed&apptime=1665126877')} src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/home/rebbook%20LOGO%402x.png" alt="" />
                    <img onClick={e => openSocial('https://weibo.com/u/2868931234')} src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/home/weibo%402x.png" alt="" />
                    <img onClick={e => openSocial('https://www.instagram.com/baozhu.carrie/')} src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/home/instagram-logo%402x.png" alt="" />
                    <img onClick={e => openSocial('https://www.behance.net/yyulinsun-carrie')} src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/home/BEHANCELOGO%402x.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <img className='l-b-ball' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fpurple-ball.png" alt=""/>
            <img className='r-b-ball' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fgreen-ball.png" alt=""/>
            <p className='footer-tag'>Copyright@BAOZHU</p>
        </div>
    </Fragment>
    
  );
}

export default Footer;