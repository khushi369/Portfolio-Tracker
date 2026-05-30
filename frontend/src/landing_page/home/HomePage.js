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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPrice = () => {
    setLoading(true);
    setError("");
    fetch(`/api/livePrice/${symbol}`)
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => {
        setLivePrice(data.price);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching price:", err);
        setError("Failed to fetch price. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol]);

  const refreshPrice = () => {
    fetchPrice();
  };

  return (
    <>
      <Navbar />
      <Hero />
      <PortfolioSummary />
      <PerformanceChart />
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
        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-danger">{error}</p>}
        {!loading && !error && livePrice && (
          <div className="mt-4">
            <h4>{symbol}: ${livePrice}</h4>
          </div>
        )}
        {!loading && !error && !livePrice && (
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
