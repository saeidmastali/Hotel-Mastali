import styled, { keyframes } from "styled-components";
import color_seperator from "../../Assets/Images/Icons/color-seperator.png";
import slid1Src from "../../Assets/Images/Background/bg-1.jpeg";
import slid2Src from "../../Assets/Images/Background/bg-2.jpg";
import slid3Src from "../../Assets/Images/Background/bg-3.jpg";
import slid4Src from "../../Assets/Images/Background/bg-4.jpg";
import slid5Src from "../../Assets/Images/Background/bg-5.jpg";
import slid6Src from "../../Assets/Images/Background/bg-6.jpg";
import slid7Src from "../../Assets/Images/Background/bg-7.jpg";
import slid8Src from "../../Assets/Images/Background/bg-8.jpg";
import { useEffect } from "react";
import { useState } from "react";

const moveDown = keyframes`
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(50px);
    }

    100% {
        transform: translateY(0px);
    }
`

const Section1 = () => {
  const slidArray = [
    slid1Src,
    slid2Src,
    slid3Src,
    slid4Src,
    slid5Src,
    slid6Src,
    slid7Src,
    slid8Src,
  ];
  // let slidSrc = slidArray[1];
  const [slidSrc, setSlidSrc] = useState(slidArray[0]);
  useEffect(() => {
    const intervalHandler = setInterval(() => {
      setSlidSrc(slidArray[Math.floor(Math.random() * 8)]);
    }, 5000);

    return () => {
      clearInterval(intervalHandler);
    };
  }, []);
  const SlidClick = (cnt) => {
    if (cnt === 1 && slidSrc === slid8Src) setSlidSrc(slid1Src);
    else if (cnt === -1 && slidSrc === slid1Src) setSlidSrc(slid8Src);
    else setSlidSrc(slidArray[slidArray.indexOf(slidSrc) + cnt]);
  };
  return(
  <div>
    <SectionWrraper id="home" data-wow-duration="1s" data-wow-delay="6s">
      <div className="slider-title">
        <img src={color_seperator} alt="color seperator" />
        <br></br>
        <h1
          className="wow animated fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="2s"
        >
          Welcome to Hotel Mastali
        </h1>
        <p>
          One of the most reputed hotel in the Montreal
        </p>
        <br />
        <StarIcon>
          <CustomStarIcon className="fas fa-star"/>
        </StarIcon>
        <ScrollIcon  className="scroll-icon" >
          <a href="#about">
            <ScrollDown
              className="fas fa-angle-double-down"
              title="Scroll Down"
            ></ScrollDown>
          </a>
        </ScrollIcon>
      </div>
      <Container >
        <SwiperWrapper >
          <Slider slidImg={slidSrc}/>
        </SwiperWrapper>
        <div 
          onClick={() => SlidClick(1)} 
          className="swiper-button-next custom-swiper-next"></div>
        <div
          onClick={() => SlidClick(-1)}
          className="swiper-button-prev custom-swiper-prev"
        ></div>
        <div ></div>
      </Container>
    </SectionWrraper>

    {/* <!-- ====== SECTION - 1 END   ====== --> */}
  </div>)
};


const StarIcon = styled.div`
    width: 100px;
    margin: auto;
    position: relative;
    height: 50px;
    border-left: 3px solid var(--primaryColor);
    border-right: 3px solid var(--primaryColor);
    border-bottom: 3px solid var(--primaryColor);
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 200px;
    font-size: 18px;
    color: var(--primaryColor);
`
const CustomStarIcon = styled.i`
    font-size: 18px;
    color: var(--primaryColor);
`
const ScrollIcon = styled.div`
    color: var(--primaryColor);
    font-size: 30px;
    position: relative;
    top: 25px;
`
const ScrollDown = styled.i`
    animation: ${moveDown} 4s infinite;
    animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    color: var(--primaryColor) !important;
`

const SectionWrraper = styled.section`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`
const Container = styled.div`
  filter: brightness(0.4) blur(0px);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`
const SwiperSlide = styled.div`
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`;
const Sliders = styled(SwiperSlide)`
  height: 97vh;
  width: 100vw;
  background-repeat: no-repeat !important;
  background-attachment: scroll !important;
  background-size: cover !important;
  `;
const Slider = styled(Sliders)`

  background: url(${src => src.slidImg});
  background-position: 100% 100% !important;
`;

export default Section1;
