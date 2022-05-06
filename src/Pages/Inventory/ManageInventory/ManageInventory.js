import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import InventoryItem from "../InventoryItem/InventoryItem";
import { Link } from "react-router-dom";
import useItems from "../../../hooks/useItems/useItems";
const ManageInventory = () => {
  const [items] = useItems();

  return (
    <div className="container">
      <Link className="btn btn-success my-5 p-3" as={Link} to="/addItem">
        +Add New Item
      </Link>
      <Table className="w-100" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="responsive">#</th>
            <th style={{ width: "150px" }}>Thumbnail</th>
            <th className="responsive">Book Name</th>
            <th className="responsive">Author</th>
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
