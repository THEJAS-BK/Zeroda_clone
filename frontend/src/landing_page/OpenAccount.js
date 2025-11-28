function OpenAccount() {
  return (
    <div className="container mt-5">
      <div className="row" style={{ marginTop: "10rem" }}>
        <div className="col-8 offset-2 d-flex flex-column">
          <h3>Open a Zerodha account</h3>
          <p className="mt-2">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            style={{
              width: "20%",
              fontWeight: "600",
              opacity: "0.75",
            }}
            className="btn btn-primary fs-5 mt-2"
          >
            SignUp for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
