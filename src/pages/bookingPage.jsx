import HeaderMain from "../components/HeaderMain";
import { useState } from "react";
import "./bookingPage.css";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function BookingPage() {
  const [selectedOption, setSelectedOption] = useState("Select your campus");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

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
  };

  return (
    <div className="booking-page">
      <HeaderMain />
      <div className="booking-body">
        <h1> Booking Page </h1>
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
                <label> Name</label>
                <input type="text" placeholder="Fullname" />
              </div>
              <div className="book-input-detail">
                <label> BINUS Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="book-input-detail">
                <label> NIM </label>
                <input type="text" placeholder="NIM" />
              </div>
            </div>
            <div className="booking-input-right">
              <div className="book-input-detail">
                <label> Date </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Pick a date"
                    value={selectedDate}
                    className="date-picker"
                    onChange={(newValue) => setSelectedDate(newValue)}
                    slotProps={{
                      textField: {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          "& .MuiInputBase-input": {
                            color: "black",
                            fontSize: "0.9rem",
                            padding: "15px",
                          },
                          "& .MuiInputLabel-root": {
                            color: "black",
                            fontSize: "0.9rem",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "& .MuiInputLabel-shrink": {
                            display: "none",
                          },
                          backgroundColor: "#b3c8cf",
                          "& .MuiSvgIcon-root": {
                            color: "black",
                            fontSize: "1.5rem",
                          },
                          minWidth: "200px",
                          height: "50px",
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="book-input-detail">
                <label> Pick one! </label>
              </div>
            </div>
          </div>
          <button type="submit" id="book">
            {" "}
            Book{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
