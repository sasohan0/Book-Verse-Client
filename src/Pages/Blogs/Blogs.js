import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Difference between javascript and nodejs
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                {" "}
                1. Javascript can only be run on the browser but node js gives
                the capability to run outside browser. <br />
                2. javascript is mainly used for the client side and node js for
                the server side. <br />
                3. javascript is run on any browser engine but node js is parsed
                by v8 engine inbuilt. <br />
                4. Javascript is a programming language that is used for writing
                scripts on the website. NodeJS is a Javascript runtime
                environment.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              When should you use nodejs and when should you use mongodb
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                1. node js is used for executing application. MongoDb is used to
                store data by criteria and to use them efficiently . <br />
                2. Node js is for scripting and coding on the server side.
                MongoDb is for storing the data and getting it by node js
                efficiently on the server side. <br />
                3. Node js is a Javascript runtime environment and helps
                Javascript to run outside of server. Mostly used in server side
                development. MongoDb is document oriented Nosql database. It
                stores data as JSON.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Differences between sql and nosql databases.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                1. Sql databases have fixed schema but Nosql databases have
                dynamic schema. <br />
                2.Sql is Relational Database Management System (RDBMS). Nosql is
                Non-relational or distributed database system. <br />
                3. Sql is good for complex queries Nosql is not. <br />
                4. sql is vertically scalable but nosql is horizontally
                scalable.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the purpose of jwt and how does it work
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                JWT(JSON Web Token) is an open standard used to share security
                information between two parties like a client and a server.A JWT
                is a string made up of three parts, separated by dots (.), and
                serialized using base64. In the most common serialization
                format, compact serialization, the JWT looks something like
                this: xxxxx.yyyyy.zzzzz. After decoding we get the header and
                the payload and the signature.The header contains the type of
                token like JWT and the signing algorithm. The payload contains
                the claims and the signature ensures that the token hasn’t been
                altered. this way a user is authenticated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
