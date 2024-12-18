import Header from "../components/Header";
import HttpsIcon from "@mui/icons-material/Https";
import "./Login.css";
import binusFoto from "../../public/fotoBinus.png";

export default function Login() {
  return (
    <div className="login">
      <Header />
      <div className="login-page">
        <div className="login-box">
          <div className="login-box-left">
            <img src={binusFoto} alt="binus" />
            <p>
              {" "}
              BINUS SmartPark is a user-friendly parking management system that
              provides real-time parking availability, easy reservations, and
              seamless access across BINUS campuses for students and staff.
            </p>
          </div>
          <div className="login-box-right">
            <h1> BINUS SmartPark</h1>
            <form>
              <div className="email-input-box">
                <input type="email" placeholder="Email" />
                <div className="email-domain">@BINUS.AC.ID</div>
              </div>
              <div className="password-input-box">
                <div className="password-icon">
                  <HttpsIcon id="password-icon" />
                </div>

                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" id="submit-login" value="Continue" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
