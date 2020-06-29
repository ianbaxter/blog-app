import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const axios = require("axios");

const Secret = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    console.log("getting secret");
    axios
      .get(process.env.REACT_APP_BASE_URL + "/api/secret", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Recieved secret" + res);
        setMessage(res.data.text);
      });
  }, []);

  return (
    <div>
      <div id="top">
        <h1>Secret Chat Wall</h1>
        <div className="navigation">
          <Link to="/" className="btn">
            Home
          </Link>
        </div>
      </div>
      <div className="entry">
        <h2>Secret</h2>
        <p>{message}</p>
      </div>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Secret;