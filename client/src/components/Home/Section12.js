import Alex from "../../Assets/Images/Thumbnails/2.jpg";
import brad from "../../Assets/Images/Thumbnails/1.jpg";
import Michael from "../../Assets/Images/Thumbnails/3.jpg"
import imgSrc from "../../Assets/Images/Gallery/review.jpg"

import styled from "styled-components";
const Section12 = () => {
  return (
    <SectionWrraper
      src={imgSrc}
      className="container-fluid d-flex wow slideInRight"
      data-wow-duration="3s"
    >
      <Overlay></Overlay>
      <div className="container">
        <div className="row">
          <div className="col-md-12" style={{ zIndex: "4" }}>
            <div className="testimonials-title mt-5">
              <h1>testimonials</h1>
              <h3>What said about us</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ zIndex: "4" }}>
            <div >
              <div className="testimonials-slider mt-5 mb-5">
                <div className="testimonials-images">
                  <center>
                    <img
                      className="img-fluid rounded-circle w-100"
                      src={Alex}
                      alt="testimonial1"
                    />
                  </center>
                </div>
                <div className="customer-name mt-4">
                  <h5>Alex</h5>
                </div>
                <div className="testimonials-content mt-3">
                  <p>
                    Thank you for dinner last night. It was amazing!! I have to
                    say it’s the best meal I have had in quite some time. You
                    will definitely be seeing more of me eating at your
                    establishment. My husband was very impressed and we can’t
                    wait for our parents to come visit so that we can share our
                    new favorite place with them.
                  </p>
                </div>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="testimonials-slider mt-5 mb-5">
                <div className="testimonials-images">
                  <center>
                    <img
                      className="img-fluid rounded-circle w-100"
                      src={brad}
                      alt="testimonial2"
                    />
                  </center>
                </div>
                <div className="customer-name mt-4">
                  <h5>brad</h5>
                </div>
                <div className="testimonials-content mt-3">
                  <p>
                    WOW!!! What an outstanding dinner you prepared at the
                    Johnstons on Friday evening!!! It was an honor for me to be
                    invited and experience firsthand your incredible culinary
                    gift! MERCI BEAUCOUP seems soooooooo inadequate! Count on me
                    for spreading the good word! Thank you again for offering
                    such a gift.
                  </p>
                </div>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="testimonials-slider mt-5 mb-5">
                <div className="testimonials-images">
                  <center>
                  <img
                      className="img-fluid rounded-circle w-100"
                      src={Michael}
                      alt="testimonial2"
                    />
                  </center>
                </div>
                <div className="customer-name mt-4">
                  <h5>Michael Smith</h5>
                </div>
                <div className="testimonials-content mt-3">
                  <p>
                    Everyone had a wonderful time at The Mastali Hote last
                    night. As expected, the food was delicious and our servers
                    were so friendly and helpful – we loved them! It was a
                    delightful experience all round. Thank you so much for
                    hosting us. We hope we can come back again soon.
                  </p>
                </div>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrraper>
  );
};

const SectionWrraper = styled.section`
  min-height: calc(100vh - 100px);
  position: relative;
  background: url(${(img) => img.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  width: 100%;
  background: #000;
  height: 100%;
  opacity: 0.8;
  position: absolute;
  /* z-index: 2; */
  background-attachment: fixed;
`;
export default Section12;
