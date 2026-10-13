import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "https://zerodha-backend-r0g9.onrender.com/",
          {},
          { withCredentials: true }
        );
        console.log("Backend response:", data);
        const { status, user } = data;
        setUsername(user);
        return status
          ? toast(`Hello ${user}`, {
              position: "top-right",
            })
          : console.log("Authentication failed: token missing or invalid");
        // : (window.location.href =
        //     "https://zerodha-clone-qdib.onrender.com/signup");
      } catch (err) {
        console.error(
          "Verification request failed:",
          err.response?.data || err.message
        );
      }
    };
    verifyCookie();
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
