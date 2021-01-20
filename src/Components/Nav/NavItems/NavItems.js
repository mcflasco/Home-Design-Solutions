import React from 'react';
import NavItem from '../NavItem/NavItem';

const navItems = (props) => {
    return(
        <nav>
           
            <ul className="nav-items">
                <p className="side-btn side-container" onClick={props.clicked}>Side Drawer</p> 
                <NavItem onClick={props.clicked} class="nav-item left-nav nav-links" link="/">Home</NavItem>
                <NavItem class="nav-item nav-links" link="/about">About</NavItem>
                <NavItem class="nav-item nav-links" link="/brands">Brands</NavItem>
                <NavItem class="nav-item nav-links" link="/works">Portfolio</NavItem>
                <NavItem class="nav-item right-nav nav-links" link="/contact">Contact</NavItem>
            </ul>
        </nav>
    )
}

export default navItems;