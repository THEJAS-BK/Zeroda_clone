export default function KiteCon(){
    return(
        <div className="container">
            <div className="row offset-1">
                <div className="col-4 d-flex flex-column justify-content-center">
                  <h2>Console</h2>  
                  <p className="mt-3">The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.</p>
                  <a href="/" className="anchorTag">Learn more →</a>
                </div>
                <div className="col offset-1">
                    <img src="/media/images/console.png" alt="" />
                </div>
            </div>
        </div>
    )
}