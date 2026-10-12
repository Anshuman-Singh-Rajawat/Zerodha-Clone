import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-0">Open a Zerodha account</h1>
        <p className="my-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-6 mb-5"
          style={{ width: "15%", margin: "auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
