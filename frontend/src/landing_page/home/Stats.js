import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Track with confidence</h1>
          <h2 className="fs-4">Real-time updates</h2>
          <p className="text-muted">
            Get live stock prices and portfolio values without refreshing.
          </p>
          <h2 className="fs-4">No clutter</h2>
          <p className="text-muted">
            Clean, focused interface with no distracting ads or notifications.
          </p>
          <h2 className="fs-4">Complete visibility</h2>
          <p className="text-muted">
            See all your holdings, trade history, and performance charts in one dashboard.
          </p>
          <h2 className="fs-4">Make informed decisions</h2>
          <p className="text-muted">
            Analyze your portfolio with detailed profit/loss calculations and trends.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} alt="Dashboard preview" />
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              View on GitHub{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Live Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;