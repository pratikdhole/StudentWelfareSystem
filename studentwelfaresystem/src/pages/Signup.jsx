import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

export default function Signup() {
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Card className="shadow">
            <CardHeader className="text-center">
              <h3>Register here..!</h3>
            </CardHeader>
            <CardBody>
              <Form>
                {/* Name field */}
                <FormGroup>
                  <Label for="name">Enter fullname</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    invalid={false}
                    autoFocus
                  />
                  {/* <div>Name is required.</div> */}
                </FormGroup>
                {/* Email field */}
                <FormGroup>
                  <Label for="email">Enter email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    invalid={false}
                  />
                  {/* <div>Email is required.</div> */}
                </FormGroup>
                {/* Password field */}
                <FormGroup>
                  <Label for="password">Enter password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    invalid={false}
                  />
                  {/* <div>Password is required.</div> */}
                </FormGroup>
                {/* contact field */}
                <FormGroup>
                  <Label for="contact">Enter mobile number</Label>
                  <Input
                    type="tel"
                    id="contact"
                    placeholder="Enter mobile number"
                    invalid={false}
                  />
                  {/* <div>Mobile number is required.</div> */}
                </FormGroup>
                <Container className="text-center">
                  <Button color="outline-success">Register</Button>
                  <Button color="outline-danger" className="ms-2">
                    Reset
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
