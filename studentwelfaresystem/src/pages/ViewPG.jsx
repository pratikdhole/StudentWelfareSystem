import React, { useState } from "react";
import "../assets/ViewPG.scss";
import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import washingmachine from "../images/washingmachine.png";
import wifi from "../images/wifi.png";
import waterfilter from "../images/waterfilter.png";
import furniture from "../images/furniture.png";

import { Button, Card, Container } from "reactstrap";



const ViewPG = () => {
  const [properties, setProperties] = useState([
    {
      name: "Atharv PG",
      address: "Pashan, Pune",
      image: room1
    }

      image: room1,
      price: 15000,
      size: "1200 sqft",
      bathrooms: 2,
      bedrooms: 2,
    },

    // {
    //   name: "Flora PG",
    //   address: "Aundh, Pune",
    //   image: room2,
    //   price: 10000,
    //   size: "800 sqft",
    //   bathrooms: 1,
    //   bedrooms: 1,
    // },
    // {
    //   name: "Kalyani PG",
    //   address: "Panchvati, Pune",
    //   image: room1,
    //   price: 15000,
    //   size: "1200 sqft",
    //   bathrooms: 2,
    //   bedrooms: 2,
    // },
    // add more properties as needed
  ]);

  return (
    <div className="row">

      {/* <div className="col-md-2 filter-container bg-dark justify-content-center">
        filter
      </div> */}

      <div className="col-md-2 filter-container bg-dark justify-content-center">
        filter
      </div>

      <div className="col-md-10 property-listing">
        {properties.map((property) => (
          <PropertyCard key={property.name} {...property} />
        ))}
      </div>
    </div>
  );
};

const PropertyCard = ({
  name,
  address,

  image

  image,
  price,
  size,
  bathrooms,
  bedrooms,

}) => {
  return (
    <div className="col-md-8 view-pg">
      <div className="pg-name">

        <h2>Home Name</h2>
        <h4>Address</h4>
      </div>
      <div className="pg-details">
        <div className="row">
          <div className="col-md-4 p-1 border rounded">
            <div className="">Rent</div>
          </div>
          <div className="col-md-4 p-1 border rounded">
            <div className="">Sharing Type</div>
          </div>
          <div className="col-md-4 p-1 border rounded">
            <div className="">Gender</div>
          </div>
        </div>
      </div>
      <div className="pg-description">
        <div className="photo-gallery col-md-4">

        <h1>Home Name</h1>
        <h3>Address</h3>
      </div>
      <div className="pg-details">
        <div className="row">
          <div className="col-md-4">
            <div className="card">A</div>
          </div>
          <div className="col-md-4">
            <div className="card">A</div>
          </div>
          <div className="col-md-4">
            <div className="card">A</div>
          </div>
        </div>
      </div>
      <div className="pg-discrption">
        <div className="photo-gallry col-md-4">

          <div className="card">
            <img src={image} alt={name} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="amenities">
              <img src={wifi} width="10%" alt={wifi} />&nbsp;&nbsp;Wifi
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              | Yes</span>
            </div>
            <div className="amenities">
              <img src={washingmachine} width="10%" alt={washingmachine} /> Laundry
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Yes</span>
            </div>
            <div className="amenities">
              <img src={furniture} width="10%" alt={furniture} />&nbsp;Furniture
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Yes</span>
            </div>
            <div className="amenities">
              <img src={waterfilter} width="10%" alt={waterfilter} />&nbsp;&nbsp;Water Filter
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Yes</span>
            </div>
          </div>
            <Container className="text-center mb-2 py-2">
              <button type="button" class="btn btn-outline-secondary">Get Owner Details</button>
            </Container>
          {/* <div>
            <button type="button" class="btn btn-outline-info">Get Owner Details</button>
          </div> */}
        </div>
      </div>
      <div>
      </div>
    </div>

        <div className="col-md-8">
        <div className="row">
          <div className="col-md-6">A</div>
          <div className="col-md-6">A</div>
          <div className="col-md-6">A</div>
          <div className="col-md-6">A</div>
        </div>
        </div>
     
          </div>
          <div className="pg-owner-details">
          <p>test area</p>
        </div>
    </div>

    // <div className="col-md-5 property-card text-justify">
    //     <img src={image} alt={name} />
    //     <div className="property-details">
    //         <h1>{name}</h1>
    //         <h5>{address}</h5>
    //         <h4>Rs.{price}/month</h4>
    //     </div>
    //     <div className='property-amenities'>
    //         <div className='property-amenity-list-1'>
    //             <div className='amenity-box'>
    //                 Washing Machine
    //             <img src={washingmachine}/>
    //             </div>
    //             <div className='amenity-box'>Filter
    //             <img src={waterfilter}/></div>
    //         </div>
    //         <div className='property-amenity-list-1'>
    //             <div className='amenity-box'>Wifi
    //             <img src={wifi}/></div>
    //             <div className='amenity-box'>Furniture
    //             <img src={furniture} /></div>
    //         </div>
    //     </div>
    //     <div className='mr-md-3 contact-box'>
    //         <button type="submit" className="btn btn-success mt-2 ">Get contact details</button>
    //     </div>
    // </div>
  );
};

export default ViewPG;
