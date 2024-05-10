import React from "react";

const TripSummary = ({ departureAirport, destinationAirport, travelStartDate, travelEndDate }) => {
  const durationInDays = calculateTravelDuration(travelStartDate, travelEndDate);

  return (
    <div className="trip-summary">
      <h2>Trip Summary</h2>
      <p><strong>Departure Airport:</strong> {departureAirport}</p>
      <p><strong>Destination Airport:</strong> {destinationAirport}</p>
      <p><strong>Travel Duration:</strong> {durationInDays} days</p>
    </div>
  );
};

// Diese Funktion berechnet die Anzahl der Tage zwischen zwei Datumsangaben
const calculateTravelDuration = (startDate, endDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // Millisekunden pro Tag
  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = Math.round(Math.abs((end - start) / oneDay));
  return durationInDays;
};

export default TripSummary;
