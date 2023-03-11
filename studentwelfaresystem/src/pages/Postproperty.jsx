import React, { useReducer, useState } from "react";
import '../assets/Form.scss'
import '../assets/style.scss'
const Postproperty = () => {
    const [title, setTitle] = useState("");
    const [rent, setRent] = useState("");
    const [vacancy, setVacancy] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Title:", title);
        console.log("Rent:", rent);
        console.log("Vacancy:", vacancy);
        console.log("Category:", category);
        console.log("Type:", type);
        console.log("Address:", address);
    };

    return (
        <div className='mt-4 mb-4 d-flex align-items-center justify-content-center w-100'>
            <div className='container formstyle rounded'>
                <h2 className='mb-5'>Post your Paying Guest Details</h2>
                <div className="choiceproperty">
                </div>
                <form onSubmit={handleSubmit} className="row postproperty">
                    <div className='col-md-4 text-start mt-3 mb-3'>
                        <label htmlFor='title' className='form-label' >PG Name </label>
                        <input type="text" id="title" value={title} className='form-control'
                            onChange={(e) => setTitle(e.target.value)} placeholder='Enter PG name' required autoFocus />
                    </div>
                    <div className='col-md-4 text-start mt-3 mb-3'>
                        <label htmlFor='type' className='form-label' >Flat type </label>
                        <input type="text" id="type" value={type} className='form-control'
                            onChange={(e) => setType(e.target.value)} placeholder='1RK/2BHK/3BHK' required />
                    </div>
                    <div className='col-md-4 text-start mt-3 mb-3'>
                        <label htmlFor='vacancy' className='form-label' >Total vacancy </label>
                        <input type="number" id="vacancy" value={vacancy} className='form-control'
                            onChange={(e) => setVacancy(e.target.value)} placeholder='Enter vacancies' required />
                    </div>
                    <div className='col-md-4 text-start mt-3 mb-3'>
                        <label htmlFor='rent' className='form-label' >Rent/person </label>
                        <input type="number" id="rent" value={rent} className='form-control'
                            onChange={(e) => setRent(e.target.value)} placeholder='Enter rent/person' required />
                    </div>
                    <div className='col-md-4 text-start mt-3 mb-3'>
                        <label htmlFor='category' className='form-label' >PG Category </label>
                        <input type="text" id="category" value={category} className='form-control'
                            onChange={(e) => setCategory(e.target.value)} placeholder='Girls/Boys' required />
                    </div>
                    <div className='col-md-4 text-start mt-3 mb-3'>
                        <label htmlFor='address' className='form-label' >Location </label>
                        <input type="textarea" id="address" value={address} className='form-control'
                            onChange={(e) => setAddress(e.target.value)} placeholder='Location' required />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success mt-2 text-center">Post property</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Postproperty;
