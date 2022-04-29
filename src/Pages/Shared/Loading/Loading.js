import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <span className="h4">please wait</span>

      <Spinner animation="grow" />
    </div>
  );
};

export default Loading;
