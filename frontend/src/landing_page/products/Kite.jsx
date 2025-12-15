export default function Kite(){
    return(
        <div className="container">
            <div className="row offset-1">
                <div className="col-6">
                    <img src="/media/images/products-kite.png" alt="" />
                </div>
                <div className="col-5 offset-1 d-flex flex-column justify-content-center gap-4">
                    <h3>Kite</h3>
                    <p style={{width:"90%",fontSize:"1.1rem"}}>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>
                    <div>
                        <a href="/" className="anchorTag fs-5">Try demo →</a>
                        <a href="/" className="anchorTag fs-5 ms-5">Learn more →</a>
                    </div>
                    <div>
                        <img src="/media/images/googlePlayBadge.svg" alt="" />
                        <img className="ms-5"  src="/media/images/appstoreBadge.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}