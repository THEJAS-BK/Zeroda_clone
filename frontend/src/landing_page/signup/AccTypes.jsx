import "./AccTypes.css";
export default function AccTypes() {
    return (
    <div className="container mt-5">
        <div className="row offset-1">
            <h2 className="text-center mt-5">Explore different account types</h2>
           <div className="accMain mt-5">
             <div className="accBox">
                <p className="fs-5 fw-medium opacity-100 ">individual Account</p>
                <p className="fw-normal opacity-75">invest in equity, mutual funds and derivatives</p>
            </div>
                <div className="accBox">
                    <p className="fs-5 fw-medium opacity-100 ">HUF Accound</p>
                    <p className="fw-normal opacity-75"> Make tax-efficient investments for your family</p>
            </div>
            <div className="accBox">
                <p className="fs-5 fw-medium opacity-100 ">NRI Account</p>
                <p className="fw-normal opacity-75">invest in equity, mutual funds, debentures, and more</p>
            </div>
            <div className="accBox">
                <p className="fs-5 fw-medium opacity-100 ">Minor Account</p>
                <p className="fw-normal opacity-75">Teach your little ones about money & invest for their future with them</p>
            </div>
            <div className="accBox">
                <p className="fs-5 fw-medium opacity-100 ">Corporate/LLP/Partnership</p>
                <p className="fw-normal opacity-75">Manage your business surplus and investments</p>
            </div>

           </div>
            
        </div>
    </div>
    );
}