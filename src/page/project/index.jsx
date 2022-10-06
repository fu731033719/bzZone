import './index.css';
import {
  useNavigate,
} from "react-router-dom";

export default function Project() {
    const navigate = useNavigate();
    const locationProject = (index) => {
      navigate(`/ProjectDetail?index=${index}`)
    }

    return (
      <div>
        <div className='project-content'>

          <div className="project-container">
            <h1>COMMERCIAL PROJECT</h1>
            <div className="project-instance-list">
              <div className="project-item" onClick={e => locationProject(1)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F1.png" alt="" />
                </div>
                <p className='project-dec'>平台营销案例设计-奥运季 Pinduoduo</p>
              </div>
              <div className="project-item" onClick={e => locationProject(2)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F2.png" alt="" />
                </div>
                <p className='project-dec'>首页ICON  动效总结</p>
              </div>
              <div className="project-item" onClick={e => locationProject(3)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F3.png" alt="" />
                </div>
                <p className='project-dec'>品牌初创   RAVENSKILL</p>
              </div>
              <div className="project-item" onClick={e => locationProject(4)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F4.png" alt="" />
                </div>
                <p className='project-dec'>插画人物体系  KUJIALE</p>
              </div>
            </div>
          </div>

          <div className="project-container">
            <h1>CREATIVE  PROJECT</h1>
            <div className="project-instance-list">
              <div className="project-item" onClick={e => locationProject(5)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F5.png" alt="" />
                </div>
                <p className='project-dec'>颅内派对 FREE PARTY<br/>互动角色游戏数字藏品 2022</p>
              </div>
              <div className="project-item" onClick={e => locationProject(6)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F6.png" alt="" />
                </div>
                <p className='project-dec'>TOUGE<br/>二维动画2021</p>
              </div>
              <div className="project-item" onClick={e => locationProject(7)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F7.png" alt="" />
                </div>
                <p className='project-dec'>循环世界 MOBIUS<br/>系列插画2018</p>
              </div>
              <div className="project-item" onClick={e => locationProject(8)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F8.png" alt="" />
                </div>
                <p className='project-dec'>FREE WILL<br/>手绘插画 2018</p>
              </div>
              <div className="project-item" onClick={e => locationProject(9)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F9.png" alt="" />
                </div>
                <p className='project-dec'>ESCAPE 2020<br/>系列插画2020</p>
              </div>
            </div>
          </div>

          <div className="project-container">
            <h1>EVENT</h1>
            <div className="project-instance-list">
              <div className="project-item" onClick={e => locationProject(10)}>
                <div className='project-pic'>
                  <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fproject-cover%2F10.png" alt="" />
                </div>
                <p className='project-dec'>象堡没有堡 2021</p>
                <p className='project-dec'>TEDxhangzhou*UAL  艺术展览&插画沙龙</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }