import React from 'react';
import BrandItem from '../BrandItem/BrandItem';
import { Link } from 'react-router-dom';

const plumbing = (props) => {
    return (
        <div>
            <h1 className="title">Kitchen and Bath Plumbing</h1>
            <div className="brand-list">
                <div className="brand-row">
                    <BrandItem link="https://www.americanstandard-us.com/">American Standard Kitchen Faucets</BrandItem>
                    <BrandItem link="https://www.blanco.com/en_us/en_us/home.html">Blanco Kitchen Faucets</BrandItem>
                    <BrandItem link="https://www.deltafaucet.com/">Delta Faucets</BrandItem>
                    <BrandItem link="elkay.com/us/en.html">Elkay Kitchen Faucets</BrandItem>
                    <BrandItem link="https://www.grohe.us/en_us/">Grohe Kitchen Faucets</BrandItem>
                </div>

                <div className="brand-row">
                    <BrandItem link="https://www.hansgrohe.com/">Hansgrophe Kitchen Faucets</BrandItem>
                    <BrandItem link="https://www.herbeau.com/">Herbeau Kitchen Faucets</BrandItem>
                    <BrandItem link="https://www.us.kohler.com/us/">Kohler Kitchen Faucets</BrandItem>
                    <BrandItem link="https://www.moen.com/">Moen Kitchen Faucets</BrandItem>
                    <BrandItem link="https://www.pfisterfaucets.com/">Price Pfister Faucets</BrandItem>
                </div>
            </div>
            <Link to="/brands"><p className="brand-button">Return to Brands</p></Link>
        </div>
    )
}
export default plumbing;