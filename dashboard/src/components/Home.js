import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        "https://zerodha-backend-r0g9.onrender.com/",
        {},
        { withCredentials: true }
      );
      console.log(data);
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${username}`, {
            position: "top-right",
          })
        : console.log("hello");
      // : (window.location.href =
      //     "https://zerodha-clone-qdib.onrender.com/signup");
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
