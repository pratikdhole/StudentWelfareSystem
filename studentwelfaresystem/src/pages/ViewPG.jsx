import React, { useState } from "react";
import "../assets/ViewPG.scss";
import room1 from "../images/room1.jpg";
import room2 from "../images/room2.jpg";
import washingmachine from "../images/washingmachine.png";
import wifi from "../images/wifi.png";
import waterfilter from "../images/waterfilter.png";
import furniture from "../images/furniture.png";
import { Button, Card, Container } from "reactstrap";

import { Button, Card, Container } from "reactstrap";



const ViewPG = () => {
  const [properties, setProperties] = useState([
    {
      name: "Atharv PG",
      address: "Pashan, Pune",
      image: room1
<<<<<<< HEAD
    }
=======
    },
    {
      image: room2,
      price: 15000,
      size: "1200 sqft",
      bathrooms: 2,
      bedrooms: 2,
    },

>>>>>>> main
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
<<<<<<< HEAD
    <div className="row">
      {/* <div className="col-md-2 filter-container bg-dark justify-content-center">
        filter
      </div> */}
      <div className="col-md-10 property-listing">
=======
    <div className="d-flex container mb-5">

      {/* <div className="col-md-2 filter-container bg-dark justify-content-center">
        filter
      </div> */}

      <div className="col-md-3 filter-container mt-3 justify-content-center">
        filter
      </div>

      <div className="col-md-9 property-listing">
>>>>>>> main
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
<<<<<<< HEAD
  image
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
=======
  image,
  price,
  size,
  bathrooms,
  bedrooms,

}) => {
  return (
    <div>
      <div className="col-md-10 view-pg-section shadow-defaultCardShadow mt-3">
        <div className="pg-name">
          <h2>3 BHK Flat  In Gangotri Grandeur, For Sale  In Kormanagla</h2>
          <h4>4th block 8th A main</h4>
        </div>
        <div className="pg-amount border-cardbordercolor d-flex ">
          <div className="col-md-4 text-center">
            <div className="font-semi-bold fontsme">
              2.5 Crores
            </div>
            <div className="dpname">
              Deposit
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="font-semi-bold fontsme">
              Shared
            </div>
            <div className="dpname">
              Room Type Available
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="font-semi-bold fontsme">
              ₹3,500
            </div>
            <div className="dpname">
              Rent/Month
            </div>
          </div>
        </div>
        <div className="pg-details-section d-flex p-3">

          <div className="photo-section">
            <img src={image} />
          </div>
          <div className="dis-img">
            <div className="dis-img-section">
              <div className="discrption-flow">
                <div class="py-0 pr-0.5p pl-3p bg-left">

                </div>
                <div class="flex"><div><div class="font-semibold">Any</div>
                  <div class="">
                    <div class="heading-7 text-default-color mt-0.5p">Preferred Tenants</div>
                  </div>
                </div>
                </div>
              </div>
              <div className="discrption-flow">
                <div class="py-0 pr-0.5p pl-3p bg-left">

                </div>
                <div class="flex"><div><div class="font-semibold">Any</div>
                  <div class="">
                    <div class="heading-7 text-default-color mt-0.5p">Preferred Tenants</div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
</div>
   </div>
   </div>
>>>>>>> main
  );
};

export default ViewPG;
