import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
  };

  if (error || errorGoogle) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || loadingGoogle) {
    return <p>Loading...</p>;
  }
  if (user || userGoogle) {
    return (
      <div>
        <p>
          Registered User: {user.user.email}||{userGoogle?.user?.email}
        </p>
      </div>
    );
  }
  return (
    <div className="container   mt-5">
      <Form onSubmit={(e) => handleSubmit(e)} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <span>
            Already have an account? <Link to="/login"> login here</Link>
          </span>
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button className="w-50" variant="primary" type="submit">
            Sign Up
          </Button>
        </div>

        <div
          style={{
            width: "100%",
            height: "20px",
            borderBottom: "1px solid black",
            textAlign: "center",
          }}
        >
          <span
            className="rounded-pill"
            style={{
              fontSize: "25px",
              backgroundColor: "white",
              padding: " 0 10px",
            }}
          >
            OR
          </span>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={() => signInWithGoogle()}
            className="w-50"
            variant="light"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
