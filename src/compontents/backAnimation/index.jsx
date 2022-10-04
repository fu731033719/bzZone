import './index.css';
import GreenBall from '../../asset/green-ball.png';
import PurpleBall from '../../asset/purple-ball.png';
import Name from '../../asset/name.png';
import Log from '../../asset/private-log.png';
import Bg from '../../asset/bg.png';

/** face  */
import Nose from '../../asset/nose.png'
import LeftW from '../../asset/left-w.png'
import Eye from '../../asset/l-eye.png'
import Mouth from '../../asset/mouth.png'

/** start */
import Start from '../../asset/start.png'







import {Fragment} from 'react';
function BackAnimation() {
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
      console.log(dot.getBoundingClientRect().left, dot.getBoundingClientRect().top)
      const eyeblack = document.getElementsByClassName(`eye-${index + 1}`)[0];
      let {left, top} = dot.getBoundingClientRect();
      left += document.documentElement.scrollLeft;
      top += document.documentElement.scrollTop;
      console.log(left, top);
      eye.style.transform = `rotate(${rot}deg)`;
      eyeblack.style.transform = `translate(${left - 25}px, ${top - 30}px)`
    });
  }

  document.querySelector('body').addEventListener('mousemove', eyeball);
  
  window.onload = () => {
    calEyeBall(0,0);
  }

  window.onresize = () => {
    calEyeBall(0,0);
  }

  return (
    <Fragment>
      <div className='global-bg'>
        <div className='content'>
          <img className='bg-test' src={Bg} alt=""/>
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
            <img className='eye eye-1' src={Eye} alt=""/>
            <img className='eye-w eye-w-2' src={LeftW} alt=""/>
            <div className='eye-dot dot-2'>
              <div className='dot'></div>
            </div>
            <img className='eye eye-2' src={Eye} alt=""/>
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
