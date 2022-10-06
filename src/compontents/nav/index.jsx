import './index.css';
import {useState} from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
    const [showNav, setShowNav] = useState(false);
    const openMenu = () => {
        setShowNav(!showNav);
    }
    return (
        <div className='nav'>
            <div className={showNav ? 'nav-list' : 'nav-list nav-list-hide'}>
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
                        return {
                            color: isActive ? "#fff" : ""
                        };
                    }}
                    to={`/Portfolio`}
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
            <div className={showNav ? 'nav-button-container nav-open' : 'nav-button-container'} onClick={openMenu}>
                <div className="nav-line nav-line1"></div>
                <div className="nav-line nav-line2"></div>
                <div className="nav-line nav-line3"></div>    
            </div>
        </div>
    );
}

export default Nav;