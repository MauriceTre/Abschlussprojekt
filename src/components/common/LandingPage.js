import React from 'react';
import Header from './Footer';
import Footer from './Header';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <h1>Welcome to our Travel Planner!</h1>
        {/* Add more content here */}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
