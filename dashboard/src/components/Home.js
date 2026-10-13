import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");
  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        "https://zerodha-backend-r0g9.onrender.com/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${username}`, {
            position: "top-right",
          })
        : (removeCookie("token"),
          (window.location.href =
            "https://zerodha-clone-qdib.onrender.com/signup"));
    };
    verifyCookie();
  }, [cookies, removeCookie]);

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
