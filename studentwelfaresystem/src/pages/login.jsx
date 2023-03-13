import { useState } from "react";
import { toast } from "react-toastify";
import {
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";
import { doLogin } from "./auth";
import { useNavigate } from "react-router-dom";
import userContext from "./context/userContext";
import { useContext } from "react";
import PGApiService from "../services/PGApiService";
import swal from "sweetalert";
import axios from 'axios'

const Login = () => {
  const userContxtData = useContext(userContext);

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      email: "",
      password: "",
    });
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(loginDetail);
  //   //validation
  //   if (loginDetail.email.trim() == "" || loginDetail.password.trim() == "") {
  //     toast.error("Username or Password  is required !!");
  //     return;
  //   }

  //   //submit the data to server to generate token
  //   PGApiService.loginUser(loginDetail)
  //     .then((data) => {
  //       console.log(data);
  //       //save the data to localstorage
  //       doLogin(data, () => {
  //         console.log("login detail is saved to localstorage");
  //         //redirect to user dashboard page
  //         userContxtData.setUser({
  //           data: data.user,
  //           login: true,
  //         });
  //         navigate("/");
  //       });
  //       toast.success("Login Success");
  //       setLoginDetail({
  //         email: "",
  //         password: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error.response.status == 400 || error.response.status == 404) {
  //         toast.error(error.response.data.message);
  //       } else {
  //         toast.error("Something went wrong on sever !!");
  //       }
  //     });
  // };

  function checkPasswordComplexity(pwd) {

    var regularExpression = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    var valid = regularExpression.test(pwd);
    return valid;
}

  function valid(loginDetail) {

    // if (data.password.length < 7) {
    //     toast.error("password must be more than 7 letters ");
    if (loginDetail.password.length < 6 && loginDetail.password.length > 10) {
        toast.error("password must be of 6 letters and maximum 10 letters  ");
    }
    else if (!checkPasswordComplexity(loginDetail.password)) {
        toast.error("password must be alphanumeric");
    }
    else {
        return true;
    }
}

  async function handleLogin(event) {
    event.preventDefault();
    // console.log(loginDetail)
    try {
        if (true) {
            const response = "";
            axios.post('http://localhost:8080/users/signIn', loginDetail).then((response) => {

                if (response.loginDetail != undefined && response.loginDetail != "") {
                    const result = response.loginDetail
                    console.log(result)

                    //window.localStorage.setItem('user', JSON.stringify(response.data));
                    sessionStorage["role"] = result.role;
                    sessionStorage["email"] = result.email;
                    sessionStorage["name"] = result.name;
                    
                        if (response.data.role == "USER") {
                            console.log(response.data);
                            swal("Success", "USER Logged In Successfully\n Customer Username : " + response.data.email + "", "success");
                            navigate('/')
                            window.location.reload();
                            
                        } else if (response.data.role == "ADMIN") {
                            console.log(response.data);
                            swal("Success", "Admin Logged In Successfully\n Admin Username : " + response.data.email + "", "success");
                            navigate('/')
                            window.location.reload();
                        }    
                } else {
                    toast.error('Invalid credentials');    
                }
            }).catch((error)=>{
                console.log("invalid")
                toast.error("Invalid credentials!!")
            })
        }
    } catch (error) {
        console.log(error);
    }
    
}
  return (
    <div>
      <Container>
        <Row className="mt-4 mb-4">
          <Col
            sm={{
              size: 4,
              offset: 4,
            }}
          >
            <Card className="shadow">
              <CardHeader className="text-center">
                <h3>Login Here !!</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleLogin}>
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter email</Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      value={loginDetail.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </FormGroup>

                  {/* password field */}

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="outline-success">Login</Button>
                    <Button
                      onClick={handleReset}
                      className="ms-2"
                      color="outline-danger"
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

export default Login;
