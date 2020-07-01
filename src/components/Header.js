import React, { useState } from "react";
import history from "../history";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  function onLogoutClick() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userId");
    if (history.location.pathname === "/") {
      window.location.reload();
    } else {
      history.push("/");
    }
  }

  const toggleMenu = () => {
    console.log("toggle menu");
    if (menuVisible) setMenuVisible(false);
    else setMenuVisible(true);
  };

  return (
    <header>
      <div id="top">
        <Link to="/">
          <h1>Chat Wall</h1>
        </Link>
        {/* {isLoggedIn && <span>Hi {sessionStorage.getItem("username")}</span>} */}
        {/* <nav> */}
        {isLoggedIn ? (
          <div>
            <div
              className={"menu " + (menuVisible && "menu--active")}
              onClick={toggleMenu}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn btn--white">
            Login
          </Link>
        )}
        {/* </nav> */}
      </div>
      <div className="top-options-wrapper">
        <div
          className={"user-options " + (menuVisible && "user-options--active")}
        >
          <button className="btn" onClick={onLogoutClick}>
            Logout
          </button>
          <Link
            to={"/user/" + sessionStorage.getItem("userId")}
            className="btn"
          >
            Settings
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
