import './index.css';
import { useEffect } from 'react';

import {
  useLocation
} from "react-router-dom";

function BackAnimation() {
  const location = useLocation();
  const { pathname } = location;
  const transVw = (px) => {
    return px * (100 / document.documentElement.clientWidth);
  }
  /** registration eyeFn  */
  const eyeball = (e) => {
    calEyeBall(e.pageX, e.pageY)
  }

  const calEyeBall = (mouseX, mouseY) => {
    let eyeDot = document.querySelectorAll('.eye-dot');
    eyeDot.forEach((eye, index) => {
      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2)
      let rad = Math.atan2(mouseX - x, mouseY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      const dot = document.getElementsByClassName('dot')[index];
      const eyeblack = document.getElementsByClassName(`eye`)[index];
      let {left, top} = dot.getBoundingClientRect();
      left += document.documentElement.scrollLeft;
      top += document.documentElement.scrollTop;
      eye.style.transform = `rotate(${rot}deg)`;
      eyeblack.style.transform = `translate(${transVw(left)}vw, ${transVw(top)}vw)`;
    });
  }

  document.querySelector('body').addEventListener('mousemove', eyeball);
  
  window.onresize = () => {
    calEyeBall(0,0);
  }
  useEffect(() => {
    calEyeBall(0,0);
  });
  const isAbout =  pathname === '/About';
  const isHome = pathname === '/' || pathname === '/Home';
  const isProjectDetail = pathname === '/ProjectDetail';

  return (
    isAbout || isProjectDetail ?
    null
    :
      <div className='global-bg'>
        <div className='content'>
          {/* top-container */}
          <div>
            <img className='l-t-ball' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fgreen-ball.png" alt=""/>
            <img className='r-t-ball' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fpurple-ball.png" alt=""/>
          </div>

          {/* face-container */}
          <div className='face-container'>
            <img className='nose' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fnose.png" alt=""/> 
            <img className='eye-w eye-w-1' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fleft-w.png" alt=""/>
            <div className='eye-dot dot-1'>
              <div className='dot'></div>
            </div>
            <div className='eye'>
              <img className='eye-1' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fl-eye.png" alt=""/>
            </div>
            <img className='eye-w eye-w-2' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fleft-w.png" alt=""/>
            <div className='eye-dot dot-2'>
              <div className='dot'></div>
            </div>
            <div className='eye'>
              <img className='eye-2' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fl-eye.png" alt=""/>
            </div>
            <img className='mouth' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fmouth.png" alt=""/>
          </div>
          {/* start-container */}
          <img className='start start-1' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fstart.png" alt="" />
          <img style={isHome? {right: '46.8vw', top:'48.2vw'} : {}} className='start start-2' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fstart.png" alt="" />
          {/* cat-log */}
          {
            isHome ?
            <div className='title'>
              <div className='name'>
                BAOZHU
              </div>
              <div className='log'>
                CREATIVE  DESIGNER  BAOZHU
                <br/>
                From 2017 to 2022
              </div>
            </div>
            :
            null
          }
        </div>
      </div>
  );
}

export default BackAnimation;
