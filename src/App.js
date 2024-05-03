import React from "react";
import "./App.css";
import Content from "./components/Hero";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Overview from "./components/Overview";
import CompanyOverview from "./components/Overviewindex/Overview";
import ServiceBlock from "./components/Services/ServiceBlock";
import OurTeamBlock from "./components/OurTeam/OurTeamBlock";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      {/* <Overview /> */}
      <CompanyOverview />
      <ServiceBlock />
      <OurTeamBlock />
      <Footer />

    </div>
  );
}

export default App;
