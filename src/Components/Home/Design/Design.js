import React from 'react';
import woodCabinets from '../../../assets/images/WoodCabinets.jpg';
import { Link } from 'react-router-dom';


const design = (props) => {
    return (
        <div className='background '>
            <div className="container">
                <h2 className="heading">Design</h2>
                <p className="description">
                “To design is much more than simply to assemble, to order, or even to edit: it is to add value and meaning, to illuminate, to simplify, to clarify, to modify, to dignify, to dramatize, to persuade, and perhaps even to amuse. To design is to transform prose into poetry.”
                <span className="qoute">Paul Rand</span>
                <button className="More-Info-BTN">More Info</button>
                </p>
                
            </div>
            <Link to="/about"><img className="image image-right" src={woodCabinets}/></Link>
                
        </div>
    )
}
export default design;