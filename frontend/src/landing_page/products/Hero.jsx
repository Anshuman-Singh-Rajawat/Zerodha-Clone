import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 p-5">
        <h1 className="fs-3">Zerodha Products</h1>
        <h3 className="fs-5 my-3 text-muted fw-normal">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
