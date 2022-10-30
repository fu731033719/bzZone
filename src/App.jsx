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
        <div className='list-title'>PROJECT</div>
        <div className='list-content home-list-content'>
          <div className="project-instance-list">
            <div className="project-item" onClick={e => locationProject()}>
              <div className='project-pic'>
                <div className="project-pic-mask">
                  <p>运营设计</p>
                  <p>{`{多多奥运季}`}</p>
                </div>
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/project-cover/1.png" alt="" />
              </div>
              <p className='project-dec'>COMMERCIAL PROJECT</p>
              <p className='project-dec'>平台营销案例设计-奥运季</p>
              <div className='project-tag-list'>
                <p className="project-tag">Pinduoduo</p>
                <p className="project-tag">2021</p>
              </div>
            </div>
            <div className="project-item" onClick={e => locationProject()}>
              <div className='project-pic'>
                <div className="project-pic-mask">
                  <p>系列插画</p>
                  <p>{`{莫比乌斯MOBIUS}`}</p>
                </div>
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone/project-cover/7.png" alt="" />
              </div>
              <p className='project-dec'>CREATIVE  PROJECT</p>
              <p className='project-dec'>循环世界 MOBIUS</p>
              <div className='project-tag-list'>
                <p className="project-tag">系列插画</p>
                <p className="project-tag">2018</p>
              </div>
            </div>
            <div className="project-item" onClick={e => locationProject()}>
              <div className='project-pic'>
                <div className="project-pic-mask">
                  <p>ICON动效设计</p>
                  <p>{`{PDD金刚区动效整理与总结}`}</p>
                </div>
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F2.png" alt="" />
              </div>
              <p className='project-dec'>COMMERCIAL PROJECT</p>
              <p className='project-dec'>首页ICON动效整理与总结</p>
              <div className='project-tag-list'>
                <p className="project-tag">Pinduoduo</p>
                <p className="project-tag">2022</p>
              </div>
            </div>
            <div className="project-item" onClick={e => locationProject()}>
              <div className='project-pic'>
                <div className="project-pic-mask">
                  <p>潮流插画</p>
                  <p>{`{FREE WILL}`}</p>
                </div>
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F8.png" alt="" />
              </div>
              <p className='project-dec'>CREATIVE  PROJECT</p>
              <p className='project-dec'>FREE WILL</p>
              <div className='project-tag-list'>
                <p className="project-tag">系列插画</p>
                <p className="project-tag">2019</p>
              </div>
            </div>
            <div className="project-item" onClick={e => locationProject()}>
              <div className='project-pic'>
                <div className="project-pic-mask">
                  <p>品牌设计</p>
                  <p>{`{RAVENSKILL 品牌设计}`}</p>
                </div>
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F3.png" alt="" />
              </div>
              <p className='project-dec'>COMMERCIAL PROJECT</p>
              <p className='project-dec'>RAVENSKILL 品牌设计</p>
              <div className='project-tag-list'>
                <p className="project-tag">RAVENSKILL</p>
                <p className="project-tag">2018</p>
              </div>
            </div>
            <div className="project-item" onClick={e => locationProject()}>
              <div className='project-pic'>
                <div className="project-pic-mask">
                  <p>线下展览与活动</p>
                  <p>{`{TED*UAL象堡没有堡}`}</p>
                </div>
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F10.png" alt="" />
              </div>
              <p className='project-dec'>CREATIVE  PROJECT</p>
              <p className='project-dec'>象堡没有堡</p>
              <div className='project-tag-list'>
                <p className="project-tag">系列插画</p>
                <p className="project-tag">2021</p>
              </div>
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
