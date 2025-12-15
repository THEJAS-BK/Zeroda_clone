export default function Coin(){
    return(
        <div className="container">
            <div className="row offset-1">
                <div className="col">
                    <img src="/media/images/coin.png" alt="" />
                </div>
                     <div className="col-5 offset-1 d-flex flex-column justify-content-center gap-4">
                    <h3>Kite</h3>
                    <p style={{width:"90%",fontSize:"1.1rem"}}>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>
                    <div>
                        <a href="/" className="anchorTag fs-5">Coin →</a>
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