import styled from "styled-components";
import { useEffect } from "react";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Section13 from "./Section13";





import 'animate.css';
import WOW from 'wowjs';
// "../../Assets/Images/Icons/color-seperator.png"
const Home = () => {
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
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>
        <Section11/>
        <Section12/>
        <Section13/>



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
export default Home;
