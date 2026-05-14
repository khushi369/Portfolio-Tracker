import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          Track your investments with ease
          <br />
          Real-time portfolio insights at your fingertips.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            Portfolio Tracker helps you monitor all your stock holdings in one place.
            Whether you're a beginner or an experienced investor, our platform gives you
            a clear view of your investments, profits, and losses.
          </p>
          <p>
            With real-time price updates and interactive charts, you can make informed
            decisions without switching between multiple apps.
          </p>
          <p>
            Our goal is to simplify portfolio management – no clutter, no complexity,
            just the data you need to stay on top of your finances.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            We believe in transparency and ease of use. That's why we built a clean,
            intuitive dashboard that anyone can understand.
          </p>
          <p>
            <a href="#" style={{ textDecoration: "none" }}>
              Learn more
            </a>{" "}
            about our features, or start tracking your portfolio today.
          </p>
          <p>
            And we're constantly improving – new features like advanced analytics,
            export reports, and price alerts are coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;