export default function CurrencyTable(){
    return(
         <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Currency futures</th>
              <th>Currency options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Brokerage</th>
              <td>0.03% or ₹20/executed order (whichever is lower)</td>
              <td>₹20/executed order</td>
            </tr>

            <tr>
              <th>STT / CTT</th>
              <td>No STT</td>
              <td>No STT</td>
            </tr>

            <tr>
              <th>Transaction charges</th>
              <td>
                NSE: 0.00035%
                <br />
                BSE: 0.00045%
              </td>
              <td>
                NSE: 0.0311%
                <br />
                BSE: 0.001%
              </td>
            </tr>

            <tr>
              <th>GST</th>
              <td>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>

            <tr>
              <th>SEBI charges</th>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            <tr>
              <th>Stamp charges</th>
              <td>0.0001% or ₹10 / crore on buy side</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}