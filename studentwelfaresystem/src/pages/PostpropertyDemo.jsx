import React, { useState } from "react";

const Postproperty = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Rent:", rent);
    console.log("Bedrooms:", bedrooms);
    console.log("Bathrooms:", bathrooms);
    console.log("Address:", address);
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Rent:
        <input
          type="number"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        />
      </label>
      <br />
      <label>
        Bedrooms:
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />
      </label>
      <br />
      <label>
        Bathrooms:
        <input
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Post Property</button>
    </form>
  );
};

export default Postproperty;
