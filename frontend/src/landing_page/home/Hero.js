import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Portfolio Tracker Hero"
          className="mb-5"
        />
        <h1 className="mt-5">Track your portfolio with ease</h1>
        <p>
          Monitor stocks, analyze performance, and manage all your investments in one place.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;