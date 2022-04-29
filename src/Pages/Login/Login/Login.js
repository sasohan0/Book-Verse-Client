import React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
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
            Don't have an account? <Link to="/register"> register here</Link>
          </span>
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button className="w-50" variant="primary" type="submit">
            Login
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
            Continue with google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;