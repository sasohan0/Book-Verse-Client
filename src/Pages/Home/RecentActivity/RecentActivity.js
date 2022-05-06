import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const RecentActivity = () => {
  return (
    <div>
      <h1 className="text-center mt-5">RECENT ACTIVITIES</h1>
      <div className="d-flex justify-content-around mt-5">
        <Card
          className="col col-12 col-lg-4 border-success"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Added books</Card.Title>
            <Card.Text>1000+ books added</Card.Text>
            <Link className="btn btn-success" as={Link} to="/addItem">
              Add more
            </Link>
          </Card.Body>
        </Card>
        <Card
          className="col col-12 col-lg-4 border-danger"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Pre-ordered books</Card.Title>
            <Card.Text>6000+ books pre-ordered</Card.Text>
            <button as={Link} to="/inventory" className="btn btn-danger">
              Manage books
            </button>
          </Card.Body>
        </Card>
        <Card
          className="col col-12 col-lg-4 border-warning"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>Delivered books</Card.Title>
            <Card.Text>5000+ books delivered</Card.Text>
            <button as={Link} to="/userItems" className="btn btn-warning">
              My Items
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default RecentActivity;
