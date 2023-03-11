import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function login() {
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={{size:6,offset:3}}>
          <Card>
            <CardHeader className="text-center">
            <h3>Welcome to PG World..!</h3>
            </CardHeader>
            <CardBody>
              <Form autoComplete ="off">
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  invalid={false}
                  autoFocus
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  invalid={false}
                  />
                </FormGroup>
                <Container className="text-center">
                  <Button color="outline-success">Submit</Button>
                  <Button color="outline-danger" className="ms-2">Reset</Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
