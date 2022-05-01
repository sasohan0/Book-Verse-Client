import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import InventoryItem from "../../../Inventory/InventoryItem/InventoryItem";

const UserItems = () => {
  const [user] = useAuthState(auth);
  const [userItems, setUserItems] = useState([]);

  const email = user?.email;

  useEffect(() => {
    fetch(`https://fast-meadow-45185.herokuapp.com/userItems/${email}`)
      .then((res) => res.json())
      .then((data) => setUserItems(data));
  }, [email, userItems]);

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center mt-5 mb-3">
        Items of : <span className="text-success">{user?.email}</span>
      </h1>
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
          {userItems.map((item) => (
            <InventoryItem key={item._id} item={item}></InventoryItem>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserItems;
