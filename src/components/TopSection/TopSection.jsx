import React, { useState } from "react";
import "./TopSection.scss";
import Logo from "../../images/logo.svg";
import RightArrow from "../../images/icon-arrow.svg";
import SlideLeft from "../../images/icon-angle-left.svg";
import SlideRight from "../../images/icon-angle-right.svg";
import Hamburger from "../../images/icon-hamburger.svg";
import CloseMenu from "../../images/icon-close.svg";
import { pageData } from "../../data/data";

const TopSection = ({ setDisplayIndex, displayIndex }) => {
  const [showMenu, setShowMenu] = useState(false);

  const displayPage = pageData[displayIndex];

  //PAGE SLIDE FUNCTIONS
  const lastPage = pageData.length - 1;

  const slideLeft = () => {
    if (displayIndex == 0) {
      setDisplayIndex(lastPage);
    } else {
      setDisplayIndex(displayIndex - 1);
    }
  };

  const slideRight = () => {
    if (displayIndex == lastPage) {
      setDisplayIndex(0);
    } else {
      setDisplayIndex(displayIndex + 1);
    }
  };

  // TOGGLE MEUN FUNCTION

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className="topSection">
      <section className="left">
        <img src={displayPage.image} alt="hero-img" className="hero" />
        <nav>
          <img
            src={Hamburger}
            alt="hamburger"
            className="hamburger"
            onClick={toggleMenu}
          />
          <div className="logo">
            {" "}
            <img src={Logo} alt="logo" className="logoImg" />
          </div>

          <ul className={`navLinks ${showMenu ? 'show': ''}`}>
            <img
              src={CloseMenu}
              alt="close"
              className="closeMenu"
              onClick={toggleMenu}
            />
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>

        <div className="MoblieSlideBtnsWrapper">
          <button onClick={slideRight}>
            <img src={SlideLeft} alt="slide" />
          </button>
          <button onClick={slideRight}>
            <img src={SlideRight} alt="slide" />
          </button>
        </div>
      </section>

      <section className="right">
        <h1>{displayPage.title}</h1>

        <p>{displayPage.info}</p>

        <button className="shopBtn">
          Shop now
          <img src={RightArrow} alt="arrow" />
        </button>

        <div className="slideBtnsWrapper">
          <button onClick={slideRight}>
            <img src={SlideLeft} alt="slide" />
          </button>
          <button onClick={slideRight}>
            <img src={SlideRight} alt="slide" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default TopSection;
