export default function Universe(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h2 className="text-center my-5">The Zerodha Universe</h2>
                    <p className="text-center mb-5">Extend your trading and investment experience even further with our partner platforms</p>  
                    <div className="d-flex flex-wrap justify-content-end">
                        <div className="d-flex flex-column gap-3  mb-4" style={{width:"33%"}}>
                            <img style={{width:"12rem"}} src="/media/images/zerodhaFundhouse.png" alt="" />
                            <span style={{fontSize:"0.9rem"}}>
                                Our asset management venture 
                                <br />
                                that is creating simple and transparent index 
                                <br />
                                funds to help you save for your goals.
                            </span>
                        </div>
                           <div className="d-flex flex-column gap-3  mb-5" style={{width:"33%"}}>
                            <img style={{width:"15rem",marginTop:"0.25rem",marginBottom:"0.5rem"}} src="/media/images/sensibullLogo.svg" alt="" />
                            <span style={{fontSize:"0.9rem"}}>
                                Options trading platform that lets you 
                                <br />
                                    that is creating simple and transparent index 
                                <br />
                               data points like open interest, FII/DII, and more.
                            </span>
                        </div>
                           <div className="d-flex flex-column gap-3 justify-content-start mb-4" style={{width:"33%"}}>
                            <img style={{width:"10rem"}} src="/media/images/tijori.svg" alt="" />
                            <span style={{fontSize:"0.9rem"}}>
                                Investment research platform 
                                <br />
                                that offers detailed insights on stocks, 
                                <br />
                               sectors, supply chains, and more.
                            </span>
                        </div>
                         <div className="d-flex flex-column gap-3  mb-4" style={{width:"33%"}}>
                            <img style={{width:"12rem"}} src="/media/images/streakLogo.png" alt="" />
                            <span style={{fontSize:"0.9rem"}}>
                                Systematic trading platform 
                                <br />
                                that allows you to create and backtest 
                                <br />
                                strategies without coding.
                            </span>
                        </div>
                         <div className="d-flex flex-column gap-3  mb-4" style={{width:"33%"}}>
                            <img style={{width:"12rem"}} src="/media/images/smallcaseLogo.png" alt="" />
                            <span style={{fontSize:"0.9rem"}}>
                                Thematic investing platform 
                                <br />
                                that helps you invest in diversified  
                                <br />
                               baskets of stocks on ETFs.
                            </span>
                        </div>
                         <div className="d-flex flex-column gap-3  mb-4" style={{width:"33%"}}>
                            <img style={{width:"9rem"}} src="/media/images/dittoLogo.png" alt="" />
                            <span style={{fontSize:"0.9rem"}}>
                                Personalized advice on life 
                                <br />
                                and health insurance. No spam 
                                <br />
                                and no mis-selling.
                            </span>
                        </div>
                    </div>
                    
                </div>
                 <button
                     className="d-block mx-auto"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "0.25rem",
                padding: "0.5rem 1.25rem",
                fontSize: "1.25rem",
                marginTop: "2rem",
                width:"fit-content",
                marginBottom:"4rem"
            
              }}
            >
              Sign up for free
            </button>
            </div>
        </div>
    )
}