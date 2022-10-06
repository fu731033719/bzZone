import './index.css';
import pg1 from '../../asset/project-cover/1.png';
import pg2 from '../../asset/project-cover/2.png';
import pg3 from '../../asset/project-cover/3.png';
import pg4 from '../../asset/project-cover/4.png';
import pg5 from '../../asset/project-cover/5.png';
import pg6 from '../../asset/project-cover/6.png';
import pg7 from '../../asset/project-cover/7.png';
import pg8 from '../../asset/project-cover/8.png';
import pg9 from '../../asset/project-cover/9.png';
import pg10 from '../../asset/project-cover/10.png';


export default function Project() {
    return (
      <div>
        <div className='project-content'>

          <div className="project-container">
            <h1>COMMERCIAL PROJECT</h1>
            <div className="project-instance-list">
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg1} alt="" />
                </div>
                <p className='project-dec'>平台营销案例设计-奥运季 Pinduoduo</p>
              </div>
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg2} alt="" />
                </div>
                <p className='project-dec'>首页ICON  动效总结</p>
              </div>
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg3} alt="" />
                </div>
                <p className='project-dec'>品牌初创   RAVENSKILL</p>
              </div>
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg4} alt="" />
                </div>
                <p className='project-dec'>插画人物体系  KUJIALE</p>
              </div>
            </div>
          </div>

          <div className="project-container">
            <h1>CREATIVE  PROJECT</h1>
            <div className="project-instance-list">
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg5} alt="" />
                </div>
                <p className='project-dec'>颅内派对 FREE PARTY<br/>互动角色游戏数字藏品 2022</p>
              </div>
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg6} alt="" />
                </div>
                <p className='project-dec'>TOUGE<br/>二维动画2021</p>
              </div>
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg7} alt="" />
                </div>
                <p className='project-dec'>循环世界 MOBIUS<br/>系列插画2018</p>
              </div>
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg8} alt="" />
                </div>
                <p className='project-dec'>FREE WILL<br/>手绘插画 2018</p>
              </div>
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg9} alt="" />
                </div>
                <p className='project-dec'>ESCAPE 2020<br/>系列插画2020</p>
              </div>
            </div>
          </div>

          <div className="project-container">
            <h1>EVENT</h1>
            <div className="project-instance-list">
              <div className="project-item">
                <div className='project-pic'>
                  <img src={pg10} alt="" />
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