import "./Header.css";
import logoBinus from "../../public/logoBinus.png";

export default function Header() {
  return (
    <div className="landing-page-header">
      <img src={logoBinus} id="logo-binus" />
      <ul className="navigation">
        <li>About</li>
        <li> Our Campus </li>
        <li> Support</li>
        <li> Feedback </li>
      </ul>
    </div>
  );
}
