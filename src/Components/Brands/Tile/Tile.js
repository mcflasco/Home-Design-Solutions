import React from 'react';
import BrandItem from '../BrandItem/BrandItem';
import { Link } from 'react-router-dom';



const tile = (props) => {
    return (
        <div>
            <h1 className="title">Countertops and Tile</h1>
            <div className="">
                <div className="brand-container">
                    <h2 className="tile-header">Laminate</h2>
                    <div className="tile-container">
                        <BrandItem link="https://www.formica.com/en-us/?CheckCookie=1">Formica</BrandItem>
                        <BrandItem link="https://panolam.com/nevamar/">Nevamar</BrandItem>
                        <BrandItem link="https://panolam.com/pionite/">Pionite</BrandItem>
                        <BrandItem link="https://www.wilsonart.com/">Wilsonart</BrandItem>

                    </div>
                </div>

                <div className="brand-container">
                    <h2 className="tile-header">Stone</h2>
                    <div className="tile-container">
                        <BrandItem link="https://www.silestone.com/">Cosentino</BrandItem>
                        <BrandItem link="http://www.dupont.com/zodiaq/a/en/h/Home/index.html">Cosentino</BrandItem>
                        <BrandItem link="http://greenmountainsoapstone.com/">Green Mountain Soapstone</BrandItem>
                        <BrandItem link="https://burlingtonstone.co.uk/">Burlington Stone</BrandItem>
                    </div>
                </div>

                <div className="brand-container">
                    <h2 className="tile-header">Concreate</h2>
                    <div className="tile-container">
                        <BrandItem link="https://www.coolconcretecreations.com/">Cool Concrete Solutions</BrandItem>
                        <BrandItem link="http://www.chengdesign.com/">Cheng Design</BrandItem>
                        <BrandItem link="http://www.congoleum.com/">Congoleum</BrandItem>
                        <BrandItem link="">Dremcoat Flooring</BrandItem>
                    </div>
                </div>

                <div className="brand-container">
                    <h2 className="tile-header">Tile</h2>
                    <div className="tile-container">
                        <BrandItem link="https://americanolean.com/index.cfm">American Olean</BrandItem>
                        <BrandItem link="https://eprotile.com/">Epro</BrandItem>
                        <BrandItem link="https://www.floridatile.com/">Florida Tile</BrandItem>
                        <BrandItem link="https://www.tilesdordini.com/">Dordini Italian Tile</BrandItem>
                    </div>
                </div> 
            </div>
            <Link to="/brands"><p className="brand-button">Return to Brands</p></Link>
        </div>
    )
}

export default tile;