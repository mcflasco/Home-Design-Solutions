import React from 'react';

import imageOne from '../../assets/images/about-kitchen-1.jpeg'
import imageTwo from '../../assets/images/about-kitchen-2.jpg'
import imageThree from '../../assets/images/about-kitchen-3.jpg'

import Display from './Display/Display';



const about = (props) => {
    return (

        <div>
            <h3 className="title">About Us</h3>
            
            <p className="about-desc">HDS started as a remodeling effort by Emily and her husband Joe back in May 2007. They had
            contracted to do work for some family and friends that wanted to upgrade their existing homes
            (bathrooms and kitchens are their specialty). This included providing design work, and upgrades to
            kitchens and baths. Emily and Joe quickly determined that there was a tremendous need for this service
            in the greater Phoenix/Scottsdale, AZ area. They applied for a business license and opened Home
            Design Solutions as an LLC out of a small store location they rented at 101 Sedalia Drive, Phoenix, AZ
            85001. The first store location included some sample cabinets and appliances that they would later
            become regional distributors for. Both Joe and Emily became General Contractors in 2007 and all of
            their bath and kitchen design specialists that have been hired since have acquired kitchen and bath
            design certifications.
            </p>
            <div className="images content">

                <Display image={imageOne} link="/brands">Design</Display>
                <Display image={imageTwo} link="/works">Upgrade</Display>
                <Display image={imageThree} link="/contact">With HDS</Display>

            </div>

            
        </div>
    )
}

export default about;
