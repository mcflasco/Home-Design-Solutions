import React from 'react';
import { Link } from 'react-router-dom';

const display = (props) =>(

    <figure className="display-cont">
        <Link to={props.link}><img src={props.image} className="about-image image-one"/></Link>
        <figcaption>{props.children}</figcaption>
    </figure>

)

export default display;