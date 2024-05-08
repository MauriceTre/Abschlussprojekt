import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer"
import backgroundImage from "../assets/background.png";
import "../styles/Landingpage.css"

const LandingPage = () => {
  return (
    <div className="landing-page"style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <main>
        <h1>Welcome to our Travel Planner!</h1>
        <h2>"Willkommen beim ultimativen Reiseplaner!

Bereit, die Welt zu erkunden? Wir sind hier, um Ihre Reiseträume Wirklichkeit werden zu lassen. 
Unser Reiseplaner bietet Ihnen maßgeschneiderte Reiseerlebnisse, die perfekt auf Ihre Bedürfnisse zugeschnitten sind.
Entdecken Sie unsere umfangreiche Auswahl an Reisezielen, von exotischen Stränden bis hin zu pulsierenden Metropolen. Egal, ob Sie einen entspannten Strandurlaub, einen abenteuerlichen Outdoor-Trip oder eine kulturelle Entdeckungsreise suchen, wir haben das Richtige für Sie.
Unser Team von erfahrenen Reiseexperten steht Ihnen zur Seite, um Ihnen bei der Planung Ihres perfekten Urlaubs zu helfen. 
Von der Auswahl des idealen Reiseziels über die Buchung von Flügen und Unterkünften bis hin zur Organisation von Aktivitäten und Touren - wir kümmern uns um alles, damit Sie sich entspannen und die Reise genießen können.
Mit unserem benutzerfreundlichen Online-Tool können Sie Ihre Reiseroute ganz einfach anpassen und personalisieren. Fügen Sie Ihre bevorzugten Aktivitäten hinzu, legen Sie Ihr Budget fest und lassen Sie uns den Rest erledigen.
Also, worauf warten Sie noch? Tauchen Sie ein in die faszinierende Welt des Reisens mit unserem Reiseplaner und lassen Sie uns gemeinsam unvergessliche Abenteuer erleben!" </h2>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
