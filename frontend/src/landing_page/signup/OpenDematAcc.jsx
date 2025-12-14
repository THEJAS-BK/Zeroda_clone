export default function OpenDematAcc(){
    return(   
        <div className="container" style={{marginTop:"5rem",marginBottom:"5rem",backgroundColor:"#F9FAFB",padding:"2rem",borderRadius:"10px"}}>
            <div className="row">
                <h2 className="text-center mt-5">Steps to open a demat account with Zerodha</h2>
                <div className="col-4 offset-2 mt-5">
                    <img src="/media/images/steps-acop.svg" alt="" />
                </div>
                <div className="col-4 ms-3 mt-5">
                    <div className="d-flex">
                        <div className="box">01</div>
                        <p className="fs-5 ms-2">Enter the requested details</p>
                    </div>
                      <hr className="m-2" />
                    <div className="d-flex">
                        <div className="box">02</div>
                        <p className="fs-5 ms-2">Complete e-sign & verification</p>
                      
                    </div>
                    <hr className="mt-2" />
                    <div className="d-flex">
                        <div className="box">03</div>
                        <p className="fs-5 ms-2">Start investing</p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}