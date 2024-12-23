import logoBinus from "../assets/logobinus.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./HeaderMain.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeaderMain() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  const email = localStorage.getItem("email");

  useEffect(() => {
    switch (location.pathname) {
      case "/main":
        setActiveLink("home");
        break;
      case "/parking":
        setActiveLink("parking");
        break;
      case "/booking":
        setActiveLink("booking");
        break;
      case "/history":
        setActiveLink("history");
        break;
      default:
        setActiveLink("");
    }
  }, [location.pathname]);

  return (
    <div className="header-main">
      <img src={logoBinus} id="logo-binus" />
      <ul className="main-nav">
        <Link
          to="/main"
          className={`link-nav ${activeLink === "home" ? "active-link" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/parking"
          className={`link-nav ${
            activeLink === "parking" ? "active-link" : ""
          }`}
        >
          Parking
        </Link>
        <Link
          to="/booking"
          className={`link-nav ${
            activeLink === "booking" ? "active-link" : ""
          }`}
        >
          Booking
        </Link>
        <Link
          to="/history"
          className={`link-nav ${
            activeLink === "history" ? "active-link" : ""
          }`}
        >
          History
        </Link>
      </ul>
      <div className="user-profile">
        <span>{email} </span>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}
