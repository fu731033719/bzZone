import './index.css';
import GreenBall from '../../asset/green-ball.png';
import PurpleBall from '../../asset/purple-ball.png';
import Name from '../../asset/name.png';
import Log from '../../asset/private-log.png';
import { useEffect } from 'react';
/** face  */
import Nose from '../../asset/nose.png'
import LeftW from '../../asset/left-w.png'
import Eye from '../../asset/l-eye.png'
import Mouth from '../../asset/mouth.png'

/** start */
import Start from '../../asset/start.png'
import { Fragment } from 'react';

import {
  useLocation
} from "react-router-dom";

function BackAnimation() {
  const location = useLocation();
  const { pathname } = location;
  const transVw = (px) => {
    return px * (100 / document.documentElement.clientWidth);
  }
  console.log('location', location);
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

  return (
    pathname === '/About' ?
    null
    :
    <Fragment>
      <div className='global-bg'>
        <div className='content'>
          {/* top-container */}
          <div>
            <img className='l-t-ball' src={GreenBall} alt=""/>
            <img className='r-t-ball' src={PurpleBall} alt=""/>
          </div>

          {/* face-container */}
          <div className='face-container'>
            <img className='nose' src={Nose} alt=""/> 
            <img className='eye-w eye-w-1' src={LeftW} alt=""/>
            <div className='eye-dot dot-1'>
              <div className='dot'></div>
            </div>
            <div className='eye'>
              <img className='eye-1' src={Eye} alt=""/>
            </div>
            <img className='eye-w eye-w-2' src={LeftW} alt=""/>
            <div className='eye-dot dot-2'>
              <div className='dot'></div>
            </div>
            <div className='eye'>
              <img className='eye-2' src={Eye} alt=""/>
            </div>
            <img className='mouth' src={Mouth} alt=""/>
          </div>
          {/* start-container */}
          <img className='start start-1' src={Start} alt="" />
          <img className='start start-2' src={Start} alt="" />
          {/* cat-log */}
          <div className='title'>
            <div className='name'>
              <img className='name-pic' src={Name} alt=""/>
            </div>
            <div className='log'>
              <img className='log-pic' src={Log} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default BackAnimation;
