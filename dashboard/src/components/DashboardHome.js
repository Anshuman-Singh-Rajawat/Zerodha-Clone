import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const DashboardHome = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:3000/signup";
        return;
      }
      const { data } = await axios.post(
        "http://localhost:3002",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"),
          (window.location.href = "http://localhost:3000/signup"));
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

export default DashboardHome;
