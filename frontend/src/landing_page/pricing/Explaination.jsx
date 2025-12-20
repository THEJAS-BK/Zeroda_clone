export default function Explaination() {
  return (
    <div className="container">
      <div className="row offset-1" style={{marginTop:"6rem"}}>
        <h3 style={{ color: "rgb(83, 78, 78)" }}>Charges explained</h3>
        <div className="col-5">
          <h5 className="fw-semibold mt-3">
            Securities/Commodities transaction tax
          </h5>
          <p className="text-muted mt-3">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="text-muted">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h5>Transaction/Turnover Charges</h5>
          <p className="text-muted">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <ul className="text-muted">
            <li>
              BSE transaction charges in XC, XD, XT, Z and ZP groups: ₹10,000
              per crore (w.e.f 01.01.2016)
            </li>
            <li>
              BSE transaction charges in SS and ST groups: ₹1,00,000 per crore
              of gross turnover
            </li>
            <li>
              BSE transaction charges for group A, B and other non-exclusive
              scrips: ₹375 per crore (w.e.f Dec 1, 2022)
            </li>
            <li>
              BSE transaction charges in M, MT, TS and MS groups: ₹275 per crore
              of gross turnover
            </li>
          </ul>
          <h5>Call & Trade</h5>
          <p className="text-muted">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h5>Stamp Charges</h5>
          <p className="text-muted">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h5>NRI Brokerage Charges</h5>
          <ul className="text-muted">
            <li>
              Non-PIS account: 0.5% or ₹50 per executed order (whichever is
              lower)
            </li>
            <li>
              PIS account: 0.5% or ₹200 per executed order (whichever is lower)
            </li>
            <li>₹500 + GST yearly account maintenance charges (AMC)</li>
          </ul>
          <h5>Account with Debit Balance</h5>
          <p className="text-muted">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20.
          </p>
          <h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
          <ul className="text-muted">
            <li>Equity & Futures: ₹10 per crore + GST</li>
            <li>Options: ₹50 per crore + GST (premium value)</li>
            <li>
              Currency: ₹0.05 per lakh + GST (Futures), ₹2 per lakh + GST
              (Options)
            </li>
          </ul>
          <h5>Margin Trading Facility (MTF)</h5>
          <ul className="text-muted">
            <li>MTF Interest: 0.04% per day (₹40 per lakh)</li>
            <li>MTF Brokerage: 0.3% or ₹20 per executed order</li>
            <li>MTF pledge charge: ₹15 + GST per ISIN</li>
          </ul>
        </div>
        <div className="col-5 offset-1">
          <h5 className="mt-3">GST</h5>
          <p className="text-muted">
            Tax levied by the government on the services rendered. 18% of
            (brokerage + SEBI charges + transaction charges)
          </p>
          <h5>SEBI Charges</h5>
          <p className="text-muted">
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>

          <h5>DP (Depository participant) charges</h5>
          <p className="text-muted">
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="text-muted">
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="text-muted">
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h5>Pledging charges</h5>
          <p className="text-muted">₹30 + GST per pledge request per ISIN.</p>
          <h5>AMC (Account maintenance charges)</h5>
          <p className="text-muted">
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000.
            <a href="/" className="text-decoration-none">
              Click here
            </a>
          </p>
          <p className="text-muted">
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days).
            <a href="/" className="text-decoration-none">
              Click here
            </a>
          </p>
          <h5>Corporate action order charges</h5>
          <p className="text-muted">
            ₹20 + GST will be charged for OFS / buyback / takeover / delisting
            orders placed through Console.
          </p>
          <h5>Off-market transfer charges</h5>
          <p className="text-muted">₹25 per transaction.</p>
          <h5>Physical CMR request</h5>
          <p className="text-muted">
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>

          <h5>Payment gateway charges</h5>
          <p className="text-muted">
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>

          <h5>Delayed Payment Charges</h5>
          <p className="text-muted">
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
            <a href="/" className="text-decoration-none">
              Learn more
            </a>
          </p>

          <h5>Trading using 3-in-1 account with block functionality</h5>
          <ul className="text-muted">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>
      <div className="offset-1 col-10" sytle={{fontSize:"0.7rem",marignTop:"4rem"}}>
        <h4 className="mt-5">Disclaimer</h4>
        <p className="mt-3" style={{lineHeight:"1.3rem",fontSize:"0.8rem",marginBottom:"7rem"}} >
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}
