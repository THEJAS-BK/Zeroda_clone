import People from "./People";

function Team() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <h3 style={{ textAlign: "center", opacity: "0.95" }}>People</h3>
      <div className="row mt-5">
        <div className="col-4 offset-1 d-flex justify-content-end">
          <People
            person={"/media/images/nithinKamath.jpg"}
            name={"Nithin Kamath"}
            designation="Founder, CEO"
          />
        </div>
        <div className="col-5 ms-5">
          <p className="paraText">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="paraText">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="paraText">Playing basketball is his zen.</p>
          <p className="paraText">
            Connect on
            <a className="anchorTag ms-2" href="/" alt="homepage">
              Homepage
            </a>
            /
            <a className="anchorTag ms-2" href="/" alt="homepage">
              TradingQnA
            </a>
            /
            <a className="anchorTag ms-2" href="/" alt="Twitter">
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="row" style={{ marginLeft: "3rem",marginTop:"7rem" }}>
        <div className="col-4">
          <People
            person={"/media/images/NikhilKamath.jpg"}
            name={"Nikil Kamath"}
            designation={"co-founder & CFO"}
          />
        </div>
        <div className="col-4">
          <People
            person={"/media/images/Kailash.jpg"}
            name={"Dr. Kailash Nadh"}
            designation={"CTO"}
          />
        </div>
        <div className="col-4">
          <People
            person={"/media/images/Venu.jpg"}
            name={"Venu Madhav"}
            designation={"COO"}
          />
        </div>
      </div>
      <div className="row" style={{ marginLeft: "3rem" }}>
        <div className="col-4">
          <People
            person={"/media/images/Hanan.jpg"}
            name={"Hanan Delvi"}
            designation={"CCO"}
          />
        </div>
        <div className="col-4">
          <People
            person={"/media/images/Seema.jpg"}
            name={"Seema Patil"}
            designation={"Director"}
          />
        </div>
        <div className="col-4">
          <People
            person={"/media/images/karthik.jpg"}
            name={"Karthik Rangappa"}
            designation={"Chief of Education"}
          />
        </div>
      </div>
       <div className="row" style={{ marginLeft: "3rem" }}>
        <div className="col-4">
          <People
            person={"/media/images/Austin.jpg"}
            name={"Austin Prakesh"}
            designation={"Director Strategy"}
          />
          </div>
      </div>
    </div>
  );
}

export default Team;
