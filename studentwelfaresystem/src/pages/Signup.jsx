import React, { useState } from "react";
import PGApiService from "../services/PGApiService";
import "../assets/Signup.scss";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const Signup = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    contact: "",
    userRole: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  {
    /* handle change */
  }
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  {
    /* reseting the form */
  }
  const resetData = () => {
    setData({
      fullName: "",
      email: "",
      password: "",
      contact: "",
      userRole: "",
    });
  };

  {
    /* submit the form */
  }
  // const submitForm = (event) => {
  //   event.preventDefault();
  //   //data validate

  //   //call server api for sending data
  //   signUp(data)
  //     .then((resp) => {
  //       console.log(resp);
  //       console.log("success log");
  //       toast.success("User is registered successfully !! user id " + resp.id);
  //       setData({
  //         fullName: "",
  //         email: "",
  //         password: "",
  //         contact: "",
  //         userRole: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("Error log");
  //       //handle errors in proper way
  //       setError({
  //         errors: error,
  //         isError: true,
  //       });
  //     });
  // };

  const addData = (event) => {
    event.preventDefault();
    if (
      data.fullName === "" ||
      data.email === "" ||
      data.password === "" ||
      data.contact === "" ||
      data.userRole === ""
    ) {
      toast.error("Plase enter valid data.."); //{ position: toast.POSITION.CENTER_LEFT });
      return;
    }
    let registerData1 = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      contact: data.contact,
      userRole: data.userRole,
    };
    PGApiService.addUser(registerData1)
      .then((result) => {
        console.log(result);
        toast.success(
          "Registration successful..!"
        );
        setData({
          fullName: "",
          email: "",
          password: "",
          contact: "",
          userRole: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        toast.error("Error 400/500..");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <div>
      <Container>
        <Row className="mt-4 mb-4">
          {/* { JSON.stringify(data) } */}

          <Col sm={{ size: 6, offset: 3 }}>
            <Card className="shadow">
              <CardHeader>
                <h3> Fill Information to Register !!</h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form action="/">
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name">Enter name</Label>
                    <Input
                      type="text"
                      placeholder="Enter name"
                      id="name"
                      name="fullName"
                      onChange={(e) => handleChange(e, "fullName")}
                      value={data.fullName}
                      invalid={
                        error.errors?.response?.data?.fullName ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.fullName}
                    </FormFeedback>
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      id="email"
                      name="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                      invalid={
                        error.errors?.response?.data?.email ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.email}
                    </FormFeedback>
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      name="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>

                  {/* contact field */}
                  <FormGroup>
                    <Label for="contact">Enter phone</Label>
                    <Input
                      type="number"
                      placeholder="Enter here"
                      id="contact"
                      name="contact"
                      onChange={(e) => handleChange(e, "contact")}
                      value={data.contact}
                      invalid={
                        error.errors?.response?.data?.contact ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.contact}
                    </FormFeedback>
                  </FormGroup>

                  {/* user role field */}
                  <FormGroup>
                    <Container className="text-center">
                    <Label for="userRole">Select role</Label>&nbsp;&nbsp;
                      <Input
                        type="radio"
                        placeholder="Enter here"
                        id="admin"
                        name="userRole"
                        // onChange={(e) => handleChange(e, "userRole")}
                        onChange={(e) => handleChange(e, "userRole")}
                        value="ADMIN"
                        invalid={
                          error.errors?.response?.data?.userRole ? true : false
                        }
                      />
                      &nbsp;&nbsp; Admin &nbsp;&nbsp;
                      <Input
                        type="radio"
                        placeholder="Enter here"
                        id="user"
                        name="userRole"
                        onChange={(e) => handleChange(e, "userRole")}
                        value="USER"
                        invalid={
                          error.errors?.response?.data?.userRole ? true : false
                        }
                      />
                      &nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;
                    </Container>
                    <FormFeedback>
                      {error.errors?.response?.data?.userRole}
                    </FormFeedback>
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="outline-success" onClick={addData}>
                      Register
                    </Button>
                    <Button
                      onClick={resetData}
                      color="outline-danger"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Signup;
