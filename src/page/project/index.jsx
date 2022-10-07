import './index.css';
import {
  useNavigate,
} from "react-router-dom";
import { useEffect,useState } from 'react';
import Footer from '../../compontents/footer';
export default function Project() {
    const navigate = useNavigate();
    const [projectConfig, setProjectConfig] = useState({});
    const locationProject = (projectMd) => {
      navigate(`/ProjectDetail?path=${projectMd}`)
    }

    const loadProjectConfig = () => {
      fetch('https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/project-config/project-config.json').then(res => {
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
      <div>
        <div className='project-content'>
          {
            config ?
            config.map((item, i) => {
              return <div className="project-container" key={`container-${i}`}>
                <h1>{item.areaName}</h1>
                <div className="project-instance-list">
                  {
                     item.instanceList.map((ins, j) => {
                      return <div className="project-item" key={`item-${j}`} onClick={e => locationProject(ins.projectMd)}>
                        <div className='project-pic'>
                          <img src={ins.projectPic} alt="" />
                        </div>
                        {
                          ins.projectDesc.map((dec, k) => {
                            return <p className='project-dec' key={`dec-${k}`}>{dec}</p>
                          })
                        }
                      </div>
                    })
                  }
                </div>
              </div>
            })
            :
            null
          }
        </div>
        <Footer/>
      </div>
    );
  }