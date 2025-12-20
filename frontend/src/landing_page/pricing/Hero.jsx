function Hero() {
  return (
    <div className="container">
      <div className="row">
          <div className="col text-center">
           <h2
          className="col-6 offset-3 "
          style={{   
            marginTop: "6rem",
          }}
        >
        Charges
        </h2>
        <p style={{color:"#9b9b9b",marignBottom:"6rem",fontSize:"1.25rem"}}>List of all charges and taxes</p>
        </div>
      </div>
      <div className="row" style={{marginTop:"10rem", marginBottom:"6rem"}}>
        <div className="d-flex justify-content-around">
          <div style={{width:"32%"}} className="d-flex flex-column align-items-center">
            <img style={{width:"250px"}} src="/media/images/pricing-eq (1).svg" alt="zero images" />
            <h3>Free equity delivery</h3>
            <p style={{fontSize:"1rem",textAlign:"center",width:"70%"}}>All equity delivery investment(NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div style={{width:"32%"}} className="d-flex flex-column align-items-center">
            <img style={{width:"250px"}} src="/media/images/other-trades (1).svg" alt="twenty images" />
            <h3 style={{fontSize:"1.5rem"}}>Intraday and F&O trades </h3>
            <p style={{fontSize:"1rem",textAlign:"center",width:"75%"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div style={{width:"32%"}} className='d-flex flex-column align-items-center'>
            <img style={{width:"250px"}} src="/media/images/pricing-eq (1).svg" alt="zero"/>
              <h3>Free direct MF</h3>
              <p style={{fontSize:"1rem",textAlign:"center",width:"70%"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Hero;
