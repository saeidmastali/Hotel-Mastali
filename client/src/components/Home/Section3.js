import styled from "styled-components";
import ResturantVideo from "../../Assets/Video/Hotel Food And Interior.mp4";
import seprator from '../../Assets/Images/Icons/ver-separator.png';
import 'react-html5video/dist/styles.css';
import ReactPlayer from "react-player"
// import ShakaPlayer from 'shaka-player-react';
import {DefaultPlayer as Video} from 'react-html5video';
const Section3 = () => {
    return (
        <SectionWrraper className=" wow bounceInLeft" data-wow-duration="3s">
            <Overlay ></Overlay>
            <OpeningHoursPage className="container">
                <div className="row">
                    <div className="col-md-12">
                        <OpeningHours>
                            <h1>OPENING HOURS</h1>
                            <h1>Call For Reservations</h1>
                        </OpeningHours>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Schedule Src={seprator}>
                            <h1>Sunday to Tuesday</h1>
                            <h1>09:00</h1>
                            <h1>22:00</h1>
                        </Schedule>
                    </div>
                    <div className="col-md-6">
                        <ScheduleAfterNone>
                            <h1>Friday to Saturday</h1>
                            <h1>11:00</h1>
                            <h1>19:00</h1>
                        </ScheduleAfterNone>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Phone className="number">+1(438) 530-6760</Phone>
                    </div>
                </div>
            </OpeningHoursPage>
            <VideoContainer >
                {/* <ReactPlayer url='Hotel Food And Interior.mp4' type="video/mp4" autoplay /> */}
                <Video autoPlay loop muted >
                    <source src={ResturantVideo} type="video/mp4"/>
                </Video>
            </VideoContainer>
        </SectionWrraper>
    )
}

const Phone = styled.h1`
color: var(--primaryColor);
font-family: var(--accentFontFamily);
`
const SectionWrraper = styled.section`
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    position: relative;
    text-align: center;
    min-height: calc(100vh - 75px);
`

const Overlay = styled.div`
    width: 100%;
    background: #000;
    height: 100%;
    opacity: 0.6;
    position: absolute;
    z-index: 2;
    background-attachment: fixed;
`
const OpeningHoursPage = styled.div`
    position: absolute;
    z-index: 2;
`

const OpeningHours = styled.div`
    width: 40%;
    margin: auto;

    h1:nth-of-type(1) {
    color: #fff;
    margin-bottom: 15px;
    font-family: 'Poppins';
}

h1:nth-of-type(2) {
    color: var(--primaryColor);
    font-family: var(--accentFontFamily);
    margin-bottom: 30px;
    font-weight: bold;
    position: relative;
}
h1:nth-of-type(2)::before {
    content: '';
    position: absolute;
    width: 75px;
    height: 2px;
    background: var(--primaryColor);
    left: 0%;
    top: 50%;
}

h1:nth-of-type(2)::after {
    content: '';
    position: absolute;
    width: 75px;
    height: 2px;
    background: var(--primaryColor);
    right: 0%;
    top: 50%;
}
`

const Schedule = styled.div`
    color: #fff;
    position: relative;

    
    ::after {
    content: '';
    position: absolute;
    background: url(${(img) => img.Src});
    width: 20px;
    height: 144px;
    background-repeat: repeat-y;
    top: 0px;
    right: -20px;
}

h1:nth-of-type(2),
h1:nth-of-type(3) {
    font-family: 'Poppins';
}

h1:nth-of-type(1),
.number {
    color: var(--primaryColor);
    font-family: var(--accentFontFamily);
    font-weight: bold;
}
h1:nth-of-type(2),
h1:nth-of-type(3) {
    font-family: 'Poppins';
}

h1:nth-of-type(1),
.number {
    color: var(--primaryColor);
    font-family: var(--accentFontFamily);
    font-weight: bold;
}

`

const ScheduleAfterNone = styled(Schedule)`
::after {
    display: none;
}

`
const VideoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    left: 0%;
    top: 0%;
    object-fit: cover !important;
`
export default Section3;