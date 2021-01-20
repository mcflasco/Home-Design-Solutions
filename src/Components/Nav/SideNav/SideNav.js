import React from 'react';
import NavItem from '../NavItem/NavItem';

const sideNav = (props) =>{
    return(
            <div className={props.class}>
                <ul className="sideDrawer">
                    <NavItem class="side" link="/">Home</NavItem>
                    <NavItem class="side" link="/about">About</NavItem>
                    <NavItem class="side" link="/brands">Brands</NavItem>
                    <NavItem class="side" link="/contact">Contact</NavItem>

                </ul>
            </div>
        
    )
}
export default sideNav;