import React from 'react';
import appliance from '../../assets/images/appliance-image.jpeg'
import cabinet from '../../assets/images/cabinet.jpg'
import lighting from '../../assets/images/lighting.jpg'
import countertop from '../../assets/images/countertops.jpg'
import plumbing from '../../assets/images/plumbing.jpeg'
import { Link } from 'react-router-dom';



const brands = (props) => {
    return (
        <div className="brands">
            <h3 className="title">Brands</h3>
            <div className="images content">
                    <figure className="display-cont">
                    <Link to="/brands/appliances"><img className="brand-image" src={appliance} /></Link>  
                    <figcaption>Appliances</figcaption>
                    </figure>
                    <figure className="display-cont">
                    <Link to="/brands/cabinets"><img className="brand-image brand-image-space" src={cabinet}/></Link>
                    <figcaption>Cabinets</figcaption>
                    </figure>
                    <figure className="display-cont">
                    <Link to="/brands/lighting"><img className="brand-image brand-image-space" src={lighting}/></Link>
                    <figcaption>Lighting</figcaption>
                    </figure>
                    <figure className="display-cont">
                    <Link to="/brands/plumbing"><img className="brand-image brand-image-space" src={plumbing}/></Link>
                    <figcaption>Kitchen & Bath Plumbing</figcaption>
                    </figure>
                    <figure className="display-cont">
                    <Link to="/brands/tile"><img className="brand-image brand-image-space" src={countertop}/></Link>
                    <figcaption>Kitchen & Bath Countertops & Floor Tile</figcaption>
                    </figure>
                </div>
            
        </div>

    )
}

export default brands;
