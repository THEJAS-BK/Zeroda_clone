import { useState } from "react";
import {Link} from "react-router-dom";
import ThreeDots from "./ThreeDots";
export default function Navbar() {
  let [active,setActive]=useState(false);
  let Clicked=()=>{
    setActive(!active);
  }
  return (
    <> 
    {active && <ThreeDots />}
       <nav
      className="navbar navbar-expand-lg py-3 mb-4cha"
      style={{ backgroundColor: "#fff",position:"sticky",top:"0" }}
    >
      <div className="container">
        <Link className="navbar-brand" style={{ marginLeft: "12rem" }} to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "28%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" style={{fontSize:"1rem"}} aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{fontSize:"1rem"}} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" style={{fontSize:"1rem"}} to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{fontSize:"1rem"}} aria-disabled="true" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{fontSize:"1rem"}} aria-disabled="true" to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item" onClick={Clicked}>
              <i
                style={{
                  marginTop: "14%",
                  marginLeft: "40px",
                  fontSize: "1.5rem",
                  position: "relative",
                }}
                className="fa-solid fa-bars"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

