import React from "react";

const Map = () => {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4 text-center">Our Location</h1>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58435.488561454105!2d90.36682409757972!3d23.739603056107978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b17614b493%3A0x2e342860fd348bba!2sWorld%20Book%20Distribution%20Centre!5e0!3m2!1sen!2sbd!4v1651828315529!5m2!1sen!2sbd"
        className="w-100 "
        style={{ height: "450px" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
