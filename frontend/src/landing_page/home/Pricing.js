import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Simple & transparent</h1>
          <p>
            No hidden fees, no complicated pricing. Just a clean portfolio
            tracking experience that's free to use.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Learn more{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6  mb-5">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">Free</h1>
              <p>
                Real-time portfolio tracking
                <br />
                and analytics
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">Open</h1>
              <p>Source code available
                <br />
                on GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;