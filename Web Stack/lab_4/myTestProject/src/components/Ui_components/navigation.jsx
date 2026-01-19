import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './navigation.css';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

return (
    <nav className="navbar" 
    
    >
        <div className="nav-header">
            <NavLink to="/home" className="site-title">
                DPE | BYC
            </NavLink>
            <button onClick={toggleLinks} className="nav-toggle" >
                ☰
            </button>
        </div>
        <div className={`nav-links ${showLinks ? 'show' : ''}`} >
            <ul>
                <li>
                    <NavLink to="/home" onClick={() => setShowLinks(false)} className="btn">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={() => setShowLinks(false)}>
                        About
                    </NavLink>  
                </li>
                <li>
                    <NavLink to="/events" onClick={() => setShowLinks(false)}>
                        Events
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);
};

export default Navbar;
