export default function SupportPortal() {
    return(
            <div clasName="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f6f6f6", width: "100%",height:"30vh" }}>
        <div className="container" style={{backgroundColor:"#f6f6f6"}}>
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-between mt-5">
                        <h2>Support Portal</h2>
                        <button className="btn btn-primary">My tickets</button>
                    </div>
                   <div className="mt-4 d-flex border p-2 align-items-center justify-content-center" style={{backgroundColor:"white",borderRadius:"5px"}}>
                    <span style={{height:"100%",width:"4%"}}><i className="ms-2 p-2 fa-solid fa-magnifying-glass"></i></span>
                    <input
                    className="p-2 no-border w-100"
                    style={{outline:"none",border:"none"}}
                     type="text" placeholder="Eg: How do I open my account, How do i activate F&O..." />
                   </div>
                </div>
            </div>
            </div>
        </div>
    )
}