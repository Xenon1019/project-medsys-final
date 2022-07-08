import React from "react";
import "./fssai_central.css";

import Header from "./Header";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import {TabTitle} from '../../Utillity';


function App() {
  TabTitle('FSSAI Central License - medsysconsultancy.com');
  
  return (
    <>
      <Header />
      <section className="main-content">
        <LeftContent />
        <RightContent />
      </section>
    </>
  );
}

export default App;
