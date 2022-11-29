import styled from "styled-components";
import { useEffect } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import 'animate.css';
import WOW from 'wowjs';
// "../../Assets/Images/Icons/color-seperator.png"
const Resturant = () => {
  new WOW.WOW({
    live: false
  }).init();
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <Wrapper>
      {/* <h1 className="wow flipInY" data-wow-duration="20">An animated element</h1> */}
      <section class="wow flipInY" data-wow-duration="8s">
        An animated elemen
      </section>

        <Section1/>
        <Section2/>
        <Section3/>
 
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-size: 2em;
  font-weight: bold; */
`;
export default Resturant;
