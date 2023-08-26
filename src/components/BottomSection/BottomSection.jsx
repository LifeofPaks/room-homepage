import React from "react";
import Image1 from "../../images/image-about-dark.jpg";
import Image2 from "../../images/image-about-light.jpg";
import './BottomSection.scss'

const BottomSection = () => {
  return (
    <main className="bottomSection">
      <article>
        <section>
          <img src={Image1} alt="about-img" />
        </section>
        <section className="aboutDetails">
            <h1> About our furniture</h1>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
        </section>
        <section>
          <img src={Image2} alt="about-img" />
        </section>
      </article>
    </main>
  );
};

export default BottomSection;
