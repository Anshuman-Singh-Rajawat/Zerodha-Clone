import React from "react";

function Universe() {
  return (
    <>
      <div className="container text-center">
        <h1 className="fs-4">The Zerodha Universe</h1>
        <p className="text-muted my-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-5">
          <div className="col-4 p-3">
            <img
              src="media/images/smallcaseLogo.png"
              style={{ width: "12rem" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
              Thematic investment platform
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/images/streakLogo.png" style={{ width: "12rem" }} />
            <p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
              Algo & strategy platform
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ width: "12rem" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
              Options trading platform
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col p-3">
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ width: "12rem" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
              Asset management
            </p>
          </div>
          <div className="col p-3">
            <img
              src="media/images/goldenpiLogo.png"
              style={{ width: "12rem" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
              Bonds trading platform
            </p>
          </div>
          <div className="col p-3">
            <img src="media/images/dittoLogo.png" style={{ width: "8rem" }} />
            <p className="text-muted mt-3" style={{ fontSize: "0.8rem" }}>
              Insurance
            </p>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-6 my-5"
          style={{ width: "15%", margin: "auto" }}
        >
          Sign up Now
        </button>
      </div>
    </>
  );
}

export default Universe;
