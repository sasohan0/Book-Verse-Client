import React, { useEffect, useState } from "react";
import { Button, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { useParams } from "react-router-dom";
import ManageItemsLink from "../../../Shared/ManageItemsLink/ManageItemsLink";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  let { img, _id, name, price, quantity, shortDescription, supplierName } =
    itemDetail;
  useEffect(() => {
    const url = `https://fast-meadow-45185.herokuapp.com/inventory/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItemDetail(data));
  }, [itemId]);
  const handleDelivered = async (itemDetail, itemId) => {
    console.log(quantity);
    if (quantity > 0) {
      let { quantity, ...rest } = itemDetail;
      quantity = parseInt(quantity) - 1;

      const newItemDetail = { quantity, ...rest };

      setItemDetail(newItemDetail);
      const updatedQuantity = { quantity };
      fetch(`https://fast-meadow-45185.herokuapp.com/inventory/${itemId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  const handleRestock = async (e, itemDetail, itemId) => {
    e.preventDefault();
    const restockAmount = e.target.restockAmount.value;
    if (restockAmount > 0) {
      console.log(parseInt(restockAmount));
      let { quantity, ...rest } = itemDetail;
      quantity = parseInt(quantity) + parseInt(restockAmount);
      const updatedQuantity = { quantity };
      const newItemDetail = { quantity, ...rest };
      console.log(newItemDetail);
      setItemDetail(newItemDetail);
      fetch(`https://fast-meadow-45185.herokuapp.com/inventory/${itemId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center mt-3 mb-3 text-success">
        Item : {name}
      </h1>
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
            onClick={() => handleDelivered(itemDetail, itemId)}
            className="btn btn-success"
          >
            Delivered
          </button>
        </Card.Body>
      </Card>
      <ManageItemsLink></ManageItemsLink>
      <div className="mx-auto container mb-5" style={{ width: "50%" }}>
        <span className="d-flex mt-5 justify-content-center display-5 fw-bold ">
          ADD MORE
        </span>
        <Form onSubmit={(e) => handleRestock(e, itemDetail, itemId)}>
          <Form.Group className="mb-3 mt-5">
            <Form.Label>Add more stocks</Form.Label>
            <Form.Control
              type="number"
              name="restockAmount"
              placeholder="enter restock amount"
            />
          </Form.Group>

          <Button
            className="w-100 text-dark fw-bold"
            variant="danger"
            type="submit"
          >
            Restock
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ItemDetails;
