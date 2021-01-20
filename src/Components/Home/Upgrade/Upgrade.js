import React from 'react';
import { Link } from 'react-router-dom';
import redCabinet from '../../../assets/images/redCabinet.jpeg'



const upgrade = (props) => {
    return (
        <div className="upgrade">
            <div className="middle-section">
                <h2 className="upgrade-heading">Upgrade</h2>
                <p className="upgrade-description">“The goal of a designer is to listen, observe, understand, 
                sympathize, empathize, synthesize, and glean insights that enable him or her to ‘make the invisible visible."
                <span className="qoute">Hillman Curtis</span></p>
            </div>
            
                <Link to="/brands"><img className="image image-left" src={redCabinet} /></Link>
            
        </div>

    )
}

export default upgrade;