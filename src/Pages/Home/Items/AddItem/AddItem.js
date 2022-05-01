import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const AddItem = () => {
  const [user, loading] = useAuthState(auth);

  const handleAddItem = async (e) => {
    e.preventDefault();
    const user = e.target.user.value;
    const bookName = e.target.bookName.value;
    const supplierName = e.target.supplierName.value;
    const shortDescription = e.target.shortDescription.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const image = e.target.image.value;

    const addedItem = {
      user: user,
      img: image,
      name: bookName,
      price: price,
      quantity: quantity,
      supplierName: supplierName,
      shortDescription: shortDescription,
    };
    fetch("https://fast-meadow-45185.herokuapp.com/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("successfully added");
      });
    const [userField, ...rest] = Array.from(document.querySelectorAll("input"));
    rest.forEach((input) => (input.value = ""));
    this?.setState({
      itemvalues: [{}],
    });
  };
  return (
    <div className="container w-50 mt-5">
      <h1 className="d-flex justify-content-center">Add New Item to Stock</h1>
      <Form onSubmit={(e) => handleAddItem(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User</Form.Label>
          <Form.Control type="email" name="user" disabled value={user?.email} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            name="bookName"
            placeholder="Enter book name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Supplier Name</Form.Label>
          <Form.Control
            type="text"
            name="supplierName"
            placeholder="Enter supplier name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            type="text"
            name="shortDescription"
            maxLength={200}
            placeholder="Enter short description"
          />
          <Form.Text>max 200 characters</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" placeholder="Enter price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            placeholder="Enter amount"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="image" placeholder="Image url" />
          <Form.Text className="text-muted">
            Host your image on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://imgbb.com/"
            >
              imgbb.com
            </a>
          </Form.Text>
        </Form.Group>

        <Button className="w-100" variant="warning" type="submit">
          Add to Stock
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
