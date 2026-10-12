import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
        "http://localhost:3002/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError(error.response.data.message);
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img src="media/images/account_open.svg" style={{ width: "90%" }} />
        </div>
        <div className="col p-5 ms-5">
          <h1 className="fs-4">Signup now</h1>
          <p className="text-muted" style={{ width: "70%" }}>
            Or track your existing application
          </p>
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
                <label htmlFor="username" className="col-sm-2 col-form-label">
                  Username
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
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
              <span>
                Already have an account? <Link to={"/login"}>Login</Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div style={{ fontSize: "0.8rem" }} className="text-muted mb-5 py-5">
        <p>
          By submitting your contact details, you authorize Zerodha to contact
          you even if you are registered on DND & conduct online KYC for trading
          & demat account opening as per KRA regulations and PMLA guidelines. To
          learn about the details we collect when you sign up with Zerodha,
          visit our support article.
        </p>
        <p>
          If you are looking to open a HIJF, Corporate, Partnership, or NRI
          account, you have to use the offline farms. For help, click here.
        </p>
      </div>
    </div>
  );
};

export default Signup;
