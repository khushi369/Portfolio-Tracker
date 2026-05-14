import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">About the Project</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/portfolio-icon.png"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Portfolio Tracker"
          />
          <h4 className="mt-5">Portfolio Tracker</h4>
          <h6>Open Source Project</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            This project was built as a learning initiative to demonstrate
            full-stack development skills using the MERN stack (MongoDB, Express,
            React, Node.js).
          </p>
          <p>
            The goal is to provide a clean, intuitive interface for investors
            to track their stock holdings, monitor real-time prices, and analyze
            portfolio performance.
          </p>
          <p>
            All data is fetched from public APIs, and the platform is designed
            to be fully transparent and easy to use.
          </p>
          <p>
            Check out the code on{" "}
            <a href="https://github.com/khushi369/Portfolio-Tracker">GitHub</a>{" "}
            or reach out for feedback and contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;