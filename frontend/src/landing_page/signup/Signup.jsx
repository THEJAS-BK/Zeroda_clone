function Signup() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h2 style={{ textAlign: "center", marginTop: "4rem" }}>
            Open a free demat and trading account online
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-5 offset-1">
          <img src="/media/images/signup1.svg" alt="kite" />
        </div>
        <div className="col-5 ms-5">
          <h4>Signup now</h4>
          <p>Or track your existing application</p>
          <div
            className="d-flex align-items-stretch"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "0.5rem",
              border: "2px solid grey",
            }}
          >
            <div
              style={{
                marginRight: "1rem",
                display: "flex",
                alignItems: "center",
                borderRight: "2px solid grey",
                padding: "1rem",
              }}
            >
              <img src="/media/images/india-flag.svg" alt="india Flag" />
              <span>+91</span>
            </div>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              style={{ border: "none", outline: "none", flex: 1 }}
              inputMode="numeric"
            />
          </div>
          <div
            className="row"
            style={{
              width: "15rem",
              opacity: "0.75",
              marginLeft: "0.25rem",
              marginTop: "2rem",
            }}
          >
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "0.25rem",
                padding: "0.75rem 1rem",
                fontSize: "1.25rem",
              }}
            >
              Get OTP
            </button>
          </div>
          <p style={{ fontSize: "0.75rem", marginTop: "0.95rem" }}>
            By proceeding, you agree to the Zerodha
            <a className="anchorTag ms-1 me-1" href="/">
              terms
            </a>
            &
            <a className="anchorTag ms-1" href="/">
              privacy policy
            </a>
          </p>
          <hr />
          <p style={{ fontSize: "0.75rem", marginTop: "0.95rem" }}>
            Looking to open NRI account? <a className="anchorTag" href="/">Click
            here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
