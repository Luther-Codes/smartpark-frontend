import { useParams } from "react-router-dom";
import Header from "../components/Header";
import alsutmap from "../assets/alsutmap.png";
import "./map.css";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function map() {
  const { place } = useParams();

  return (
    <div>
      <Header />
      {place === "Alam Sutera" ? (
        <div className="map-body">
          <h1> Alam Sutera Campus East Parking Lot</h1>
          <img src={alsutmap} />
        </div>
      ) : (
        <div className="map-info">
          <ConstructionIcon
            className="constructionIcon"
            style={{ fontSize: "100px" }}
          />
          <p>
            {" "}
            Exciting updates are on the way! 🚧 We're still building, stay
            tuned!
          </p>
        </div>
      )}
    </div>
  );
}
