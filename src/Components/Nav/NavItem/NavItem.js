import React from 'react';
import { Link } from 'react-router-dom';

const navItem = (props) => {
    return(
            <li className={props.class}>
                <Link to={props.link}>{props.children}</Link>
            </li>
    )
}

export default navItem;