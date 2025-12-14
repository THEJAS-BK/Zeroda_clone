export default function Inverst(){
    return(
        <div className="container" style={{marginTop:"8rem"}}>
            <div className="row mt-5">
                    <h2 className="text-center">Investment options with Zerodha demat account</h2>
                <div className="col-10 offset-1 " style={{marginTop:"5rem"}}>
                    <div className="row">
                        <div className="col-6 d-flex flex-column">
                        <div className="d-flex">
                        <img src="/media/images/stocks-acop.svg" alt="" />
                        <span className="ms-5"><h4>Stocks</h4>
                        <p>inverst in all exchange-listed securities</p></span>
                        </div>
                        <div className="d-flex mt-5">
                            <img src="/media/images/ipo-acop.svg" alt="" />
                           <span className="ms-4">
                             <h4>IPO</h4>
                            <p>Apply to latest IPOs instantly via UPI</p></span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex">
                            <img src="/media/images/mf-acop.svg" alt="" />
                            <span className="ms-5"><h4>Mutual Funds</h4>
                            <p>Invest in commission-free direct mutual funds</p></span>
                        </div>
                        <div className="d-flex mt-5">
                            <img src="/media/images/fo-acop.svg" alt="" />
                            <span className="ms-5"><h4>Futures & Options</h4>
                            <p>Hedge and mitigate market risk through simplified F&O trading</p></span>
                        </div>
                    </div>
                    </div>
                       <div style={{display:"flex",justifyContent:"center",marginTop:"5rem",marginRight:"90px"}}>
                <button className="btn" style={{color:"white",padding:"0.5rem 1.5rem",fontSize:"1.2rem",fontWeight:"500",backgroundColor:"#387ed1"}}>Explore Inverstment</button>
            </div>
                </div>
            </div>
         
        </div>
    )
}