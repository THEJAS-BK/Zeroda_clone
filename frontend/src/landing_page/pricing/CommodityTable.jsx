export default function CommodityTable(){
    return(
         <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Commodity futures</th>
              <th>Commodity options</th>
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
              <td>0.01% on sell side (Non-Agri)</td>
              <td>0.05% on sell side</td>
            </tr>

            <tr>
              <th>Transaction charges</th>
              <td>
                MCX: 0.0021%
                <br />
                NSE: 0.0001%
              </td>
              <td>
                MCX: 0.0418%
                <br />
                NSE: 0.001%
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
              <td>
                Agri:₹1 / crore
                <br />
                Non-agri:₹10 / crore
              </td>
              <td>₹10 / crore</td>
            </tr>

            <tr>
              <th>Stamp charges</th>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}