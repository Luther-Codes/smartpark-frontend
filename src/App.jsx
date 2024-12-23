import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landingPage";
import Login from "./pages/Login";
import MainPage from "./pages/mainPage";
import ParkingPage from "./pages/parkingPage";
import BookingPage from "./pages/bookingPage";
import HistoryPage from "./pages/historyPage";
import Map from "./pages/map";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/map/:place" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
