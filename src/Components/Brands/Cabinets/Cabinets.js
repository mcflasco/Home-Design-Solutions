import React from 'react';
import BrandItem from '../BrandItem/BrandItem';
import { Link } from 'react-router-dom';

const cabinets = (props) =>{
    return(

        <div>
            <h1 className="title">Cabinets</h1>
            {/* <img src={cabinet} className="cabinet-header-image" /> */}

           <div className="brand-list">
                <div className="brand-row">
                    <BrandItem link="https://americanwoodmark.com/">American Woodmark Corporation</BrandItem>
                    <BrandItem link="http://www.armstrong.com/">Armstrong Cabinet Products</BrandItem>
                    <BrandItem link="https://www.bosch-home.com/us/">Bass Cabinet Mfg., INC</BrandItem>
                    <BrandItem link="http://www.cornerstone-cabinetry.com/">Corner Stone Cabinetry</BrandItem>
                    <BrandItem link="http://www.cwp1.com/">Custom Wood Porducts, LLC</BrandItem>
                    
                    
                </div>
                <div className="brand-row">
                    <BrandItem link="http://www.evanscabinet.com/">Evans Cabinet Corp.</BrandItem>
                    <BrandItem link="http://www.fertigcabinet.com/">Fertig's Highland Collection, INC</BrandItem>
                    <BrandItem link="https://www.kraftmaid.com/">KraftMaid Cabinetry</BrandItem>
                    <BrandItem link="https://www.marshfurniture.com/">Marsh Furniture Company</BrandItem>
                    <BrandItem link="https://www.thomasvillecabinetry.com/">Thomasville Cabinetry</BrandItem>
                </div>
            </div>
            <Link to="/brands"><p className="brand-button">Return to Brands</p></Link>
        </div>
    )
}

export default cabinets;