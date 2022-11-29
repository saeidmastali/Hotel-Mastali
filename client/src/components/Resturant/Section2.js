import colorSeprator from "../../Assets/Images/Icons/color-seperator.png";
import aboutImg1 from "../../Assets/Images/Slider/1.jpg";
import aboutImg2 from "../../Assets/Images/Slider/2.jpg";
import aboutImg3 from "../../Assets/Images/Slider/3.jpg";
import aboutImg4 from "../../Assets/Images/Slider/4.jpg";
import aboutImg5 from "../../Assets/Images/Slider/5.jpg";
import aboutImg6 from "../../Assets/Images/Slider/6.jpg";
import aboutImg7 from "../../Assets/Images/Slider/7.jpg";
import aboutImg8 from "../../Assets/Images/Slider/8.jpg";
import aboutImg9 from "../../Assets/Images/Slider/9.jpg";
import aboutImg10 from "../../Assets/Images/Slider/10.jpg";
import aboutImg11 from "../../Assets/Images/Slider/11.jpg";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
const fadeInRight = keyframes`
    0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    }
    100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    }

`;
const Section2 = () => {
  const slidArray = [
    aboutImg1,
    aboutImg2,
    aboutImg3,
    aboutImg4,
    aboutImg5,
    aboutImg6,
    aboutImg7,
    aboutImg8,
    aboutImg9,
    aboutImg10,
    aboutImg11,
  ];
  const [slidSrc, setSlidSrc] = useState(slidArray[0]);
  useEffect(() => {
    const intervalHandler = setInterval(() => {
      setSlidSrc(slidArray[Math.floor(Math.random() * 8)]);
    }, 7000);

    return () => {
      clearInterval(intervalHandler);
    };
  }, []);
  const SlidClick = (cnt) => {
    if (cnt === 1 && slidSrc === aboutImg11) setSlidSrc(aboutImg1);
    else if (cnt === -1 && slidSrc === aboutImg1) setSlidSrc(aboutImg11);
    else setSlidSrc(slidArray[slidArray.indexOf(slidSrc) + cnt]);
  };
  return (
    <div>
      <Section
        className="container-fluid wow fadeInRightBig"
        id="about"
        data-wow-duration="3s"
      >
        <div class="container">
          <div class="row gx-5 gy-5">
            <div class="col-md-6">
              <div class="about-title">
                <h1>Discover</h1>
                <h4>Our story</h4>
                <br />
                <img src={colorSeprator} alt="color seperator" />
              </div>
              <br />
              <AboutDesc class="about-description">
                <p>
                  The History of Kitchens and Cooks gives further intimation on
                  Mr Mastali usual menu, stating confidently that "Mastali
                  served salted poultry and fresh eggs, all presented without a
                  tablecloth on small marble tables". Numerous commentators have
                  also referred to the supposed restaurant owner's eccentric
                  habit of touting for custom outside his establishment, dressed
                  in aristocratic fashion and brandishing a sword.
                </p>
                <p>
                  Numerous commentators have also referred to the supposed
                  restaurant owner's eccentric habit of touting for custom
                  outside his establishment, dressed in aristocratic fashion and
                  brandishing a sword.
                </p>
              </AboutDesc>
              <br />
              <MenuLink >
                <a href="#menu">Discover our menu</a>
              </MenuLink>
            </div>
            <div class="col-md-6">
              <div class="swiper-container mySwiper custom-about-swiper-container">
                <Slider src={slidSrc} />
                <div
                  onClick={() => SlidClick(1)}
                  class="swiper-button-next"
                ></div>
                <div
                  onClick={() => SlidClick(-1)}
                  class="swiper-button-prev"
                ></div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const Section = styled.section`

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
`
const MenuLink  =styled.div`
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
`
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
export default Section2;
