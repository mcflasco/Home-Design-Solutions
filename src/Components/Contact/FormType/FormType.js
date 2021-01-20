import React from 'react';

const formType = (props) => {
    return(
        <div>
            <label name={props.name} value={props.value} className="label"  for={props.name} >{props.children}</label><br  />
            <input className="input" type={props.type} name={props.name} onChange={props.validation} />
            <p className={props.class}>{props.error}</p>
        </div>
    )
}

export default formType;