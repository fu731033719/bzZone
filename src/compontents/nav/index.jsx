import './index.css';
import { NavLink } from "react-router-dom";
import {
    useLocation,
    useSearchParams
  } from "react-router-dom";
function Nav() {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const { pathname } = location;
    const projectType = searchParams.get("projectType");
    const projectIndex = searchParams.get("projectIndex");

    const isProjectDetail = pathname === '/ProjectDetail';
    return (
        <div className={isProjectDetail ? 'nav project-detail-nav' : 'nav'}>
            <div className='nav-left'>
                <div className="nav-logo">
                <img src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Favatar.png" alt="" />
                </div>
                {projectType ? <div className='nav-text'>{projectType}</div> : null}
                {projectIndex ? <div className='nav-text'>Project {projectIndex}</div> : null}
            </div>
            <div className='nav-list-container'>
                <div className='nav-list'>
                    <div className="nav-item">
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "#fff" : ""
                            };
                        }}
                        to={`/Home`}
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "#fff" : ""
                            };
                        }}
                        to={`/About`}
                        >
                            About
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink style={({ isActive }) => {
                            if (isProjectDetail) {
                                return {
                                    color: "#5A5A5A"
                                };
                            }
                            return {
                                color: isActive ? "#fff" : ""
                            };
                        }}
                        to={`/Project`}
                        >
                            Project
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink style={({ isActive }) => {
                            return {
                                color: isActive ? "#fff" : ""
                            };
                        }}
                        to={`/Collection`}
                        >
                            Collection
                        </NavLink>
                    </div>
                </div>
                <div className='nav-button-container'>
                    <div className="nav-line nav-line1"></div>
                    <div className="nav-line nav-line2"></div>
                    <div className="nav-line nav-line3"></div>    
                </div>
            </div>
            
        </div>
    );
}

export default Nav;