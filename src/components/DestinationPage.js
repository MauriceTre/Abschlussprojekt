import React, { useState, useEffect } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Calendar from "react-calendar"; // Importiere den Kalender
import "react-calendar/dist/Calendar.css"; // Stile für den Kalender
import TripSummary from "./TripSummary"; // Importiere die Zusammenfassungskomponente
import "../styles/DestinationPage.css";
import axios from "axios";
const DestinationPage = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get("/api/guides", {
          headers: { Authorization: token },
        });
        setGuides(response.data);
      } catch (error) {
        console.error("Error fetching guides:", error);
      }
    };

    fetchGuides();
  }, []);
  const departureAirports = [
    "Hartsfield–Jackson Atlanta International Airport (ATL) - USA",
    "Beijing Capital International Airport (PEK) - China",
    "Dubai International Airport (DXB) - Vereinigte Arabische Emirate",
    "Tokyo Haneda Airport (HND) - Japan",
    "Los Angeles International Airport (LAX) - USA",
    "London Heathrow Airport (LHR) - Vereinigtes Königreich",
    "Charles de Gaulle Airport (CDG) - Frankreich",
    "Amsterdam Airport Schiphol (AMS) - Niederlande",
    "Frankfurt Airport (FRA) - Deutschland",
    "Singapore Changi Airport (SIN) - Singapur",
  ];

  const destinationAirports = [
    "London Heathrow Airport (LHR) - Vereinigtes Königreich",
    "Charles de Gaulle Airport (CDG) - Frankreich",
    "Amsterdam Airport Schiphol (AMS) - Niederlande",
    "Frankfurt Airport (FRA) - Deutschland",
    "Singapore Changi Airport (SIN) - Singapur",
    "Hartsfield–Jackson Atlanta International Airport (ATL) - USA",
    "Beijing Capital International Airport (PEK) - China",
    "Dubai International Airport (DXB) - Vereinigte Arabische Emirate",
    "Tokyo Haneda Airport (HND) - Japan",
    "Los Angeles International Airport (LAX) - USA",
  ];

  const [departureAirport, setDepartureAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [startDate, setStartDate] = useState(new Date()); // Startdatum der Reise
  const [endDate, setEndDate] = useState(new Date()); // Enddatum der Reise

  const handleDepartureAirportChange = (e) => {
    setDepartureAirport(e.target.value);
  };

  const handleDestinationAirportChange = (e) => {
    setDestinationAirport(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <Header />
      <div className="destination-page-container">
        <div className="page-content">
          <h1>Destination Page</h1>
          <div className="departure-airport">
            <label htmlFor="departureAirport">Departure Airport:</label>
            <select
              id="departureAirport"
              value={departureAirport}
              onChange={handleDepartureAirportChange}
            >
              <option value="">Select Departure Airport</option>
              {departureAirports.map((airport, index) => (
                <option key={index} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </div>
          <div className="destination-airport">
            <label htmlFor="destinationAirport">Destination Airport:</label>
            <select
              id="destinationAirport"
              value={destinationAirport}
              onChange={handleDestinationAirportChange}
            >
              <option value="">Select Destination Airport</option>
              {destinationAirports.map((airport, index) => (
                <option key={index} value={airport}>
                  {airport}
                </option>
              ))}
            </select>
          </div>
          <div className="date-container">
            <div className="start-date">
              <label htmlFor="startDate">Start Date:</label>
              <Calendar
                id="startDate"
                onChange={handleStartDateChange}
                value={startDate}
              />
            </div>
            <div className="end-date">
              <label htmlFor="endDate">End Date:</label>
              <Calendar
                id="endDate"
                onChange={handleEndDateChange}
                value={endDate}
              />
            </div>
          </div>

          <div className="trip-summary">
            <TripSummary
              departureAirport={departureAirport}
              destinationAirport={destinationAirport}
              travelStartDate={startDate}
              travelEndDate={endDate}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DestinationPage;
