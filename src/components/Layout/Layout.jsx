import React from "react";
import "./Layout.scss";
import TopSection from "../TopSection/TopSection";
import BottomSection from "../BottomSection/BottomSection";

const Layout = ({ setDisplayIndex, displayIndex }) => {
  return (
    <div className="layout">
      <TopSection setDisplayIndex={setDisplayIndex} displayIndex={displayIndex}/>
      <BottomSection />
    </div>
  );
};

export default Layout;
