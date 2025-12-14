export default function SignBenefits(){
    return(
        <div className="container">
            <div className="row offset-1">
                <div className="col-5 d-flex flex-column justify-content-center" style={{marginRight:"3rem"}}>
                    <img src="/media/images/acop-benefits.svg" style={{width:"90%",marginLeft:"2rem"}} alt="" />
                    <h4 className="mt-5" style={{fontSize:"1.35rem",width:"100%"}}>Benefits of opening a Zerodha demat account</h4>
                    </div>
                <div className="col-5 ms-5">
                    <div>
                        <h4>Unbeatable pricing</h4>
                        <p className="col-10">Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    </div>
                    <div>
                        <h4 className="mt-4">Best investing experience</h4>
                        <p className="col-10">Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    </div>
                    <div>
                        <h4 className="mt-4">No spam or gimmicks</h4>
                        <p className="col-10">Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    </div>
                    <div>
                        <h4 className="mt-4">The Zerodha universe</h4>
                        <p className="col-10">More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}