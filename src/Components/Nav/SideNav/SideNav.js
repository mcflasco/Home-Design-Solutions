import React from 'react';
import NavItem from '../NavItem/NavItem';

const sideNav = (props) =>{
    return(
            <div className={props.class}>
                <ul className="sideDrawer">
                    <NavItem class="side" link="/">Home</NavItem>
                    {/* <NavItem class="side" link="/">About</NavItem> */}
                    <NavItem class="side" link="/brands">Brands</NavItem>
                    <NavItem class="side" link="/contact">Contact</NavItem>
                    <NavItem class="side" link="/faq">FAQ</NavItem>

                </ul>
            </div>
        
    )
}
export default sideNav;