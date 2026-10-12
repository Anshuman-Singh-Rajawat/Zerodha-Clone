import React from "react";

function RightSection({ productName, productDescription }) {
  return (
    <div className="container ">
      <div className="row p-5">
        <div className="col-6 m-auto">
          <h1 className="fs-4">{productName}</h1>
          <p className="text-muted" style={{ width: "70%" }}>
            {productDescription}
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Learn more →
          </a>
        </div>
        <div className="col-6">
          <img src="media/images/console.png" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
