import React from "react";
function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-6 p-4 ml-5">
          <img
            className="offset-1 w-75"
            alt="Edu-image"
            src="/media/images/index-education.svg"
          />
        </div>
        <div className="col-6">
          <div className="h-50">
            <h2>Free and open education</h2>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="/">
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="/">
              Trading <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
