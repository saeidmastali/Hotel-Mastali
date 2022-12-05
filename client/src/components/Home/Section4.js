import styled from "styled-components";
import discoverImg1 from "../../Assets/Images/Slider/1.jpg";
import discoverImg2 from "../../Assets/Images/Gallery/room-2.jpg";
import discoverImg3 from "../../Assets/Images/Gallery/room-3.jpg";
import discoverImg4 from "../../Assets/Images/Gallery/room-4.jpg";
import discoverImg5 from "../../Assets/Images/Gallery/room-5.jpg";
import discoverImg6 from "../../Assets/Images/Gallery/room-6.jpg";
import discoverImg7 from "../../Assets/Images/Gallery/room-7.jpg";
import discoverImg8 from "../../Assets/Images/Gallery/room-8.jpg";
import discoverImg9 from "../../Assets/Images/Gallery/room-9.jpg";
import discoverImg10 from "../../Assets/Images/Gallery/room-10.jpg";
import discoverImg11 from "../../Assets/Images/Gallery/room-11.jpg";
import colorSeperator from "../../Assets/Images/Icons/color-seperator.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Section4 = () => {
  const slidArray = [
    discoverImg1,
    discoverImg2,
    discoverImg3,
    discoverImg4,
    discoverImg5,
    discoverImg6,
    discoverImg7,
    discoverImg8,
    discoverImg9,
    discoverImg10,
    discoverImg11,
  ];
  const [slidSrc, setSlidSrc] = useState(slidArray[0]);
  useEffect(() => {
    const intervalHandler = setInterval(() => {
      setSlidSrc(slidArray[Math.floor(Math.random() * 11)]);
      console.log("section-4", slidSrc);
      console.log("section-4=discoverImg1", discoverImg1);
    }, 7000);

    return () => {
      clearInterval(intervalHandler);
    };
  }, []);
  const SlidClick = (cnt) => {
    if (cnt === 1 && slidSrc === discoverImg11) setSlidSrc(discoverImg1);
    else if (cnt === -1 && slidSrc === discoverImg1) setSlidSrc(discoverImg11);
    else setSlidSrc(slidArray[slidArray.indexOf(slidSrc) + cnt]);
  };
  return (
    
      <SectionWrraper
        className="container-fluid wow fadeInRightBig"
        id="Rooms"
        data-wow-duration="3s"
      >
        <div className="container">
          <div className="row gx-5 gy-5">
            <div className="col-md-6">
              <SildWrraper>
                <Slider src={slidSrc}>
                  <div
                    onClick={() => SlidClick(1)}
                    className="swiper-button-next custom-swiper-next"
                  ></div>
                  <div
                    onClick={() => SlidClick(-1)}
                    className="swiper-button-prev custom-swiper-prev"
                  ></div>
                  <div className="swiper-pagination"></div>
                </Slider>
              </SildWrraper>
            </div>
            <div className="col-md-6">
              <About className="about-title ">
                <h1>Our Hotel</h1>
                <Title>Mastali Hotel</Title>
                <br />
                <img src={colorSeperator} alt="color seperator" />
              </About>
              <br />
              <AboutDesc>
                <p>
                welcomes you in a real cosmopolitan, pulsing milieu, at the same time offering peace and intimate retirement, just in the heart of the city centre. Timeless elegance tailored for the demands of our time; exceptional combination of magnificent architecture and divine cuisine, in perfect harmony. A Michelin-starred restaurant and a beautifully restored town palace joined forces for you!
                </p>

              </AboutDesc>
              <br />
              <MenuLink>
                <a href="http://localhost:3000/Rooms">Room reservation</a>
              </MenuLink>
              <MenuLink>
                <a href="http://localhost:3000/#gallery">View Gallery</a>
              </MenuLink>
            </div>
          </div>
        </div>
      </SectionWrraper>
    
  );
};

const SectionWrraper = styled.section`
  min-height: calc(100vh - 0px);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center !important;
  justify-content: center !important;
`;

const AboutDesc = styled.div`
  font-family: var(--secondaryFontFamily);
  text-align: justify;
`;
const MenuLink = styled.div`
  text-align: left;
  font-family: var(--additionalFontFamily);
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: var(--primaryColor);
    letter-spacing: 3px;
    font-size: 20px;
    transition: var(--primaryTransition);
    font-style: normal;
    font-weight: bolder;
  }
  a:hover {
    color: var(--primaryHoverColor);
  }
`;

const Title = styled.h4`
::before {
    left: 9% !important;
}

::after {
    left: 78% !important;
}
`
const About = styled.div`
    margin-top: 60px;
`
const SildWrraper = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 85px;
  cursor: e-resize;
`;
const Slider = styled.div`
  background: url(${(slid) => slid.src});
  /* background: red; */
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-size: cover !important;
  transition-property: transform;
  transform: translate3d(0, 0, 0);
`;
export default Section4;
