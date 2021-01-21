import React from 'react';
import NavItem from '../NavItem/NavItem';

const navItems = (props) => {
    return(
        <nav>
           
            <ul className="nav-items">
                <p className="side-btn side-container" onClick={props.clicked}>Menu</p> 
                <NavItem onClick={props.clicked} class="nav-item left-nav nav-links" link="/">Home</NavItem>
                {/* <NavItem class="nav-item nav-links" link="/">About</NavItem> */}
                <NavItem class="nav-item nav-links" link="/brands">Brands</NavItem>
                <NavItem class="nav-item nav-links" link="/works">Portfolio</NavItem>
                <NavItem class="nav-item nav-links" link="/contact">Contact</NavItem>
                <NavItem class="nav-item right-nav nav-links" link="/faq">FAQ</NavItem>
            </ul>
        </nav>
    )
}

export default navItems;