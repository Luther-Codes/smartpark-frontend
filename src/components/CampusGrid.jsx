import "./CampusGrid.css";

export default function CampusGrid(props) {
  return (
    <div className="campus-grid-detail">
      <h3> {props.name} </h3>
      <div className="campus-grid-detail-info">
        <span> Available </span>
        <span style={{ color: "green", fontWeight: "700" }}>
          {props.available}{" "}
        </span>
      </div>
      <div className="campus-grid-detail-info">
        <span> Unavailable </span>
        <span style={{ color: "red", fontWeight: "700" }}>
          {" "}
          {props.unavailable}{" "}
        </span>
      </div>
      <button id="campus-parking-detail"> View Detail </button>
    </div>
  );
}
