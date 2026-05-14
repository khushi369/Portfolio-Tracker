import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <h3 className="fs-5">Frequently Asked Questions</h3>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}
            className="text-muted"
          >
            <li>How do I add stocks to my portfolio?</li>
            <li>Where does the live price data come from?</li>
            <li>Is my portfolio data stored securely?</li>
            <li>Can I export my portfolio to CSV?</li>
            <li>Is this platform free to use?</li>
            <li>How can I contribute to the project?</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <h3 className="fs-5">Need help?</h3>
          <p>Check the documentation or open an issue on GitHub.</p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;