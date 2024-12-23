import HeaderMain from "../components/HeaderMain";
import "./parkingPage.css";
import { useState } from "react";
import alsut from "../assets/alsut.jpeg";
import kemanggisan from "../assets/kemanggisan.png";
import bekasi from "../assets/bekasi.jpeg";
import bandung from "../assets/bandung.jpeg";
import senayan from "../assets/senayan.jpg";
import semarang from "../assets/semarang.jpeg";
import malang from "../assets/malang.jpeg";
import { useNavigate } from "react-router-dom";

export default function ParkingPage() {
  const [currentCampus, setCurrentCampus] = useState("");
  const navigate = useNavigate();

  const handleCampusClick = (campus) => {
    setCurrentCampus(campus);
  };

  const handleSelectCampus = () => {
    navigate(`/map/${currentCampus}`);
  };

  return (
    <div className="parking-page">
      <HeaderMain />
      <div className="parking-page-body">
        <h1> Select Your Campus </h1>
        <div className="campus-container">
          {[
            { name: "Alam Sutera", img: alsut },
            { name: "Kemanggisan", img: kemanggisan },
            { name: "Senayan", img: senayan },
            { name: "Bekasi", img: bekasi },
            { name: "Bandung", img: bandung },
            { name: "Semarang", img: semarang },
            { name: "Malang", img: malang },
          ].map((campus) => (
            <div
              key={campus.name}
              className={`campus-box ${
                currentCampus === campus.name ? "selected" : ""
              }`}
              onClick={() => handleCampusClick(campus.name)}
            >
              <img src={campus.img} alt={campus.name} />
              <h2> {campus.name} </h2>
            </div>
          ))}
        </div>
        <button
          id="select-campus"
          disabled={!currentCampus}
          onClick={handleSelectCampus}
        >
          Select
        </button>
      </div>
    </div>
  );
}
