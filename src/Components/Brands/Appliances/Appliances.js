import React from 'react';
import BrandItem from '../BrandItem/BrandItem'
import { Link } from 'react-router-dom';

const appliances = (props) => {
    return (
        <div>
            <h1 className="title">Appliances</h1>
            <div className="brand-list">
                <div className="brand-row">
                    <BrandItem link="https://www.askona.com/">Asko</BrandItem>
                    <BrandItem link="http://www.bestrangehoods.com/home.aspx">Best</BrandItem>
                    <BrandItem link="ttps://www.bosch-home.com/us/">Bosch</BrandItem>
                    <BrandItem link="https://www.broan-nutone.com/">Broan</BrandItem>
                    <BrandItem link="https://www.dacor.com/home">Dacor</BrandItem>
                    <BrandItem link="http://www.danby.com/products/">Dandy</BrandItem>
                    <BrandItem link="https://www.dcsappliances.com/us.html">DCS</BrandItem>
                </div>
                <div className="brand-row">
                    <BrandItem link="http://www.faberonline.com/">Faber</BrandItem>
                    <BrandItem link="http://www.faberonline.com/">Fisher & Paykel</BrandItem>
                    <BrandItem link="https://www.gaggenau.com/">Gaggenau</BrandItem>
                    <BrandItem link="https://insinkerator.emerson.com/en-us">Insinkerator</BrandItem>
                    <BrandItem link="https://www.jennair.com/ranges.html">Jenn Air</BrandItem>
                    <BrandItem link="http://www.marvelindustries.com/">Marvel</BrandItem>
                    <BrandItem link="https://www.miele.com/en/com/index.htm">Miele</BrandItem>
                </div>
                <div className="brand-row">
                    <BrandItem link="https://www.scotsman-ice.com/consumer.html">Scotsman</BrandItem>
                    <BrandItem link="https://www.subzero-wolf.com/planning-resources/brochure-request?PID=ppcawareness_subzero_2018:google:cpc:sz_brand_awareness:paidsearch">Sub-Zero</BrandItem>
                    <BrandItem link="https://www.thermador.com/us/">Thermador</BrandItem>
                    <BrandItem link="https://www.u-line.com/">U Line</BrandItem>
                    <BrandItem link="https://www.venmar.ca/">Venmar</BrandItem>
                    <BrandItem link="https://www.vikingrange.com/consumer/index.jsp">Viking</BrandItem>
                    <BrandItem link="https://www.subzero-wolf.com/wolf">Wolf</BrandItem>
                </div>
            </div>
            <Link to="/brands"><p className="brand-button">Return to Brands</p></Link>
        </div>
    )
}

export default appliances;