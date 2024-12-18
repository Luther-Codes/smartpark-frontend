import HeaderMain from "../components/HeaderMain";
import "./historyPage.css";

export default function historyPage() {
  return (
    <div className="history-page">
      <HeaderMain />
      <div className="history-body">
        <div className="history-body-intro">
          <h1> Your Past Bookings </h1>
          <h3> Here’s a summary of your past bookings for reference.</h3>
        </div>

        <div className="history-list">
          <div className="history-box">
            <h3> A1 </h3>
            <h3> 01-10-2025 </h3>
            <h3> Rp 10,000 </h3>
          </div>

          <div className="history-box">
            <h3> A1 </h3>
            <h3> 01-10-2025 </h3>
            <h3> Rp 10,000 </h3>
          </div>

          <div className="history-box">
            <h3> A1 </h3>
            <h3> 01-10-2025 </h3>
            <h3> Rp 10,000 </h3>
          </div>

          <div className="history-box">
            <h3> A1 </h3>
            <h3> 01-10-2025 </h3>
            <h3> Rp 10,000 </h3>
          </div>

          <div className="history-box">
            <h3> A1 </h3>
            <h3> 01-10-2025 </h3>
            <h3> Rp 10,000 </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
