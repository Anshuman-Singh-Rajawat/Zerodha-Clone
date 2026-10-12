import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center ">
        <h1 className=" fs-3">People</h1>
      </div>
      <div
        className="row p-5 text-muted"
        style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}
      >
        <div className="col py-5 ps-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "55%" }}
          />
          <h5 className="my-4 fw-normal">Nithin Kamath</h5>
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            Founder, CEO
          </p>
        </div>
        <div className="col py-5 pe-5 ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>{" "}
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
