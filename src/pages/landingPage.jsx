import { useNavigate } from "react-router-dom";
import "./landingPage.css";
import Header from "../components/Header";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="landing-page">
      <Header />
      <div className="landing-page-body">
        <h1>BINUS SmartPark</h1>
        <button onClick={handleSignIn}>Sign in with BINUS Account</button>
      </div>
    </div>
  );
}
