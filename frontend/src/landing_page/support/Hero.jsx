import React from "react";

function Hero() {
  return (
    <div className="container-fluid p-5" id="supportHero">
      <div className="" id="supportWrapper">
        <h5 className="fw-normal">Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className="row">
        <div className="col px-5">
          <h4 className="fw-normal" style={{ lineHeight: "1.5" }}>
            Search for an answer or browse help topics to create a ticket
          </h4>
          <input
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
            className="my-3"
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday</a>
          <a href="">margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col px-5">
          <h4 className="fw-normal">Featured</h4>
          <ol type="1">
            <li style={{ lineHeight: "2.5" }}>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li style={{ lineHeight: "2.5" }}>
              <a href="">Latest Intraday leverages MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
