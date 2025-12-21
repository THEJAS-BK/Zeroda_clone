export default function OtherInfo() {
  return (
    <div className="container">
      <div className="row mt-5">
        {/* Right Section */}
        <div
          className="col-8 d-flex flex-column gap-5"
          style={{ padding: "0" }}
        >
          <div className="group">
            <details>
              <summary>
                <div className="left">
                  <div>
                    <span className="icon">
                      <i className="icon-blue fa-solid fa-circle-plus"></i>
                    </span>
                    <span className="title">Account Opening</span>
                  </div>
                  <i className="icon-blue fa-solid fa-angle-up"></i>
                </div>
              </summary>
              <ul className="content d-flex flex-column justify-content-center">
                <li className="dropDownContent">
                  Resident individual
                </li>
                <li className="dropDownContent">Minor</li>
                <li className="dropDownContent">Non Resident Indian (NRI)</li>
                <li className="dropDownContent">Company, Partnership, HUF and LLP</li>
                <li className="dropDownContent">Glossary</li>
              </ul>
            </details>
          </div>
          <div className="group">
            <details className="support-accordion">
              <summary className="accordion-header">
                <div className="left">
                  <div>
                    <span className="icon">
                      <i class="icon-blue fa-solid fa-user"></i>
                    </span>
                    <span className="title">Your Zerodha Account</span>
                  </div>
                  <i class="icon-blue fa-solid fa-angle-up"></i>
                </div>
              </summary>

              <ul className="content">
                <li className="dropDownContent">Your Profile</li>
                <li className="dropDownContent">Account modification</li>
                <li className="dropDownContent">
                  Client Master Report (CMR) and Depository Participant (DP)
                </li>
                <li className="dropDownContent">Nomination</li>
                <li className="dropDownContent">Transfer and conversion of securities</li>
              </ul>
            </details>
          </div>
          <div className="group">
            <details className="support-accordion">
              <summary className="accordion-header">
                <div className="left">
                  <div>
                    <span className="icon">
                      <i class="icon-blue fa-solid fa-chart-line"></i>
                    </span>
                    <span className="title">Kite</span>
                  </div>
                  <i class="icon-blue fa-solid fa-angle-up"></i>
                </div>
              </summary>

              <ul className="content">
                <li className="dropDownContent">IPO</li>
                <li className="dropDownContent">Trading FAQs</li>
                <li className="dropDownContent">Margin Trading Facility (MTF) and Margins</li>
                <li className="dropDownContent">Charts and orders</li>
                <li className="dropDownContent">Alerts and Nudges</li>
                <li className="dropDownContent">General</li>
              </ul>
            </details>
          </div>
          <div className="group">
            <details className="support-accordion">
              <summary className="accordion-header">
                <div className="left">
                  <div>
                    <span className="icon">
                      <i class="icon-blue fa-solid fa-indian-rupee-sign"></i>
                    </span>
                    <span className="title">Funds</span>
                  </div>
                  <i class="icon-blue fa-solid fa-angle-up"></i>
                </div>
              </summary>

              <ul className="content">
                <li className="dropDownContent">Add money</li>
                <li className="dropDownContent">Withdraw money</li>
                <li className="dropDownContent">Add bank accounts</li>
                <li className="dropDownContent">eMandates</li>
              </ul>
            </details>
          </div>
          <div className="group">
            <details className="support-accordion">
              <summary className="accordion-header">
                <div className="left">
                  <div>
                    <span className="icon">
                      <i class="icon-blue fa-solid fa-chart-simple"></i>
                    </span>
                    <span className="title">Console</span>
                  </div>
                  <i class="icon-blue fa-solid fa-angle-up"></i>
                </div>
              </summary>

              <ul className="content">
                <li className="dropDownContent">Portfolio</li>
                <li className="dropDownContent">Corporate actions</li>
                <li className="dropDownContent">Funds statement</li>
                <li className="dropDownContent">Reports</li>
                <li className="dropDownContent">Profile</li>
                <li className="dropDownContent">Segments</li>
              </ul>
            </details>
          </div>
          <div className="group">
            <details className="support-accordion">
              <summary className="accordion-header">
                <div className="left">
                  <div>
                    <span className="icon">
                      <i class="icon-blue fa-solid fa-circle-dot"></i>
                    </span>
                    <span className="title">Coin</span>
                  </div>
                  <i class="icon-blue fa-solid fa-angle-up"></i>
                </div>
              </summary>

              <ul className="content">
                <li className="dropDownContent">Mutual funds</li>
                <li className="dropDownContent">National Pension Scheme (NPS)</li>
                <li className="dropDownContent">Features on Coin</li>
                <li className="dropDownContent">Payments and Orders</li>
                <li className="dropDownContent">General</li>
              </ul>
            </details>
          </div>
        </div>
        {/* Left section */}
        <div
          className="col-3 offset-1 d-flex flex-column"
          style={{ padding: "0", height: "100vh" }}
        >
          <div
            className="d-flex"
            style={{
              width: "100%",
              height: "22%",
              backgroundColor: "#eeeac3ff",
            }}
          >
            <div style={{ backgroundColor: "#ff9100", width: "10px" }}></div>
            <ul className="d-flex flex-column justify-content-center">
              <li style={{ color: "blue", width: "95%" }}>
                <a href="/" style={{ fontSize: "1rem" }}>
                  Introduction of new F&O contracts on 4 individual securities
                </a>
              </li>
              <li style={{ color: "blue", width: "95%" }}>
                <a href="/" style={{ fontSize: "1rem" }}>
                  Surveillance measure on scrips - December 2025
                </a>
              </li>
            </ul>
          </div>
          <table className="table mt-5" style={{ height: "50vh" }}>
            <thead style={{ backgroundColor: "#f2f2f2" }}>
              <th>Quick links</th>
            </thead>
            <tbody>
              <tr className="border">
                <td style={{ padding: "0.5rem 0.75rem", fontSize: "1.1rem" }}>
                  <a href="/" className="anchorTag removeBBlue">
                    1.Track account opening
                  </a>
                </td>
              </tr>
              <tr className="border">
                <td style={{ padding: "0.5rem 0.75rem", fontSize: "1.1rem" }}>
                  <a href="/" className="anchorTag removeBBlue">
                    2.Track segment activation
                  </a>
                </td>
              </tr>
              <tr className="border">
                <td style={{ padding: "0.5rem 0.75rem", fontSize: "1.1rem" }}>
                  <a href="/" className="anchorTag removeBBlue">
                    3.Intraday margins
                  </a>
                </td>
              </tr>
              <tr className="border">
                <td style={{ padding: "0.5rem 0.75rem", fontSize: "1.1rem" }}>
                  <a href="/" className="anchorTag removeBBlue">
                    4.Kite user manual
                  </a>
                </td>
              </tr>
              <tr className="border">
                <td style={{ padding: "0.5rem 0.75rem", fontSize: "1.1rem" }}>
                  <a href="/" className="anchorTag removeBBlue">
                    5.Learn how to create a ticket
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
