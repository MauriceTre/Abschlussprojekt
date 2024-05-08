import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
const DestinationPage = () => {
  // Beispiel-Daten für Abflughäfen und Zielflughäfen
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
  // Zustände für die ausgewählten Flughäfen
  const [departureAirport, setDepartureAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");

  // Handler-Funktionen für die Änderung der ausgewählten Flughäfen
  const handleDepartureAirportChange = (e) => {
    setDepartureAirport(e.target.value);
  };

  const handleDestinationAirportChange = (e) => {
    setDestinationAirport(e.target.value);
  };

  return (
    <div>
      <Header /> {/* Header einbinden */}
      <div>
        <h1>Destination Page</h1>
        <div>
          <label htmlFor="departureAirport">Abflughafen:</label>
          <select
            id="departureAirport"
            value={departureAirport}
            onChange={handleDepartureAirportChange}
          >
            <option value="">Wähle einen Abflughafen</option>
            {departureAirports.map((airport, index) => (
              <option key={index} value={airport}>
                {airport}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="destinationAirport">Zielflughafen:</label>
          <select
            id="destinationAirport"
            value={destinationAirport}
            onChange={handleDestinationAirportChange}
          >
            <option value="">Wähle einen Zielflughafen</option>
            {destinationAirports.map((airport, index) => (
              <option key={index} value={airport}>
                {airport}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Footer /> {/* Footer einbinden */}
    </div>
  );
};

export default DestinationPage;
