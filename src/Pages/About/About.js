import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const About = () => {
  return (
    <div className="container mt-5">
      <Card className="mx-auto w-75">
        <Card.Img className="w-100" variant="top" src="about.jpg" />
        <Card.Body>
          <Card.Title>
            {" "}
            <small>created by</small> Solih Ahmad Sohan{" "}
          </Card.Title>
          <Card.Text>Web Developer</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            I am an ambitious web developer and dedicated to my work. Please
            check me on social media and portfolio.{" "}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-center">
          <Card.Link
            className="btn btn-primary border-secondary text-light"
            target="blank"
            href="https://www.facebook.com/solihahmad.sohan"
          >
            Facebook
          </Card.Link>
          <Card.Link
            className="btn btn-light border-primary text-primary"
            target="blank"
            href="https://www.linkedin.com/in/solih-ahmad-sohan-4600641a2/"
          >
            LinkedIn
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
