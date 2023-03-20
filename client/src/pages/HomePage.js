import axios from "axios";
import React, { useEffect } from "react";

const HomePage = () => {
  // Login USer data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
