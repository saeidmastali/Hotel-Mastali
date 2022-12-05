import colorSeperator from "../../Assets/Images/Icons/color-seperator.png";
import imgSrc from '../../Assets/Images/Gallery/2.jpg'


import styled from "styled-components";

const Section5 = () => {

    return(
        <SectionWrraper 
            src={imgSrc}
            className="container-fluid wow slideInLeft" 
            data-wow-duration="3s">
        <Overlay ></Overlay>
        <div style={{opacity:'1',zIndex:'4'}} className="container">
            <div className="row">
                <div className="col-md-12">
                    <WeeklyDeals>
                        <h1>Weekly Deals</h1>
                        <h2>Investigationes demonstraverunt lectores</h2>
                        <br/>
                        <img src={colorSeperator} alt="ver-separator"/>
                    </WeeklyDeals>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <WeeklyDealsContent >
                        <div className="weekly-deals-days text-start">
                            <span>Monday</span>
                            <small>(Labore et dolor)</small>
                        </div>
                        <div className="weekly-deals-items text-start">
                            <span>Oatmeal Apples</span>
                            <span className="rounded-dots"></span>
                            <del><small>$34</small></del>
                            <span>$26</span>
                        </div>
                    </WeeklyDealsContent>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <WeeklyDealsContent>
                        <div className="weekly-deals-days text-start">
                            <span>Tuesday</span>
                            <small>(Semonstraverunt)</small>
                        </div>
                        <div className="weekly-deals-items text-start">
                            <span>Soft shell crab</span>
                            <span className="rounded-dots"></span>
                            <del><small>$130</small></del>
                            <span>$90</span>
                        </div>
                    </WeeklyDealsContent>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <WeeklyDealsContent>
                        <div className="weekly-deals-days text-start">
                            <span>Wednesday</span>
                            <small>(Incididunt ut labore)</small>
                        </div>
                        <div className="weekly-deals-items text-start">
                            <span>Miso chicken</span>
                            <span className="rounded-dots"></span>
                            <del><small>$30</small></del>
                            <span>$20</span>
                        </div>
                    </WeeklyDealsContent>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <WeeklyDealsContent>
                        <div className="weekly-deals-days text-start">
                            <span>Thursday</span>
                            <small>(Elit adipisicing)</small>
                        </div>
                        <div className="weekly-deals-items text-start">
                            <span>Fish pie/Curry</span>
                            <span className="rounded-dots"></span>
                            <del><small>$61</small></del>
                            <span>$44</span>
                        </div>
                    </WeeklyDealsContent>
                </div>
            </div>
            <br/>
            <div className="row">
                <MenuLink className="text-center ">
                    <a href="#reservation">Online Reservation</a>
                </MenuLink>
            </div>
        </div>
    </SectionWrraper>

    )
}

const SectionWrraper = styled.section`
    display: flex;
    min-height: calc(120vh);
    align-items: center !important;
    justify-content: center !important;
    background: url(${img => img.src});
    /* background-repeat: no-repeat;
    background-size: cover !important;
    background-attachment: fixed;
    background-position: center;
    color: #fff; */
    position: relative;
    /* margin-bottom: 40px; */
`
const Overlay = styled.div`
    width: 100%;
    background: #000;
    height: 100%;
    position: absolute;
    z-index: 2;
    background-attachment: fixed;
    opacity: 0.75;
`

const WeeklyDeals = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-family: var(--secondaryFontFamily);
    margin-top: 100px;
    color: white;
    h1 {
            font-size: 2em !important;
        }
    h2 {
    font-family: var(--accentFontFamily);
    color: var(--primaryColor);
    text-transform: capitalize;
    font-weight: bold;
    font-size: 2.4rem;
}
`
const WeeklyDealsContent =styled.div`
    margin: auto;
    line-height: 50px;
    width: 70%;
    z-index: 40;
    opacity: 1;
`

const MenuLink = styled.div`
    text-align: left;
    font-family: var(--additionalFontFamily);
    text-transform: uppercase;
    margin-top: 15px;
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
export default Section5;