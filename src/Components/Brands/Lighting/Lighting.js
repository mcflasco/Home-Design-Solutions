import React from 'react';
import BrandItem from '../BrandItem/BrandItem';
import { Link } from 'react-router-dom';

const lighting = (props) => {
    return (
        <div>
            <h1 className="title">Lighting</h1>
            <div className="brand-list">
                <div className="brand-row">
                    <BrandItem link="http://www.americanlighting.com/">American Lighting</BrandItem>
                    <BrandItem link="https://www.broan-nutone.com/">Broan</BrandItem>
                    <BrandItem link="https://www.framburg.com/">Framburg Lighting</BrandItem>
                    <BrandItem link="https://www.hunterfan.com/index2.php">Hunter Fans</BrandItem>
                    <BrandItem link="https://juno.acuitybrands.com/">Juno Lighting</BrandItem>
                </div>
                
                <div className="brand-row">
                    <BrandItem link="http://www.lightolier.com/">Kichler Lighting</BrandItem>
                    <BrandItem link="https://www.signify.com/en-us/brands/ledalite">Ledalite - Sonata</BrandItem>
                    <BrandItem link="https://www.signify.com/en-us/brands/lightolier">Lightolier</BrandItem>
                    <BrandItem link="https://www.hubbell.com/progresslighting/en/">Progress Lighting</BrandItem>
                    <BrandItem link="http://www.cwp1.com/">Task Lighting Corporation</BrandItem>       
                </div>
            </div>
            <Link to="/brands"><p className="brand-button">Return to Brands</p></Link>
        </div>
    )
}

export default lighting;