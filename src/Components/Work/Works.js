import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../Slider/Slider'



const works = (props) => {
    return (

        <div className="">

            <h1 className="title">Portfolio</h1>
            <div className=" project-content">
                <p className="project-description">HDS started as a remodeling effort by Emily and her husband Joe back in May 2007. They had
            contracted to do work for some family and friends that wanted to upgrade their existing homes
            (bathrooms and kitchens are their specialty). This included providing design work, and upgrades to
            kitchens and baths. Emily and Joe quickly determined that there was a tremendous need for this service
            in the greater Phoenix/Scottsdale, AZ area. They applied for a business license and opened Home
            Design Solutions as an LLC out of a small store location they rented at 101 Sedalia Drive, Phoenix, AZ
            85001. The first store location included some sample cabinets and appliances that they would later
            become regional distributors for. Both Joe and Emily became General Contractors in 2007 and all of
            their bath and kitchen design specialists that have been hired since have acquired kitchen and bath
            design certifications.</p>
                <div className="project-slides">
                    <Slider />
                </div>
            </div>
            {/*                 
                    <figure>
                   <Link to="/works/project"><img className="about-image image-one" src={kitchenRemodel} /></Link>
                    <figcaption>Design</figcaption>
                    </figure>
                    <figure>
                    <Link to=""><img className="about-image image-two" src={imageTwo}/></Link>
                    <figcaption>Upgrade</figcaption>
                    </figure>
                    <figure>
                    <img className="about-image image-three" src={imageThree}/>
                    <figcaption>With HDS</figcaption>
                    </figure> */}



        </div>
    )
}

export default works;