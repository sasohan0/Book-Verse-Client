import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import InventoryItem from "../InventoryItem/InventoryItem";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://blooming-wave-56097.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "150px" }}>Thumbnail</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <InventoryItem key={item._id} item={item}></InventoryItem>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;
