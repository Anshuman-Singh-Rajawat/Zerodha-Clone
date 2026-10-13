import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-backend-r0g9.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://zerodha-dashboard-34ar.onrender.com/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 p-5 ms-5">
          <h1 className="fs-4">Login Account</h1>
          <div className="form_container">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mb-3 px-5">
                Continue
              </button>
              <br />
            </form>
            <ToastContainer />
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Login;
