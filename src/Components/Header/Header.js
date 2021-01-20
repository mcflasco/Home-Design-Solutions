import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import marbleCounter from '../../assets/images/marble-counter.jpg';
import backgroundImage from '../../assets/images/background.jpg';
import Navigation from '../../Containers/Navigation/Navigation'; 


const navbar = () => {
    return (
        <div className="header">
            <header>
                <nav>  
                  <Navigation />
                </nav>
                {<img className="header-image" src={backgroundImage}></img>}
                {/* <img className="header-image" src={marbleCounter}></img> */}
                <div className="top">
                <h1 className="logo">Home Design Solutions</h1>
                </div>
            </header>


        </div>

    )
}
export default navbar;