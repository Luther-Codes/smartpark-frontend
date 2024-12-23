import { useEffect, useState } from "react";
import HeaderMain from "../components/HeaderMain";
import "./historyPage.css";
import axios from "axios";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const email = localStorage.getItem("email");

        // Fetch user data
        const result = await axios.get(
          `https://binus-smartpark-backend.vercel.app/getUser/${email}`
        );
        const userId = result.data.data[0].user_id;

        const historyResponse = await axios.get(
          `https://binus-smartpark-backend.vercel.app/api/getParkingHistory/${userId}`
        );

        setHistory(historyResponse.data.data || []); // Ensure default value if no data
      } catch (error) {
        console.error("Error fetching parking history:", error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-page">
      <HeaderMain />
      <div className="history-body">
        <div className="history-body-intro">
          <h1>Your Past Bookings</h1>
          <h3>Here’s a summary of your past bookings for reference.</h3>
        </div>

        <div className="history-list">
          {history.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            history.map((slot, index) => (
              <div className="history-box" key={index}>
                <h3>Slot {slot.slot_number}</h3>
                <h3>{new Date(slot.booking_date).toLocaleDateString()}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
