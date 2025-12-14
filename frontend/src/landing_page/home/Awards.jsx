import "./Awards.css";
export default function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-4">
          <h3 className="mt-4 offset-1">Trust with confidence</h3>
          <div>
            <p className="mt-5 head-size offset-1">Customer-first always</p>
            <p className="col-9 para offset-1">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div>
            <p className="mt-4 head-size offset-1">No spam or gimmicks</p>
            <p className="col-9 para offset-1">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
              <span className="changeBlue">Our philosophies.</span>
            </p>
          </div>
          <div>
            <p className="mt-4 head-size offset-1">The Zerodha universe</p>
            <p className="col-9 para offset-1">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <p className="mt-4 head-size offset-1">Do better with money</p>
            <p className="col-9 para offset-1">
              With initiatives like <span className="changeBlue">Nudge</span>{" "}
              and
              <span className="changeBlue">Kill Switch</span>, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src="/media/images/AwardsEco.png"
            className="col-12 mt-3"
            alt="Eco_system"
          />
          <div className="row">
            <p className="col-6" style={{ textAlign: "center" }}>
              <a href="/" style={{ textDecoration: "none" }}>
                Explore out products
                <i
                  style={{ fontSize: "0.75rem" }}
                  className="fa-solid fa-arrow-right"
                ></i>
              </a>
            </p>
            <p className="col-6">
              <a href="/" style={{ textDecoration: "none" }}>
                Try kite demo
                <i
                  style={{ fontSize: "0.75rem" }}
                  className="fa-solid fa-arrow-right"
                ></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <img className="col-6 offset-3 mt-5" src="/media/images/AwardsFooter.png" alt="AwardsFooter" />
      </div>
    </div>
  );
}
