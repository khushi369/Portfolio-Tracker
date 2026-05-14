import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/portfolio-dashboard.svg" alt="Portfolio Dashboard" style={{ width: "100%" }} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Complete portfolio tracking solution</h1>
          <p className="mb-5">
            Track all your investments in one place with real-time updates and
            detailed insights across:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Stocks (Equity)</p></li>
                <li><p>Mutual Funds</p></li>
                <li><p>ETFs</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>IPO Allotment Status</p></li>
                <li><p>Portfolio History</p></li>
                <li><p>Profit/Loss Analysis</p></li>
              </ul>
            </div>
          </div>
          <img src="media/images/portfolio-features.png" style={{ width: "90%" }} alt="Features" />
        </div>
      </div>
    </div>
  );
}

export default Awards;