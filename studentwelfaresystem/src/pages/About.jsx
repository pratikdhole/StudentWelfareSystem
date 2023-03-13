import React from "react";
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import hostel from '../images/hostel.jpg'
import canteen from '../images/canteen.jpg'
import laundry from '../images/laundry.jpg'

function About() {
  return (
    <div>
      <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={hostel}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        About PG service
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Paying Guest rooms
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <Button>
        Explore more
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={canteen}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        About food service
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Food canteen
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
      Explore more
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={laundry}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        About laundary
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Wash your clothes
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </CardText>
      <Button>
      Explore more
      </Button>
    </CardBody>
  </Card>
</CardGroup>
    </div>
  );
}
export default About;
