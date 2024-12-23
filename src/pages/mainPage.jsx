import CampusGrid from "../components/CampusGrid";
import HeaderMain from "../components/HeaderMain";
import { useState, useEffect } from "react";
import "./mainPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function mainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = localStorage.getItem("email");

      console.log("user email: ", userEmail);

      const result = await axios.get(
        `http://localhost:4000/getUser/${userEmail}`
      );
      if (result.status == 200) {
        setCurrentUser(result.data.data);
      }
    };
    fetchUser();
  }, []);

  const testimonies = [
    {
      text: "This app is incredibly user-friendly and has made parking at BINUS so much easier. The interface is intuitive, and I can always find available slots without any hassle. It's a must-have for anyone who frequently parks on campus!",
      author: "Vincentius Jacob Gunawan",
    },
    {
      text: "BINUS SmartPark has completely transformed how I plan my parking. The real-time updates and seamless booking system allow me to focus on my day without worrying about whether I'll find a parking spot. Highly recommended!",
      author: "Jessica Tan",
    },
    {
      text: "I was skeptical at first, but BINUS SmartPark has exceeded all my expectations. Being able to check parking availability in real time has saved me countless hours. It’s such a smart solution for our busy campus life!",
      author: "Andrew Susanto",
    },
    {
      text: "The booking feature in this app is fantastic! Knowing that I have a reserved spot before arriving on campus is such a relief. BINUS SmartPark has truly made my parking experience stress-free and efficient.",
      author: "Catherine Wijaya",
    },
    {
      text: "This app is a game changer for BINUS students and faculty. The convenience of managing parking reservations and getting real-time updates has made parking so much easier. I can’t imagine going back to the old way!",
      author: "Michael Lim",
    },
  ];

  const nextTestimony = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const prevTestimony = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length
    );
  };

  return (
    <div className="main-page">
      <HeaderMain />
      <div className="main-body">
        <div className="main-body-face">
          <h1> BINUS SmartPark</h1>
          <p>
            {" "}
            Streamline your parking experience with BINUS SmartPark – offering
            real-time space availability, seamless reservations, and efficient
            parking management across all BINUS campuses.
          </p>
          <button id="book-btn" onClick={() => navigate("/booking")}>
            {" "}
            Book Now
          </button>
        </div>
        <div className="parking-informations">
          <h1> Parking Availability </h1>
          <div className="campus-container">
            <CampusGrid name={"Alam Sutera"} available={19} unavailable={30} />
            <CampusGrid name={"Kemanggisan"} available={25} unavailable={80} />
            <CampusGrid name={"Bandung"} available={5} unavailable={20} />
            <CampusGrid name={"Senayan"} available={10} unavailable={30} />
            <CampusGrid name={"Semarang"} available={15} unavailable={35} />
            <CampusGrid name={"Bekasi"} available={7} unavailable={21} />
            <CampusGrid name={"Malang"} available={12} unavailable={19} />
          </div>
        </div>
        <div className="testimony">
          <h1> Hear From Our Users</h1>
          <div className="testimony-carousel">
            <div className="user-testimony-box">
              <img src="" />
              <div className="testimony-content">
                <p> "{testimonies[currentIndex].text}"</p>
                <span> - {testimonies[currentIndex].author}</span>
              </div>
            </div>
            <div className="carousel-controls">
              <button onClick={prevTestimony}>Previous</button>
              <button onClick={nextTestimony}>Next</button>
            </div>
          </div>
        </div>
        <div className="updates-informations">
          <h1> New Updates!</h1>

          <div className="updates-container">
            <div className="update">
              <h3> Improved Parking Availability Data </h3>
              <p>
                {" "}
                We’ve enhanced the accuracy of real-time parking space
                availability. Check your campus parking conditions with
                confidence!
              </p>
              <span> 2 hours ago</span>
            </div>

            <div className="update">
              <h3> New Reservation System </h3>
              <p>
                {" "}
                You can now reserve a parking spot up to 24 hours in advance for
                a hassle-free experience. Try it today!
              </p>
              <span> 3 days ago</span>
            </div>

            <div className="update">
              <h3> UI/UX Enhancements </h3>
              <p>
                {" "}
                Enjoy a cleaner and more intuitive interface with the latest
                design update for better usability.
              </p>
              <span> 5 days ago</span>
            </div>

            <div className="update">
              <h3> New Feature: Parking History </h3>
              <p>
                {" "}
                View detailed records of your past parking activities, including
                dates, times, and costs.
              </p>
              <span> 1 week ago</span>
            </div>

            <div className="update">
              <h3> Reduced App Loading Times </h3>
              <p>
                {" "}
                We’ve optimized app performance, reducing loading times by up to
                30%. Experience a faster SmartPark!
              </p>
              <span> 2 weeks ago</span>
            </div>

            <div className="update">
              <h3> Expanded Payment Options </h3>
              <p>
                {" "}
                We now support additional payment methods for seamless
                transactions, including mobile wallets.
              </p>
              <span> 3 weeks ago</span>
            </div>

            <div className="update">
              <h3> Feedback Feature Added </h3>
              <p>
                {" "}
                Share your thoughts on our app! Use the new feedback feature to
                help us improve BINUS SmartPark.
              </p>
              <span> 1 month ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
