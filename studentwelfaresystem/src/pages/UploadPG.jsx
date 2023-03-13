import React from "react";
import "../assets/UploadPG.scss";
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
  FormText,
} from "reactstrap";

export default function UploadPG() {
  return (
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
              <h3>Post your PG Here !!</h3>
            </CardHeader>

            <CardBody className="d-flex">
              <Form>
                <FormGroup>
                  <Label for="pg_name">PG Name </Label>
                  <Input type="text" id="pg_name" name="pg_name" required />
                </FormGroup>

                <FormGroup>
                  <Label for="rent">Rent </Label>
                  <Input type="number" id="rent" name="rent" required />
                </FormGroup>

                <FormGroup>
                  <Container className="text-center">
                    <Label for="userRole">Select role</Label>&nbsp;&nbsp;
                    <Input
                      type="radio"
                      id="male"
                      name="userRole"
                      value="MALE"
                    />
                    &nbsp;&nbsp; Male &nbsp;&nbsp;
                    <Input
                      type="radio"
                      placeholder="Enter here"
                      id="female"
                      name="userRole"
                      value="FEMALE"
                    />
                    &nbsp;&nbsp;Female&nbsp;&nbsp;&nbsp;
                  </Container>
                </FormGroup>

                <FormGroup>
                  <Label for="room_vacancy">Room Vacancy </Label>
                  <Input
                    type="number"
                    id="room_vacancy"
                    name="room_vacancy"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Container className="text-center">
                    <Label for="room_sharing">Sharing type </Label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <select id="room_sharing" name="room_sharing">
                      <option value="single">Single Shared</option>
                      <option value="double">Double Shared</option>
                    </select>
                  </Container>
                </FormGroup>
                <FormGroup>
                  <Label for="about">Address</Label>
                  <Input
                    type="textarea"
                    id="address"
                    style={{ height: "70px" }}
                  />
                </FormGroup>
                <Label for="about">Amenities</Label>
                <Row>
                  <Col md={6}>
                    <FormGroup check>
                      <Label check>WiFi</Label>
                      <Input type="checkbox" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup check>
                      <Label check>Laundry</Label>
                      <Input type="checkbox" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup check>
                      <Label check>Furniture</Label>
                      <Input type="checkbox" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup check>
                      <Label check>Water Filter</Label>
                      <Input type="checkbox" />
                    </FormGroup>
                  </Col>
                </Row>
                <br />
                <FormGroup>
                  <Label for="exampleFile">Upload photo</Label>
                  <Input id="exampleFile" name="file" type="file" />
                  <FormText>Upload PG photos.</FormText>
                </FormGroup>
                

                <Container className="text-center">
                  <Button color="outline-success">Upload</Button>
                  <Button className="ms-2" color="outline-danger">
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
