import React from 'react'
import { Link } from 'react-router-dom';
import marbleCounter from '../../assets/images/marble-counter.jpg';
import Slider from '../Slider/Slider';
import Navigation from '../../../Containers/Navigation/Navigation';




const Navbar = () => {
    return (
        <div className="header">
            <header>
                {/* <nav>  
                    <ul>
                        <span className="home"><li className="nav-item"><Link to="/" className="home-button">Home</Link></li></span>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                        <li className="nav-item"><Link to="/brands">Brands</Link></li>
                        <li className="nav-item"><Link to="/works">Portfolio</Link></li>
                        
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav> */}

                <Navigation />
                
                <div className="slides">
                        <img className="header-image" src={marbleCounter}></img>
                        {/* <Slider /> */}
                        <div className="logo"><p>Home Design Solutions</p></div>    
                     
                    </div>
                
            </header>


        </div>

    )
}
export default navbar;