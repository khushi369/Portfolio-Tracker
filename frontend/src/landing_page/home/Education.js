import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "70%" }} alt="Education" />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Learn portfolio management</h1>
          <p>
            Understand how to track your investments, analyze performance,
            and make informed decisions with our free resources.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Documentation <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            Join our community to discuss portfolio strategies, share insights,
            and get answers to your questions.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Community Forum <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;