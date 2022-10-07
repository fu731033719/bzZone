import './App.css';
import { Fragment } from 'react';
import {
  useNavigate,
} from "react-router-dom";
import Footer from './compontents/footer';
function App() {
  const navigate = useNavigate();

  const locationProject = () => {
    navigate('/Project')
  }

  return (
    <Fragment>
      <div className='project-list'>
        <div className='list-title'>
          <img className='title-pic' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/home/PROJECT.png" alt=""/>
        </div>
        <div className='list-content'>
          <div className="project-instance-list">
            <div className="project-item" onClick={e => locationProject()}>
              <div className='project-pic'>
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/project-cover/1.png" alt="" />
              </div>
              <p className='project-dec'>平台营销案例设计-奥运季</p>
              <p className='project-dec'>Pinduoduo    2021</p>
            </div>
            <div className="project-item" onClick={e => locationProject()}>
              <div className='project-pic'>
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/project-cover/7.png" alt="" />
              </div>
              <p className='project-dec'>CREATIVE  PROJECT循环世界 MOBIUS</p>
              <p className='project-dec'>系列插画    2018</p>
            </div>
          </div>
        </div>
        <div className='more' onClick={e => locationProject()}>
          MORE
          <div className="bg-more"></div>
        </div>
      </div>
      <Footer/>
    </Fragment>
    
  );
}

export default App;
