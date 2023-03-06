import React, { useState } from 'react';
import '../assets/PropertyListing.scss';
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import FilterProperty from './FilterProperty';
import Amenities from './Amenities';

const ViewProperty = () => {
    const [properties, setProperties] = useState([
        {
            name: '2 BHK Apartment',
            address: '123 Main St',
            image: room1,
            price: 15000,
            size: '1200 sqft',
            bathrooms: 2,
            bedrooms: 2,
        },
        {
            name: '1 BHK Apartment',
            address: '456 Elm St',
            image: room2,
            price: 10000,
            size: '800 sqft',
            bathrooms: 1,
            bedrooms: 1,
        },
        {
            name: '2 BHK Apartment',
            address: '123 Main St',
            image: room1,
            price: 15000,
            size: '1200 sqft',
            bathrooms: 2,
            bedrooms: 2,
        },
        {
            name: '2 BHK Apartment',
            address: '123 Main St',
            image: room1,
            price: 15000,
            size: '1200 sqft',
            bathrooms: 2,
            bedrooms: 2,
        }
        // add more properties as needed
    ]);

    return (
        <div>
            <div>
                <FilterProperty />
            </div>
            <div className="property-listing">
                {properties.map((property) => (
                    <PropertyCard key={property.name} {...property} />
                ))}
            </div>
        </div>

    );
};

const PropertyCard = ({ name, address, image, price, size, bathrooms, bedrooms }) => {
    return (
        <div className="property-card">
            <img src={image} alt={name} />
            <div className="property-details">
                <h3 className="property-name">{name}</h3>
                <p className="property-address">{address}</p>
                <p className="property-price">{price}/month</p>
                <div className="property-info">
                    <p>{size}</p>
                    <p>{bathrooms} Bathrooms</p>
                    <p>{bedrooms} Bedrooms</p>
                </div>
            </div>
            <Amenities/>
        </div>
    );
};

export default ViewProperty;
