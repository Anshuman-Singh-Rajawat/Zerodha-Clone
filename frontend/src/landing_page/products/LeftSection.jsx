import React from "react";

function LeftSection({ imageURL, productName, productDescription }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img src={imageURL} />
        </div>
        <div className="col p-5 ms-5">
          <h1 className="fs-4">{productName}</h1>
          <p className="text-muted" style={{ width: "70%" }}>
            {productDescription}
          </p>
          <div className="my-4">
            <a href="" className="me-5" style={{ textDecoration: "none" }}>
              Try demo →
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Learn more →
            </a>
          </div>
          <div>
            <a href="" className="me-3">
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href="">
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
