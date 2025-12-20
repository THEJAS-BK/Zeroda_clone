export default function Charges() {
    return(
        <div className="container mt-4">
   <div className="row" style={{marginTop:"8rem"}}>
              <h1 className="offset-1">Charges for account opening</h1>
  <div className="col-11 offset-1  overflow-hidden mt-3" >   
    <table className="table mb-0" >
      <thead className="table-light" >
        <tr>
          <th>Type of account</th>
          <th className="text-center">Charges</th>
        </tr>
      </thead>

      <tbody style={{padding:"2rem"}}>
        <tr>
          <td>Online account</td>
          <td className="text-center">
            <span className="badge bg-success">FREE</span>
          </td>
        </tr>
        <tr>
          <td>Offline account</td>
          <td className="text-center">
            <span className="badge bg-success">FREE</span>
          </td>
        </tr>

        <tr>
          <td>NRI account (offline only)</td>
          <td className="text-center">₹ 500</td>
        </tr>

        <tr>
          <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
          <td className="text-center">₹ 500</td>
        </tr>
      </tbody>
    </table>
  </div>
   </div>
  <div className="row" style={{marginTop:"7rem"}}>
     <h1 className="offset-1">Demat AMC (Annual Maintenance Charge)</h1>
  <div className="col offset-1 mt-3 overflow-hidden b-0">
    <table className="table mb-0">
        <thead className="table-light">
           <tr>
             <th>Value of holdings</th>
            <th>AMC</th>
           </tr>
        </thead>
         <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="badge bg-success">FREE*</span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh – ₹10 lakh</td>
              <td>₹100 per year, charged quarterly*</td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹300 per year, charged quarterly</td>
            </tr>
          </tbody>
    </table>
  </div>
    <p className="offset-1 mt-3" style={{fontSize:"0.75rem"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA,<a href="/" className="anchorTag"> click here</a>.</p>
  </div>
    <div className="row" style={{marginTop:"5rem"}}>
        <h2 className="offset-1">Charges for optional value added services</h2>
        <div className="col offset-1">
            <table class="table">
  <thead>
    <tr>
      <th>Service</th>
      <th>Billing Frequency</th>
      <th>Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tickertape</td>
      <td>Monthly / Annual</td>
      <td>Free: 0 | Pro: 249/2399</td>
    </tr>
    <tr>
      <td>Smallcase</td>
      <td>Per transaction</td>
      <td>Buy & Invest More: 100 | SIP: 10</td>
    </tr>
    <tr>
      <td>Kite Connect</td>
      <td>Monthly</td>
      <td>Connect: 500 | Personal: Free</td>
    </tr>
  </tbody>
</table>

        </div>
      
    </div>
</div>

    )
}