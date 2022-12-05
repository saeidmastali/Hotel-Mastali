import styled from "styled-components";

import imgSrc from "../../Assets/Images/Slider/8.jpg"
const Section10 = () => {
  return (
    <SectionWrraper
      src={imgSrc}
      className="container-fluid wow flash"
      id="reservation"
      data-wow-duration="2s"
    >
      <Overlay></Overlay>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ zIndex: "4" }}>
            <div className="reservation-banner-title">
              <h1>Make Online Reservation</h1>
              <h3>Booking a table online is easy</h3>
            </div>
          </div>
        </div>
      </div>
    </SectionWrraper>
  );
};
const Overlay = styled.div`
  width: 100%;
  background: #000;
  height: 100%;
  opacity: 0.6;
  position: absolute;
  z-index: 2;
  background-attachment: fixed;
`;
const SectionWrraper = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(${(img) => img.src});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin-bottom: 120px;
`;
export default Section10;
