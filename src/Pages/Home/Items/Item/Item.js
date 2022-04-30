import React from "react";
import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, img, name, shortDescription, price, quantity, supplierName } =
    item;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col col-12 col-lg-3 col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{supplierName}</ListGroupItem>
          <ListGroupItem>${price}</ListGroupItem>
          <ListGroupItem>quantity: {quantity}</ListGroupItem>
        </ListGroup>

        <button
          onClick={() => handleNavigate(_id)}
          className="btn btn-warning w-100 "
        >
          {" "}
          update
        </button>
      </Card>
    </div>
  );
};

export default Item;
