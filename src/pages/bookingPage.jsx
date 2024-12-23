import Swal from "sweetalert2";
import { useState } from "react";
import HeaderMain from "../components/HeaderMain";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import "./bookingPage.css";

export default function BookingPage() {
  const [selectedOption, setSelectedOption] = useState("Select your campus");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [parkingSlots, setParkingSlots] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [campusSelected, setCampusSelected] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const options = [
    "Alam Sutera",
    "Kemanggisan",
    "Senayan",
    "Bekasi",
    "Bandung",
    "Semarang",
    "Malang",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setCampusSelected(true);
    fetchParkingSlots(option);
  };

  const fetchParkingSlots = async (campusName) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/parking-slots?campusName=${campusName}`
      );

      console.log("API Response:", response);

      if (Array.isArray(response.data)) {
        const sortedSlots = response.data.sort(
          (a, b) => a.slot_number - b.slot_number
        );
        setParkingSlots(sortedSlots);
      } else {
        console.error("Invalid parking slot data received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching parking slots:", error);
    }
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    setIsMapVisible(false);
  };

  const handleBooking = async () => {
    if (!selectedSlot || !selectedDate) {
      Swal.fire("Oops!", "Please select a slot and date.", "warning");
      return;
    }

    try {
      const email = localStorage.getItem("email");
      const userData = await axios.get(
        `http://localhost:4000/getUser/${email}`
      );

      const bookingData = {
        user_id: userData.data.data[0].user_id,
        parking_slot_id: selectedSlot.id,
        booking_date: selectedDate.toISOString(),
      };

      const response = await axios.post(
        "http://localhost:4000/api/bookings",
        bookingData
      );

      console.log("Booking successful:", response.data);

      setSelectedDate(null);
      setSelectedSlot(null);
      setIsMapVisible(false);
      fetchParkingSlots(selectedOption);

      Swal.fire(
        "Success!",
        `Your booking for Slot ${
          selectedSlot.slot_number
        } on ${selectedDate.format("DD MMM YYYY")} is confirmed.`,
        "success"
      ).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error booking parking slot:", error);
      Swal.fire(
        "Error",
        "There was an issue booking the slot. Try again.",
        "error"
      );
    }
  };

  return (
    <div className="booking-page">
      <HeaderMain />
      <div className={`booking-body ${isMapVisible ? "blurred" : ""}`}>
        <h1>Booking Page</h1>
        <form className="booking-form">
          <div
            className="dropdown"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="dropdown-selected">
              {selectedOption} <ArrowDropDownIcon fontSize="large" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-options">
                {options.map((option) => (
                  <div
                    key={option}
                    className="dropdown-option"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOptionClick(option);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="booking-input">
            <div className="booking-input-left">
              <div className="book-input-detail">
                <label>Name</label>
                <input type="text" placeholder="Fullname" />
              </div>
              <div className="book-input-detail">
                <label>BINUS Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="book-input-detail">
                <label>NIM</label>
                <input type="text" placeholder="NIM" />
              </div>
            </div>
            <div className="booking-input-right">
              <div className="book-input-detail">
                <label>Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Pick a date"
                    value={selectedDate}
                    className="date-picker"
                    onChange={(newValue) => setSelectedDate(newValue)}
                    slotProps={{
                      textField: { className: "custom-input" },
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="book-input-detail">
                <label>Pick one!</label>
                <button
                  type="button"
                  className="pick-button"
                  onClick={() => {
                    if (!campusSelected) {
                      Swal.fire(
                        "Info",
                        "Please select a campus first.",
                        "info"
                      );
                    } else {
                      setIsMapVisible(true);
                    }
                  }}
                >
                  Show Parking Slots
                </button>
                {selectedSlot && (
                  <p className="selected-slot-text">
                    You selected Slot {selectedSlot.slot_number}
                  </p>
                )}
              </div>
            </div>
          </div>
          <button type="button" id="book" onClick={handleBooking}>
            Book
          </button>
        </form>
      </div>

      {isMapVisible && (
        <div className="parking-map-overlay">
          <div className="parking-map">
            <div className="grid-container">
              {Array.isArray(parkingSlots) &&
                parkingSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`grid-item ${
                      slot.is_available ? "green" : "red"
                    }`}
                    onClick={() => handleSlotClick(slot)}
                  >
                    Slot {slot.slot_number}
                  </div>
                ))}
            </div>
            <button id="close-map" onClick={() => setIsMapVisible(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
