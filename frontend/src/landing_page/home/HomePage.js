import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PortfolioSummary from "./PortfolioSummary";
import PerformanceChart from "./PerformanceChart";

function HomePage() {
  const [livePrice, setLivePrice] = useState(null);
  const [symbol, setSymbol] = useState("AAPL");

  // Fetch price whenever symbol changes (automatic)
  useEffect(() => {
    fetch(`/api/livePrice/${symbol}`)
      .then(res => res.json())
      .then(data => setLivePrice(data.price))
      .catch(err => console.error("Error fetching price:", err));
  }, [symbol]);

  // Manual refresh function (same as automatic)
  const refreshPrice = () => {
    fetch(`/api/livePrice/${symbol}`)
      .then(res => res.json())
      .then(data => setLivePrice(data.price))
      .catch(err => console.error("Error refreshing price:", err));
  };

  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioSummary />
      <PerformanceChart />
      {/* Live price demo section */}
      <div className="container text-center my-5 p-4 border rounded">
        <h3>Live Stock Price Demo</h3>
        <div className="mt-3">
          <input 
            type="text" 
            value={symbol} 
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            placeholder="Enter symbol (e.g., AAPL)"
            className="form-control d-inline-block w-50 me-2"
          />
          <button className="btn btn-primary" onClick={refreshPrice}>
            Check Price
          </button>
          <button className="btn btn-secondary ms-2" onClick={refreshPrice}>
            Refresh
          </button>
        </div>
        {livePrice ? (
          <div className="mt-4">
            <h4>{symbol}: ${livePrice}</h4>
          </div>
        ) : (
          <p className="mt-4">Click the button to see live price</p>
        )}
      </div>
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage;
