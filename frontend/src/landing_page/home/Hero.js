function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <img
          src="media/images/homeHero.svg"
          alt="heroImage"
          className="mb-5 col-8 offset-2 mt-5"
          style={{ height: "45vh" }}
        />
        <h3 className="mt-4">Invest in everything</h3>
        <p className="mt-2 fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          style={{ width: "15%", margin: "0 auto",fontWeight:"600",opacity:"0.75"}}
          className="btn btn-primary fs-5 mt-5"
        >
          SignUp now
        </button>
      </div>
    </div>
  );
}

export default Hero;
