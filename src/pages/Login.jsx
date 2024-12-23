import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../components/Header";
import HttpsIcon from "@mui/icons-material/Https";
import "./Login.css";
import binusFoto from "../assets/fotoBinus.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://binus-smartpark-backend.vercel.app/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Login successful:", response.data);

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "You have successfully logged in.",
        confirmButtonText: "OK",
      });

      localStorage.setItem("email", email);

      navigate("/main");
    } catch (error) {
      console.error("Login error:", error);

      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message || "Invalid email or password."
        );
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid email or password.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="login">
      <Header />
      <div className="login-page">
        <div className="login-box">
          <div className="login-box-left">
            <img src={binusFoto} alt="binus" />
            <p>
              BINUS SmartPark is a user-friendly parking management system that
              provides real-time parking availability, easy reservations, and
              seamless access across BINUS campuses for students and staff.
            </p>
          </div>
          <div className="login-box-right">
            <h1>BINUS SmartPark</h1>
            <form onSubmit={handleSubmit}>
              <div className="email-input-box">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="email-domain">@BINUS.AC.ID</div>
              </div>
              <div className="password-input-box">
                <div className="password-icon">
                  <HttpsIcon id="password-icon" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <input type="submit" id="submit-login" value="Continue" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
