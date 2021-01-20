import React from 'react';
import Slider from '../../Slider/Slider';
import { Link } from 'react-router-dom';
import modernKitchen from '../../../assets/images/modernKitchen.jpg'

const HDS = (props) => {
    return (

        <div className='background'>
            <div className="container">
                <h2 className="heading">Renovation</h2>
                <p className="description">“The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.”
                <span className="qoute"> Charles Eames</span>
                </p>
            </div>
            
              <Link to="/contact"><img className="image image-right" src={modernKitchen} /></Link>
            



        </div>
    )
}
export default HDS;