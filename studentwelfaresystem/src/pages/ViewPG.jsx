import React, { useState } from 'react';
import '../assets/ViewPG.scss';
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import washingmachine from '../images/washingmachine.png'
import wifi from '../images/wifi.png'
import waterfilter from '../images/waterfilter.png'
import furniture from '../images/furniture.png'

const ViewPG = () => {
    const [properties, setProperties] = useState([
        {
            name: 'Atharv PG',
            address: 'Pashan, Pune',
            image: room1,
            price: 15000,
            size: '1200 sqft',
            bathrooms: 2,
            bedrooms: 2,
        },
        {
            name: 'Flora PG',
            address: 'Aundh, Pune',
            image: room2,
            price: 10000,
            size: '800 sqft',
            bathrooms: 1,
            bedrooms: 1,
        },
        {
            name: 'Kalyani PG',
            address: 'Panchvati, Pune',
            image: room1,
            price: 15000,
            size: '1200 sqft',
            bathrooms: 2,
            bedrooms: 2,
        }
        // add more properties as needed
    ]);

    return (
        <div className='row'>
            <div className='col-md-2 filter-container bg-dark justify-content-center'>
                filter
            </div>
            <div className='col-md-10 property-listing'>
                {properties.map((property) => (
                    <PropertyCard key={property.name} {...property} />
                ))}
            </div>
        </div>

    );
};

const PropertyCard = ({ name, address, image, price, size, bathrooms, bedrooms }) => {
    return (
        <div className="property-card text-justify">
            <img src={image} alt={name} />
            <div className="property-details">
                <h1>{name}</h1>
                <h5>{address}</h5>
                <h4>Rs.{price}/month</h4>
            </div>
            <div className='property-amenities'>
                <div className='property-amenity-list-1'>
                    <div className='amenity-box'>Washing Machine
                    <img src={washingmachine}></img>
                    </div>
                    <div className='amenity-box'>Filter
                    <img src={waterfilter}></img></div>
                </div>
                <div className='property-amenity-list-1'>
                    <div className='amenity-box'>Wifi
                    <img src={wifi}></img></div>
                    <div className='amenity-box'>Furniture
                    <img src={furniture}></img></div>
                </div>
            </div>
            <div className='mr-md-3 contact-box'>
                <button type="submit" className="btn btn-success mt-2 ">Get contact details</button>
            </div>
        </div>
    );
};

export default ViewPG;