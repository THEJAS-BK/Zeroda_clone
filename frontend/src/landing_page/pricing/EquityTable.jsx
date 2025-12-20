export default function EquityTable() {
    return(
       <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
             <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O – Futures</th>
              <th>F&amp;O – Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Brokerage</th>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20/executed order (whichever is lower)</td>
              <td>0.03% or ₹20/executed order (whichever is lower)</td>
              <td>Flat ₹20 per executed order</td>
            </tr>

            <tr>
              <th>STT / CTT</th>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on sell side</td>
              <td>0.02% on sell side</td>
              <td>
                <ul className="mb-0 ps-3">
                  <li>0.125% on intrinsic value (exercised)</li>
                  <li>0.1% on sell side (premium)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th>Transaction charges</th>
              <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
              <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
              <td>NSE: 0.00173%<br />BSE: 0</td>
              <td>NSE: 0.03503%<br />BSE: 0.0325%</td>
            </tr>

            <tr>
              <th>GST</th>
              <td>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI  charges + transaction charges)</td>
            </tr>

            <tr>
              <th>SEBI charges</th>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            <tr>
              <th>Stamp charges</th>
              <td>0.015% or ₹1500 / crore (buy side)</td>
              <td>0.003% or ₹300 / crore (buy side)</td>
              <td>0.002% or ₹200 / crore (buy side)</td>
              <td>0.003% or ₹300 / crore (buy side)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}