export default function Varsity() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-4 offset-2">
                    <img src="/media/images/varsity-products.svg" alt="" />
                </div>
                      <div className="col-5 offset-1 d-flex flex-column justify-content-center gap-4">
                    <h3>Varsity mobile</h3>
                    <p style={{width:"90%",fontSize:"1.1rem"}}>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>
                    <div>
                        <img src="/media/images/googlePlayBadge.svg" alt="" />
                        <img className="ms-5"  src="/media/images/appstoreBadge.svg" alt="" />
                    </div>
                </div>
                <p className="fs-4 text-center mt-5">Want to know more about our technology stack? Check out the <a href="/" className="anchorTag">Zerodha.tech</a> blog.</p>
            </div>
        </div>
    )
}