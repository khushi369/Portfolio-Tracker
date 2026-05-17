import React, { useState, useEffect } from "react";

function PortfolioSummary() {
  const [holdings, setHoldings] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalGain, setTotalGain] = useState(0);

  useEffect(() => {
    fetch("/api/stocks")
      .then(res => res.json())
      .then(data => {
        setHoldings(data);
        calculatePortfolio(data);
      })
      .catch(err => console.error("Error fetching holdings:", err));
  }, []);

  const calculatePortfolio = (holdingsData) => {
    let inv = 0;
    let val = 0;
    holdingsData.forEach(item => {
      inv += item.avg * item.qty;
      val += item.price * item.qty;
    });
    setTotalInvestment(inv);
    setTotalValue(val);
    setTotalGain(val - inv);
  };

  return (
    <div className="container my-5 p-4 border rounded bg-light">
      <h3 className="text-center mb-4">Portfolio Summary</h3>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Total Investment</h5>
            <p className="h4">₹{totalInvestment.toFixed(2)}</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Current Value</h5>
            <p className="h4">₹{totalValue.toFixed(2)}</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3">
            <h5>Total P&L</h5>
            <p className={`h4 ${totalGain >= 0 ? 'text-success' : 'text-danger'}`}>
              ₹{totalGain.toFixed(2)} ({totalInvestment ? ((totalGain/totalInvestment)*100).toFixed(2) : 0}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSummary;
