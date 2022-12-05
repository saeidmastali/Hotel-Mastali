import colorSeperator from '../../Assets/Images/Icons/color-seperator.png';
import steakFiletiak from '../../Assets/Images/Modal Images/Steak Filetiak.jpg';
import DonerBurger from '../../Assets/Images/Modal Images/Doner Burger.jpg';
import  MisocChicken from '../../Assets/Images/Modal Images/Misoc Chicken.jpg';
import ChickenRoast from "../../Assets/Images/Modal Images/Chicken Roast.jpg";
import GrillSalmont from "../../Assets/Images/Modal Images/Grill Salmont.jpg";
import FriedPotatoes from "../../Assets/Images/Modal Images/Fried Potatoes.jpg";
import FriedSamon from"../../Assets/Images/Modal Images/Fried Samon.jpg";
import FriedSausage from "../../Assets/Images/Modal Images/Fried Sausage.jpg";

import styled from "styled-components";

const Section6 = () => {
  return(
  <SectionWrraper id='menu' className="container-fluid full-menu wow slideInLeft" data-wow-duration="3s">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full-menu-title">
            <h1>Hot Dishes</h1>
            <h4>PELLENTESQUE HABITANT MORBI</h4>
            <img
              src={colorSeperator}
              alt="color seperator"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="menu-items">
            <span data-bs-toggle="modal" data-bs-target="#modalImages_1">
              <a
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay="100"
                data-bs-html="true"
                title="<b><em>Click To View The Image</em></b>"
              >
                Steak Filetiak
              </a>
            </span>
            <span className="custom-rounded-dots"></span>
            <span>$130</span>
            <p>Sed quia non numquam eius modi tempora</p>
          </div>
          {/* <!-- FOR MODAL IMAGE START--> */}
          <div
            className="modal fade"
            id="modalImages_1"
            tabindex="-1"
            aria-labelledby="ModalImages_1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ModalImages_1">
                    Steak Filetiak
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="img-fluid w-100"
                    src={steakFiletiak}
                    alt="Steak Filetiak"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOR MODAL IMAGE END--> */}
        </div>
        <div className="col-md-6">
          <div className="menu-items">
            <span data-bs-toggle="modal" data-bs-target="#modalImages_2">
              <a
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay="100"
                data-bs-html="true"
                title="<b><em>Click To View The Image</em></b>"
              >
                Misoc Chicken
              </a>
            </span>
            <span className="custom-rounded-dots"></span>
            <span>$126</span>
            <p>Pommes de terre fingerling, Ossetra Cavia</p>
          </div>
          {/* <!-- FOR MODAL IMAGE START--> */}
          <div
            className="modal fade"
            id="modalImages_2"
            tabindex="-1"
            aria-labelledby="ModalImages_2"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ModalImages_2">
                    Misoc Chicken
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="img-fluid w-100"
                    src={MisocChicken}
                    alt="Misoc Chicken"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOR MODAL IMAGE END--> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="menu-items chef-selection-item">
            <div className="chef-selection">
              <span>Chef-Selection</span>
            </div>
            <br />
            <span data-bs-toggle="modal" data-bs-target="#modalImages_3">
              <a
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay="100"
                data-bs-html="true"
                title="<b><em>Click To View The Image</em></b>"
              >
                Doner Burger
              </a>
            </span>
            <span className="custom-rounded-dots"></span>
            <span>$130</span>
            <p>Sed quia non numquam eius modi tempora</p>
          </div>
          {/* <!-- FOR MODAL IMAGE START--> */}
          <div
            className="modal fade"
            id="modalImages_3"
            tabindex="-1"
            aria-labelledby="ModalImages_3"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ModalImages_3">
                    Doner Burger
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="img-fluid w-100"
                    src={DonerBurger}
                    alt="Doner Burger"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOR MODAL IMAGE END--> */}
        </div>
        <div className="col-md-6">
          <div className="menu-items">
            <span data-bs-toggle="modal" data-bs-target="#modalImages_4">
              <a
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay="100"
                data-bs-html="true"
                title="<b><em>Click To View The Image</em></b>"
              >
                Roast Chicken
              </a>
            </span>
            <span className="custom-rounded-dots"></span>
            <span>$100</span>
            <p>Nemo enim ipam voluptatem voluptas</p>
          </div>
        </div>
        {/* <!-- FOR MODAL IMAGE START--> */}
        <div
          className="modal fade"
          id="modalImages_4"
          tabindex="-1"
          aria-labelledby="ModalImages_4"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ModalImages_4">
                  Roast Chicken
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  className="img-fluid w-100"
                  src={ChickenRoast}  alt="Roast Chicken"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- FOR MODAL IMAGE END--> */}
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="menu-items">
            <span data-bs-toggle="modal" data-bs-target="#modalImages_5">
              <a
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay="100"
                data-bs-html="true"
                title="<b><em>Click To View The Image</em></b>"
              >
                Grill Salmont
              </a>
            </span>
            <span className="custom-rounded-dots"></span>
            <span>$26</span>
            <p>Fingerling Potatoes, Ossetra Caviar</p>
          </div>
          {/* <!-- FOR MODAL IMAGE START--> */}
          <div
            className="modal fade"
            id="modalImages_5"
            tabindex="-1"
            aria-labelledby="ModalImages_5"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ModalImages_5">
                    Grill Salmont
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="img-fluid w-100"
                    src={GrillSalmont}
                    alt="Grill Salmont"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOR MODAL IMAGE END--> */}
        </div>
        <div className="col-md-6">
          <div className="menu-items">
            <span data-bs-toggle="modal" data-bs-target="#modalImages_6">
              <a
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay="100"
                data-bs-html="true"
                title="<b><em>Click To View The Image</em></b>"
              >
                Fried Potatoes
              </a>
            </span>
            <span className="custom-rounded-dots"></span>
            <span>$59</span>
            <p>Sed quia non numquam eius modi tempora</p>
          </div>
          {/* <!-- FOR MODAL IMAGE START--> */}
          <div
            className="modal fade"
            id="modalImages_6"
            tabindex="-1"
            aria-labelledby="ModalImages_6"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ModalImages_6">
                    Fried Potatoes
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="img-fluid w-100"
                    src={FriedPotatoes}
                    alt="Fried Potatoes"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOR MODAL IMAGE END--> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="menu-items">
            <span data-bs-toggle="modal" data-bs-target="#modalImages_7">
              <a
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay="100"
                data-bs-html="true"
                title="<b><em>Click To View The Image</em></b>"
              >
                Fried Samon
              </a>
            </span>
            <span className="custom-rounded-dots"></span>
            <span>$70</span>
            <p>Nemo enim ipam voluptatem voluptas</p>
          </div>
          {/* <!-- FOR MODAL IMAGE START--> */}
          <div
            className="modal fade"
            id="modalImages_7"
            tabindex="-1"
            aria-labelledby="ModalImages_7"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ModalImages_7">
                    Fried Samon
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="img-fluid w-100"
                    src={FriedSamon}
                    alt="Fried Samon"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOR MODAL IMAGE END--> */}
        </div>
        <div className="col-md-6">
          <div className="menu-items">
            <span data-bs-toggle="modal" data-bs-target="#modalImages_8">
              <a
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-delay="100"
                data-bs-html="true"
                title="<b><em>Click To View The Image</em></b>"
              >
                Fried Sausage
              </a>
            </span>
            <span className="custom-rounded-dots"></span>
            <span>$40</span>
            <p>Excepteur sint occaecat cupidatat</p>
          </div>
          {/* <!-- FOR MODAL IMAGE START--> */}
          <div
            className="modal fade"
            id="modalImages_8"
            tabindex="-1"
            aria-labelledby="ModalImages_8"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ModalImages_8">
                    Fried Sausage
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img
                    className="img-fluid w-100"
                    src={FriedSausage}
                    alt="Fried Sausage"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOR MODAL IMAGE END--> */}
        </div>
      </div>
    </div>
  </SectionWrraper>)
};

const SectionWrraper = styled.section`
    margin:70px 0px;
`
export default Section6;
