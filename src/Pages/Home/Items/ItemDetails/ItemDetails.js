import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  let { img, _id, name, price, quantity, shortDescription, supplierName } =
    itemDetail;
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItemDetail(data));
  }, [itemId]);
  const handleDelivered = async (itemDetail) => {
    console.log(quantity);
    if (quantity > 0) {
      let { quantity, ...rest } = itemDetail;
      quantity = (await quantity) - 1;

      const newItemDetail = { quantity, ...rest };
      console.log(newItemDetail);
      setItemDetail(newItemDetail);
    }
  };

  useEffect(() => {
    // fetch("https://blooming-wave-56097.herokuapp.com/inventory");
    fetch("http://localhost:5000/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemDetail),
    });
  }, [itemDetail]);

  return (
    <div className="container">
      <h1>details</h1>
      <Card className="mx-auto" style={{ width: "50%" }}>
        <Card.Img style={{ height: "650px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <span className="fw-bold"> Book ID</span>: {_id}
          </ListGroupItem>
          <ListGroupItem>
            <span className="fw-bolder">$</span>
            {price}
          </ListGroupItem>
          <ListGroupItem>
            <span className="fw-bold">Quantity: </span>
            {quantity}
          </ListGroupItem>
          <ListGroupItem>
            <span className="fw-bold">Supplier: </span>
            {supplierName}
          </ListGroupItem>
          <ListGroupItem>
            <span className="fw-bold">Status: </span>
            In Stock
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <button
            onClick={() => handleDelivered(itemDetail)}
            className="btn btn-success"
          >
            Delivered
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetails;
