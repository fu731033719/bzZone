import './App.css';
import { Fragment, useState, useEffect } from 'react';
import {
  useNavigate,
} from "react-router-dom";
import Footer from './compontents/footer';
function App() {
  const navigate = useNavigate();

  const [projectConfig, setProjectConfig] = useState({});

  const locationProject = () => {
    navigate('/Project')
  }

  const locationProjectDetail = (projectMd, type, index) => {
    navigate(`/ProjectDetail?path=${projectMd}&projectType=${type}&projectIndex=${index}`);
  }

  const loadProjectConfig = () => {
    fetch('https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/project-config/home-config.json').then(res => {
      if(res.ok) {
        return res.json(); 
      } else {
          throw new Error('ProjectLoadError:',res.statusText);
      }
    })
    .then((data) => setProjectConfig(data));
  }

  useEffect(() => {
    loadProjectConfig();
  }, []);

  const { config } = projectConfig;

  return (
    <Fragment>
      <div className='project-list'>
        <div className='list-title'>PROJECT</div>
        <div className='list-content home-list-content'>
          <div className="project-instance-list">
            {
              config ? config.map((item, i) => {
                return <div className="project-item" onClick={e => locationProjectDetail(item.projectMd, item.projectDesc[0], item.index)}>
                <div className='project-pic'>
                  <div className="project-pic-mask">
                    <p>{item.cover.title}</p>
                    <p>{`{${item.cover.tag}}`}</p>
                  </div>
                  <img src={item.projectPic} alt="" />
                </div>
                {item.projectDesc.map(desc => <p className='project-dec'>{desc}</p>)}
                <div className='project-tag-list'>
                  {item.projectTag.map(tag => <p className="project-tag">{tag}</p>)}
                </div>
              </div>
              }) : null
            }
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
