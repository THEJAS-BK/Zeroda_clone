export default function ThreeDots() {
    return (
      <div className="three-dots container">
        <div className="row p-4">
          <div style={{ width: "25%", textAlign: "center" }}>
            <img src="/media/images/kite-logo.svg" alt="" />
            <p
              style={{ fontSize: "1rem", color: "#666", fontWeight: "600" }}
              className="ThreeSpacingPara"
            >
              Kite
            </p>
            <p className="ThreeSpacingPara">Trading Platform</p>
          </div>
          <div style={{ width: "25%", textAlign: "center" }}>
            <img src="/media/images/console.svg" alt="" />
            <p
              style={{ fontSize: "1rem", color: "#666", fontWeight: "600" }}
              className="ThreeSpacingPara"
            >
              Console
            </p>
            <p className="ThreeSpacingPara">Backoffice</p>
          </div>
          <div style={{ width: "25%", textAlign: "center" }}>
            <img src="/media/images/kite-connect.svg" alt="" />
            <p
              style={{ fontSize: "1rem", color: "#666", fontWeight: "600" }}
              className="ThreeSpacingPara"
            >
              Kite Connect
            </p>
            <p className="ThreeSpacingPara">Trading APIs</p>
          </div>
          <div style={{ width: "25%", textAlign: "center" }}>
            <img src="/media/images/coin.svg" alt="" />
            <p
              style={{ fontSize: "1rem", color: "#666", fontWeight: "600" }}
              className="ThreeSpacingPara"
            >
              Coin
            </p>
            <p className="ThreeSpacingPara">Mutual funds</p>
          </div>
        </div>
        <div className="row">
          <div style={{ width: "33%" }}>
            <h6 style={{marginLeft:"2rem"}}>Utilities</h6>
            <ul>
              <li style={{listStyle:"none",textDecoration:"none"}}>Calculator</li>
              <li style={{listStyle:"none",textDecoration:"none"}}>Brokerage calculator</li>
              <li style={{listStyle:"none",textDecoration:"none"}}>Margin calculator</li>
              <li style={{listStyle:"none",textDecoration:"none"}}>SIP calculator</li>
            </ul>
          </div>
          <div style={{ width: "33%" }}>
            <h6 style={{marginLeft:"2rem"}}>Updates</h6>
            <ul>
              <li style={{listStyle:"none",textDecoration:"none"}}>Z-Connect blog</li>
              <li style={{listStyle:"none",textDecoration:"none"}}>Circulars / Bulletin</li>
              <li style={{listStyle:"none",textDecoration:"none"}}>IPOs</li>
              <li style={{listStyle:"none",textDecoration:"none"}}>Markets</li>
            </ul>
          </div>
          <div style={{ width: "33%"}}>
            <h6 style={{marginLeft:"2rem"}}>Education</h6>
            <div className="d-flex mt-4 justify-content-center align-items-center justify-content-evenly">
              <span>
                <img src="/media/images/varsity.png" alt="" />
                <p>Varsity</p>
              </span>
              <span>
                <img src="/media/images/tqna.png" alt="" />
                <p>Trading Q&A</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}