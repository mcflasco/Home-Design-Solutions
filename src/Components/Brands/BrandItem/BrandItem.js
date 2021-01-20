import React from 'react';

const brandItem = (props) => {
    return(

        <h4 className="brand-title"><a href={props.link} target="_blank">{props.children} </a></h4>
        
    )
}

export default brandItem;
