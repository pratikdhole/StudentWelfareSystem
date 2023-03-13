import React, { useState } from "react";
import PGApiService from '../services/PGApiService';
import '../assets/Signup.scss'
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  let [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
    userRole: ""
  });

  const changeHandle = (event) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  
  const addData = (event) => {
    event.preventDefault();
    if (
      registerData.fullName === "" ||
      registerData.email === "" ||
      registerData.password === "" ||
      registerData.contact === "" ||
      registerData.userRole === ""
    ) {
      // setMessage("Plase enter valid data..");
      toast.error("Plase enter valid data.."); //{ position: toast.POSITION.CENTER_LEFT });
      return;
    }
    let registerData1 = {
      fullName: registerData.fullName,
      email: registerData.email,
      password: registerData.password,
      contact: registerData.contact,
      userRole: registerData.userRole,
    };
    PGApiService.addUser(registerData1)
      .then((result) => {
        console.log(result);
        // setMessage("Registration successfull..");
        toast.success("Registration successfull..");
      })
      .catch((error) => {
        console.log(error);
        // setMessage("Error 400/500..");
        toast.error("Error 400/500..");
      });

    setRegisterData({
      fullName: "",
      email: "",
      password: "",
      contact: "",
      userRole: ""
    });
  };

  return (
    <div className="container my-5 mx-auto border-4 border-dark p-2">
      <div className="col-sm-6 offset-sm-3 border border-dark shadow p-3 rounded-2 register-bg">
        <ToastContainer></ToastContainer>
        <h3 className="m-3 text-danger">Registration Page</h3>
        <form>
          {/* <p className='register-message'>{message}</p> */}
          <div className="mb-2 mt-5">
            <label for="name" className="form-label font-weight-bold text-left">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              name="fullName"
              value={registerData.fullName}
              onChange={(e)=>changeHandle(e)}
            />
          </div>

          <div className="mb-2 mt-2">
            <label
              for="email"
              className="form-label font-weight-bold text-left"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              name="email"
              value={registerData.email}
              onChange={changeHandle}
            />
          </div>

          {/* <div className="mb-2 mt-2">
            <label for="text" className="form-label font-weight-bold text-left">
              Username
            </label>
            <input
              type="username"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              name="username"
              value={registerData.username}
              onChange={changeHandle}
            />
          </div> */}

          <div className="mb-2 mt-2">
            <label for="text" className="form-label font-weight-bold text-left">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              name="password"
              value={registerData.password}
              onChange={changeHandle}
            />
          </div>

          {/* <div className="mb-2 mt-2">
            <label
              for="address"
              className="form-label font-weight-bold text-left"
            >
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Address"
              name="address"
              value={registerData.address}
              onChange={changeHandle}
            />
          </div> */}

          <div className="mb-2 mt-2">
            <label
              for="contact"
              className="form-label font-weight-bold text-left"
            >
              Contact
            </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              placeholder="Enter Contact No"
              name="contact"
              value={registerData.contact}
              onChange={changeHandle}
            />
          </div>

          <div className="mb-2 mt-2">
            <label for="role" className="form-label font-weight-bold text-left">
              Role
            </label>
            <input
              type="text"
              className="form-control"
              id="role"
              placeholder="Enter Role"
              name="userRole"
              value={registerData.userRole}
              onChange={changeHandle}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary bg-danger p-2 px-5"
            onClick={addData}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
