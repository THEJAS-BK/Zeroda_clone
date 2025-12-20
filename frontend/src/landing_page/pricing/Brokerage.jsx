import EquityTable from "./EquityTable";
import CurrencyTable from "./CurrencyTable";
import CommodityTable from "./CommodityTable";
import "./Brokerage.css";
import { useState } from "react";
function Brokerage() {
  let [activeTab, setActiveTab] = useState("Equity");
  return (
  <div className="container">
    <div className="row offset-1">
      <h3 className={`col-2 colorBlue text-center  ${activeTab==="Equity"?"BrokeHead":""}`}
      
      onClick={()=>setActiveTab("Equity")}
      >Equity</h3>
      <h3 onClick={()=>setActiveTab("Currency")} className={`col-2 colorBlue text-center  ${activeTab==="Currency"?"BrokeHead":""}`}>Currency</h3>
      <h3 onClick={()=>setActiveTab("Commodity")}className={`col-2 colorBlue text-center  ${activeTab==="Commodity"?"BrokeHead":""}`} >Commodity</h3>
      <hr />
    </div>
    <div className="row offset-1 mt-1">
     {activeTab==="Equity" &&  <EquityTable/>}
     {activeTab==="Currency" && <CurrencyTable/>}
    {activeTab==="Commodity" && <CommodityTable/>}  
    </div>
    <p className="anchorTag text-center fs-5"><a href="/" className="anchorTag text-center">Calculate your costs upfront</a> using our brokerage calculator</p>
  </div>
  );
}

export default Brokerage;
