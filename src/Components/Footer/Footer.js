import React from 'react';
import NavItem from '../Nav/NavItem/NavItem';


import { Link } from 'react-router-dom';

const footer = (props) => {
    return (
        <div>
            <footer>
                <div className="left-footer">
                    <h4 className="footer-logo">Home Design Solutions</h4>
                    <ul className="footer-nav">
                        <NavItem link="/" class="footer-item">Home</NavItem>
                        <span className="space-Links">|</span>
                        <NavItem link="/about" class="footer-item">About</NavItem>
                        <span className="space-Links">|</span>
                        <NavItem link="/brands" class="footer-item">Brands</NavItem>
                        <span className="space-Links">|</span>
                        <NavItem link="/contact" class="footer-item">Contact</NavItem>
                        <span className="space-Links">|</span>  
                        <NavItem link="/faq" class="footer-item">FAQ</NavItem>
                    </ul>
                    <p className="copyright">&#169; 2020 | All rights reserved | Home Design Solutions</p>
                </div>
                <div className="middle-footer">
                    <p>Address: 101 Sedalia Dr. Phoenix, AZ 85001</p>
                    <p>Phone: 602-KITCHEN Fax: 602-555-1212</p>
                    <p>Email: hds@gmail.com</p>
                </div>
                
                <div className="right-footer">
                    <h5>Stay Connected!</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius ipiscing elit, sed do eius</p>
                    <p className="icon">F-Icon</p>
                    <p className="icon">I-Icon</p>
                    <p className="icon">T-Icon</p>
                    
                </div>
            </footer>
           
        </div>
    )
}
export default footer;