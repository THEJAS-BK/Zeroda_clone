import "./Status.css"
function Status() {
  return (
    <div
      className="container"
      style={{ marginTop: "7rem", marginBottom: "6rem" }}
    >
      <div className="row p-4">
        <div className="col-6">
          <h2 className="mb-4 offset-1">Unbeatable pricing</h2>
          <p className="col-10 offset-1">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="anchorTag offset-1" href="/">
            See pricing
            <i
              style={{ fontSize: "0.75rem" }}
              className="fa-solid fa-arrow-right"
            ></i>
          </a>
        </div>
        <div className="col-6 mt-5">
          <div className="d-flex">
            <div className="alignment">
              <img
                src="media/images/pricing-eq.svg"
                style={{ width: "132px" }}
                alt="not usefull"
              />
              <p className="Text_size">
                Free account
                <br />
                opening
              </p>
            </div>
            <div className="alignment" style={{width:"35%"}}>
              <img
                src="media/images/pricing-eq.svg"
                style={{ width: "132px" }}
                alt="not used"
              />
              <p className="Text_size">
                Free equity delivery <span>and direct mutual funds</span>
              </p>
            </div>
            <div className="alignment">
              <img
                src="media/images/other-trades.svg"
                style={{ width: "132px" }}
                alt="Not used"
              />
              <p className="Text_size">intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Status;
