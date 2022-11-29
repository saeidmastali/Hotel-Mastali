import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;500&family=Montserrat:wght@400;500;600;700;800;900&family=Playball&family=Poppins:wght@400;500;600;700;800;900&display=swap');

:root {
    --primaryFontFamily: 'Montserrat',
        sans-serif;
    --primaryColor: #C59D5F;
    --primaryHoverColor: #2a2a2a;
    --primaryBackground: #2a2a2a;
    --primaryTransition: all 0.5s linear;
    --primaryOpacity: 1;
    --primaryMargin: 10px;
    --primaryPadding: 10px;
    --secondaryFontFamily: 'Poppins',
        sans-serif;
    --secondaryColor: #fff;
    --secondaryHoverColor: #000;
    --secondaryBackground: #191919;
    --secondaryTransition: all 1s linear;
    --accentFontFamily: 'Playball',
        cursive;
    --additionalFontFamily: 'Cabin',
        sans-serif;
}

html {
    overflow: scroll;
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 0px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    /* background: linear-gradient(transparent, #C59D5F); */
    /* border-radius: 6px; */
    background: transparent;
}

::-webkit-scrollbar-thumb:hover {
    /* background: linear-gradient(transparent, hsla(36, 47%, 57%, 0.718)); */
    background: transparent;
}

::selection {
    background: #C59D5F;
    color: rgb(255, 255, 255);
}

*,
::before,
::after {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

/* NAVBAR AUTOHIDE WHILE SCROLLING DOWN START */
.scrolled-down {
    transform: translateY(-100%);
    transition: all 1s ease-in-out;
}

.scrolled-up {
    transform: translateY(0);
    transition: all 1s ease-in-out;
}

/* NAVBAR AUTOHIDE WHILE SCROLLING DOWN END */
.autohide {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 1030;
}

.modal {
    z-index: 214748364565 !important;
}

/* NAVBAR START */
.main_nav {
    width: 100%;
    z-index: 214748364 !important;
    border-bottom: 2px solid var(--primaryColor);
}

.custom-nav {
    font-family: var(--primaryFontFamily);
    font-weight: 500;
    padding: 20px 0px;
}

.logo {
    width: 55px;
}

.custom-nav-item {
    padding: 10px 20px;
}

.navbar-logo {
    display: flex;
    flex-direction: row;
}

.custom-nav-link {
    transition: var(--primaryTransition);
    color: #fff !important;
}

.active {
    color: var(--primaryColor) !important;
}

.custom-nav-link:hover {
    color: var(--primaryColor) !important;
}

/* NAVBAR MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:768px) {
    .custom-nav-item {
        padding: 5px 10px !important;
    }
}

@media screen and (min-width:280px) and (max-width:500px) {
    .main_nav {
        padding: 15px 0px;
    }
}

@media screen and (min-width:992px) and (max-width:1200px) {
    .navbar-logo {
        display: none;
    }
}

/* NAVBAR MEDIA QUERY END */
/* NAVBAR END */

/* SECTION - 1 START */
.home-page {
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}



/* SWIPER SLIDER */
.swiper-container {
    width: 100%;
    height: 100%;
}

.custom-swiper-container {
    filter: brightness(0.4) blur(0px);
}

.swiper-slide {
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
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-button-prev,
.swiper-button-next {
    color: var(--primaryColor);
}

.swiper-pagination-bullet {
    background: #191919;
}

.swiper-pagination-bullet-active {
    background: var(--primaryColor);
}

/* SWIPER SLIDER END */
.slider-1,
.slider-2,
.slider-3,
.slider-4,
.slider-5,
.slider-6,
.slider-7,
.slider-8 {
    height: 100%;
    background-repeat: no-repeat !important;
    background-attachment: scroll !important;
    background-size: cover !important;
}

.slider-1 {
    background: url('../Assets/Images/Background/bg-1.jpeg');
    background-position: 100% 100% !important;
}

.slider-2 {
    background: url('../Assets/Images/Background/bg-2.jpg');
    background-position: 100% 100% !important;
}

.slider-3 {
    background: url('../Assets/Images/Background/bg-3.jpg');
    background-position: top left !important;
}

.slider-4 {
    background: url('../Assets/Images/Background/bg-4.jpg');
    background-position: 100% 100%;
}

.slider-5 {
    background: url('../Assets/Images/Background/bg-5.jpg');
    background-position: top left;
}

.slider-6 {
    background: url('../Assets/Images/Background/bg-6.jpg');
    background-position: 100% 90%;
}

.slider-7 {
    background: url('../Assets/Images/Background/bg-7.jpg');
    background-position: center;
}

.slider-8 {
    background: url('../Assets/Images/Background/bg-8.jpg');
    background-position: 100% 100%;
}

.slider-title {
    background: transparent;
    position: absolute;
    z-index: 9;
    text-align: center;
}

.slider-title h1 {
    font-weight: bold;
    font-family: var(--accentFontFamily);
    color: #fff;
    font-size: 3.7em;
}

.slider-title p {
    font-family: var(--primaryFontFamily);
    font-weight: 600;
    color: var(--primaryColor);
    text-transform: uppercase;
    font-size: 1.2em;
    position: relative;
}

.slider-title p::before {
    content: '';
    background: var(--primaryColor);
    width: 75px;
    height: 3px;
    position: absolute;
    left: -65px;
    top: 12px;
    opacity: 0.8;
}

.slider-title p::after {
    content: '';
    background: var(--primaryColor);
    width: 75px;
    height: 3px;
    position: absolute;
    top: 12px;
    opacity: 0.8;
    right: -11%;
}

.star-icon {
    width: 100px;
    margin: auto;
    position: relative;
    height: 50px;
    border-left: 3px solid var(--primaryColor);
    border-right: 3px solid var(--primaryColor);
    border-bottom: 3px solid var(--primaryColor);
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 200px;
}



.scroll-icon {
    color: var(--primaryColor);
    font-size: 30px;
    position: relative;
    top: 25px;
}

.custom-scroll-icon {
    animation: moveDown 4s infinite;
    animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    color: var(--primaryColor) !important;
}

@keyframes moveDown {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(50px);
    }

    100% {
        transform: translateY(0px);
    }
}

/* SECTION - 1 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:768px) {

    .slider-title p::before,
    .slider-title p::after {
        display: none;
    }

    .homepage-swiper-next,
    .homepage-swiper-prev {
        display: none;
    }

    .slider-title p {
        font-size: 13px;
    }
}

@media screen and (min-width:768px) and (max-width:1368px) {
    .slider-title p::before {

        left: -85px;

        height: 2px;

        top: 11px;

    }

    .slider-title p::after {

        top: 11px;

        height: 2px;

        right: -19%;
    }
}

@media screen and (min-width:280px) and (max-width:991px) {
    .slider-title h1 {
        font-size: 2.875em;
    }

    .slider-title p {
        font-size: 1.01em;
    }
}

@media screen and (min-width:280px) and (max-width:325px) {
    .slider-title h1 {
        font-size: 2.7em !important;
    }

    @keyframes moveDown {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(30px);
        }

        100% {
            transform: translateY(0px);
        }
    }
}

/* SECTION - 1 MEDIA QUERY END */
/* SECTION - 1 END */



.about-img-1,
.about-img-2,
.about-img-3,
.about-img-4,
.about-img-5,
.about-img-6,
.about-img-7,
.about-img-8,
.about-img-9,
.about-img-10,
.about-img-11 {
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

.about-img-1 {
    background: url('./Images/Gallery/1.jpg');
}

.about-img-2 {
    background: url('./Images/Gallery/2.jpg');
}

.about-img-3 {
    background: url('./Images/Gallery/3.jpg');
}

.about-img-4 {
    background: url('./Images/Gallery/4.jpg');
}

.about-img-5 {
    background: url('./Images/Gallery/5.jpg');
}

.about-img-6 {
    background: url('./Images/Gallery/6.jpg');
}

.about-img-7 {
    background: url('./Images/Gallery/7.jpg');
}

.about-img-8 {
    background: url('./Images/Slider/1.jpg');
}

.about-img-9 {
    background: url('./Images/Slider/2.jpg');
}

.about-img-10 {
    background: url('./Images/Slider/4.jpg');
}

.about-img-11 {
    background: url('./Images/Slider/5.jpg');
}

.about-title {
    text-align: center;
}

.custom-swiper-next,
.custom-swiper-prev {
    background: #2a2a2a;
    border-radius: 50%;
    padding: 25px;
}

.custom-swiper-next::after,
.custom-swiper-prev::after {
    font-size: 32px !important;
}

.custom-about-swiper-container {
    width: 100%;
    height: 80%;
    margin-top: 85px;
    cursor: e-resize;
}

.about-title h1 {
    font-family: var(--accentFontFamily);
    color: var(--primaryColor);
    font-size: 3.7em;
}

.about-title h4 {
    text-transform: uppercase;
    font-family: var(--secondaryFontFamily);
    font-weight: bold;
    font-size: 1.4em;
    letter-spacing: 4px;
    position: relative;
}

.about-title h4::before {
    content: '';
    position: absolute;
    width: 75px;
    height: 2.5px;
    background: var(--primaryColor);
    top: 37.2% !important;
    left: 21%;
}

.about-title h4::after {
    content: '';
    position: absolute;
    width: 75px;
    height: 2.5px;
    background: var(--primaryColor);
    top: 37.2%;
    left: 66%;
}



/* SECTION - 3 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:1400px) {
    @media screen and (min-width:280px) and (max-width:991px) {
        .opening-hours h1:nth-of-type(1) {
            font-size: 2.5em;
        }

        .opening-hours {
            width: 100%;
        }
    }

    .schedule::after,
    .opening-hours h1:nth-of-type(2)::before,
    .opening-hours h1:nth-of-type(2)::after {
        display: none;
    }
}

@media screen and (min-width:280px) and (max-width:325px) {
    .opening-hours h1:nth-of-type(1) {
        font-size: 1.9em;
    }

    .opening-hours h1:nth-of-type(2) {
        font-size: 1.895em;
    }
}

/* SECTION - 3 MEDIA QUERY END */
/* SECTION - 3 END */

/* SECTION - 4 START */
.custom-about-title::before {
    left: 9% !important;
}

.custom-about-title::after {
    left: 78% !important;
}

.discover-img-1,
.discover-img-2,
.discover-img-3,
.discover-img-4,
.discover-img-5,
.discover-img-6,
.discover-img-7,
.discover-img-8,
.discover-img-9,
.discover-img-10,
.discover-img-11 {
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

.discover-img-1 {
    background: url('./Images/Gallery/hotel-room.jpg');
}

.discover-img-2 {
    background: url('./Images/Gallery/room-2.jpg');
}

.discover-img-3 {
    background: url('./Images/Gallery/room-3.jpg');
}

.discover-img-4 {
    background: url('./Images/Gallery/room-4.jpg');
}

.discover-img-5 {
    background: url('./Images/Gallery/room-5.jpg');
}

.discover-img-6 {
    background: url('./Images/Gallery/room-6.jpg');
}

.discover-img-7 {
    background: url('./Images/Gallery/room-7.jpg');
}

.discover-img-8 {
    background: url('./Images/Gallery/room-8.jpg');
}

.discover-img-9 {
    background: url('./Images/Gallery/room-9.jpg');
}

.discover-img-10 {
    background: url('./Images/Gallery/room-10.jpg');
}

.discover-img-11 {
    background: url('./Images/Gallery/room-11.jpg');
}

/* SECTION - 4 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:1368px) {
    @media screen and (min-width:280px) and (max-width:768px) {
        .custom-about-swiper-container {
            margin-top: 0px !important;
        }
    }

    .custom-about-title::before,
    .custom-about-title::after {
        display: none;
    }
}

@media screen and (min-width:1368px) and (max-width:1400px) {
    .custom-about-title::before {
        left: 3% !important;
    }

    .custom-about-title::after {
        left: 82% !important;
    }
}

@media screen and (min-width:1401px) and (max-width:1500px) {
    .custom-about-title::before {
        left: 9% !important;
    }

    .custom-about-title::after {
        left: 79% !important;
    }
}

/* SECTION - 4 MEDIA QUERY END */
/* SECTION - 4 END */

/* SECTION - 5 START */
.weekly-deals {
    display: flex;
    min-height: calc(120vh);
    align-items: center !important;
    justify-content: center !important;
    background: url('./Images/Gallery/2.jpg');
    background-repeat: no-repeat;
    background-size: cover !important;
    background-attachment: fixed;
    background-position: center;
    color: #fff;
    position: relative;
    margin-bottom: 40px;
}

.weekly-deals-header {
    text-align: center;
    text-transform: uppercase;
    font-family: var(--secondaryFontFamily);
    margin-top: 100px;
}

.weekly-deals-header h2 {
    font-family: var(--accentFontFamily);
    color: var(--primaryColor);
    text-transform: capitalize;
    font-weight: bold;
    font-size: 2.4rem;
}

.weekly-deals-content {
    margin: auto;
    line-height: 50px;
    width: 70%;
}

.weekly-deals-days span:nth-of-type(1) {
    font-size: 2.5em;
    font-family: var(--accentFontFamily);
    color: var(--primaryColor);
}

.weekly-deals-days small {
    font-family: var(--secondaryFontFamily);
    text-transform: capitalize;
}

.weekly-deals-items {
    font-family: var(--additionalFontFamily);
    color: var(--primaryColor);
    display: flex;
    flex-direction: row;
}

.weekly-deals-items span:nth-of-type(1),
.weekly-deals-items span:nth-of-type(3) {
    font-family: var(--secondaryFontFamily);
    font-size: 1.5em;
    text-transform: capitalize;
    font-weight: bold;
    color: #fff;
}

.rounded-dots {
    width: 70%;
    border-bottom: 2px dotted var(--primaryColor);
    height: 1px;
    margin-top: 30px;
}

.custom-menu-link a:hover {
    color: #fff !important;
}

/* SECTION - 5 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:991px) {
    @media screen and (min-width:280px) and (max-width:325px) {
        .weekly-deals-header h1 {
            font-size: 2em !important;
        }

        .weekly-deals-header h2 {
            font-size: 1.5em;
        }

        .rounded-dots {
            width: 66%;
        }
    }

    .weekly-deals {
        margin-bottom: 100px;
    }

    .weekly-deals-header h1 {
        font-size: 2.5em;
    }

    .weekly-deals-content {
        width: 100%;
        line-height: 35px;
        margin: 15px 0px;
    }

    .weekly-deals-days span:nth-of-type(1) {
        font-size: 2em !important;
    }

    .weekly-deals-items span:nth-of-type(1),
    .weekly-deals-items span:nth-of-type(3) {
        font-size: 1.3em;
    }

    .custom-menu-link {
        margin-bottom: 40px;
    }

    .rounded-dots {
        width: 43%;
    }

    @media screen and (min-width:768px) and (max-width:991px) {
        .rounded-dots {
            width: 66%;
        }
    }
}

@media screen and (min-width:991px) and (max-width:1400px) {
    .custom-menu-link {
        margin-bottom: 60px;
    }
}

/* SECTION - 5 MEDIA QUERY END */
/* SECTION - 5 END */


/* SECTION - 6 START */
.professional__team {
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 60px;
}

.team-desc {
    text-align: center;
    width: 55%;
    margin: auto;
    margin-bottom: 50px;
}

.team-desc h1 {
    font-family: var(--accentFontFamily);
    color: var(--primaryColor);
    font-size: 3.7em;
}

.team-desc h3 {
    font-family: var(--secondaryFontFamily);
    margin-bottom: 25px;
    font-weight: bold;
    letter-spacing: 2px;
}

.team-desc img {
    margin-bottom: 25px;
}

.team-desc p {
    font-family: var(--additionalFontFamily)
}

.master-chefs {
    width: 160px;
    margin: auto;
    margin-bottom: 15px;
    position: relative;
}

.master-chefs span {
    font-family: 'Playball';
    color: var(--primaryColor);
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 35%;
    opacity: 0;
    animation: upOutDown 0.5s 1;
    animation-timing-function: linear;
}

.master-chefs:hover span {
    animation: upInDown 0.5s 1;
    animation-timing-function: linear;
    animation-fill-mode: both;
}

@keyframes upInDown {
    0% {
        top: 0%;
        opacity: 0;
    }

    100% {
        top: 42%;
        opacity: 1;
    }
}

@keyframes upOutDown {
    0% {
        top: 42%;
        opacity: 1;
    }

    100% {
        top: 0%;
        opacity: 0;
    }
}

.master-chefs img {
    width: 160px;
    background-position: center;
    cursor: pointer;
    transition: var(--primaryTransition);
}

.master-chefs img:hover {
    filter: opacity(0.26);
}

.chef-desc h4 {
    font-family: 'Playball';
    color: var(--secondaryBackground);
    font-size: 1.8em;
}

.chef-desc {
    text-align: center;
}

.chef-desc h5 {
    color: var(--primaryColor);
    font-family: var(--secondaryFontFamily);
    font-weight: bold;
}

/* SECTION - 6 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:991px) {
    @media screen and (min-width:280px) and (max-width:325px) {
        .team-desc h1 {
            font-size: 2.797em !important;
        }
    }

    .professional__team {
        margin-bottom: 100px;
    }

    .team-desc {
        width: 100%;
    }

    .team-desc h1 {
        font-size: 3.7em;
    }

    .team-desc h3 {
        font-size: 1.3em;
    }

    .team-desc p {
        text-align: justify;
    }
}

/* SECTION - 6 MEDIA QUERY END */
/* SECTION - 6 END */

/* SECTION - 7 START */
.menu-banner {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background: url('./Images/Gallery/4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    margin-bottom: 105px;
}

.menu-banner-title {
    text-align: center;
}

.menu-banner-title h1 {
    font-size: 3.7em;
    font-family: var(--accentFontFamily);
    color: var(--primaryColor);
}

.menu-banner-title h3 {
    color: #fff;
    font-family: var(--additionalFontFamily);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
}

/* SECTION - 7 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:768px) {
    @media screen and (min-width:280px) and (max-width:325px) {
        .menu-banner-title h1 {
            font-size: 2.797em !important;
        }
    }

    .menu-banner-title h1 {
        font-size: 3.7em;
    }

    .menu-banner-title h3 {
        font-size: 23px;
    }
}

/* SECTION - 7 MEDIA QUERY END */
/* SECTION - 7 END */

/* SECTION - 8 START */
.full-menu {
    min-height: calc(100vh);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-bottom: 85px;
}

.full-menu-title {
    text-align: center;
    text-transform: uppercase;
}

.full-menu-title h1 {
    font-family: var(--accentFontFamily);
    color: var(--primaryColor);
    text-transform: capitalize;
    font-size: 3.7em;
}

.full-menu-title h4 {
    font-weight: bold;
    letter-spacing: 2px;
    position: relative;
}

.full-menu-title h4::before {
    content: '';
    position: absolute;
    width: 75px;
    height: 2.5px;
    background: var(--primaryColor);
    top: 14px;
    left: 25.5%;
}

.full-menu-title h4::after {
    content: '';
    position: absolute;
    width: 75px;
    height: 2.5px;
    background: var(--primaryColor);
    top: 14px;
    right: 25.5%;
}

.full-menu-title img {
    margin: 25px 0px;
}

.menu-items {
    text-transform: capitalize;
    margin: 25px 0px;
    position: relative;
}

.menu-items span:nth-of-type(1) {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4em;
    font-weight: 500;
    transition: var(--primaryTransition);
    cursor: pointer;
}

.menu-items span:nth-of-type(1):hover {
    color: var(--primaryColor);
}

.menu-items span:nth-of-type(3) {
    font-family: 'Cabin';
    font-size: 1.4em;
}

.menu-items p {
    font-family: 'Poppins';
}

.custom-rounded-dots {
    width: 50%;
    border-bottom: 2px dotted var(--primaryHoverColor);
    height: 1px;
    display: inline-flex;
}

.chef-selection-item {
    border: 2px solid var(--primaryColor);
    padding: 20px 40px;
}

.chef-selection {
    position: absolute;
    top: -1px;
    left: -1px;
    background: var(--primaryColor);
    color: #fff;
    padding: 0px 20px;
    letter-spacing: 2px;
}

.chef-selection span {
    font-size: 1em !important;
    font-family: var(--accentFontFamily) !important;
    transition: none !important;
    cursor: progress !important;
}

.chef-selection span:hover {
    color: #fff !important;
}

/* SECTION - 8 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:991px) {
    .full-menu-title h1 {
        font-size: 3.7em !important;
    }

    .menu-items span:nth-of-type(1),
    .menu-items span:nth-of-type(3) {
        font-size: 1.1em !important;
    }

    .custom-rounded-dots {
        width: 23%;
        height: 1px;
        border-bottom: 2px solid var(--primaryHoverColor);
    }
}

@media screen and (min-width:280px) and (max-width:325px) {
    .full-menu-title h1 {
        font-size: 2.797em !important;
    }
}

@media screen and (min-width:280px) and (max-width:1368px) {

    .full-menu-title h4::before,
    .full-menu-title h4::after {
        display: none;
    }
}

@media screen and (min-width:1368px) and (max-width:1401px) {
    .full-menu-title h4::before {
        left: 21%;
    }

    .full-menu-title h4::after {
        right: 21%;
    }
}

/* SECTION - 8 MEDIA QUERY END */
/* SECTION - 8 END */

/* SECTION - 9 START */
.gallery-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(70vh);
    position: relative;
    background: url('./Images/Gallery/restaurant\ kitchen.jpeg');
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    flex-direction: column;
    margin-bottom: 130px;
}

.gallery-banner-title {
    z-index: 4 !important;
    text-align: center;
}

.gallery-banner-title h1 {
    color: var(--primaryColor);
    font-family: 'Playball';
    font-size: 3.7em;
    letter-spacing: 2px;
    text-transform: capitalize;
}

.gallery-banner-title h3 {
    color: var(--secondaryColor);
    font-family: 'Poppins';
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
}

/* SECTION - 9 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:768px) {
    @media screen and (min-width:280px) and (max-width:325px) {
        .gallery-banner-title h1 {
            font-size: 2.797em !important;
        }
    }

    .gallery-banner-title h1 {
        font-size: 3.7em;
    }

    .gallery-banner-title h3 {
        font-size: 23px;
        margin-top: 15px;
    }
}

/* SECTION - 9 MEDIA QUERY END */
/* SECTION - 9 END */

/* SECTION - 10 START */
.gallery {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 90px;
}

.gallery-images {
    margin-bottom: 35px;
    position: relative;
}

.gallery-images i {
    position: absolute;
    z-index: 4;
    font-size: 28px;
    color: var(--primaryColor);
    left: 50%;
    top: 0%;
    opacity: 0;
    animation: zoomOut 0.3s 1;
    animation-timing-function: linear;
}

.gallery-images img {
    transition: var(--primaryTransition);
    cursor: pointer;
    box-shadow: 2px 2px 10px #191919;
}

.gallery-images img:hover {
    filter: brightness(0.4);
}

.gallery-images:hover i {
    opacity: 1;
    animation: zoomIn 0.3s 1;
    animation-timing-function: linear;
    animation-fill-mode: both;
}

@keyframes zoomIn {
    0% {
        top: 0%;
        opacity: 0;
    }

    100% {
        top: 50%;
        opacity: 1;
    }
}

@keyframes zoomOut {
    0% {
        top: 50%;
        opacity: 1;
    }

    100% {
        top: 0%;
        opacity: 0;
    }
}

/* SECTION - 10 MEDIA QUERY START */
/* SECTION - 10 MEDIA QUERY END */
/* SECTION - 10 END */

/* SECTION - 11 START */
.reservation-banner {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: url('./Images/Slider/8.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    margin-bottom: 120px;
}

.reservation-banner-title {
    text-align: center;
}

.reservation-banner-title h1 {
    font-family: 'Playball';
    color: var(--primaryColor);
    font-size: 3.7em;
}

.reservation-banner-title h3 {
    font-family: 'Poppins';
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    font-weight: 600;
}

/* SECTION - 11 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:768px) {
    @media screen and (min-width:280px) and (max-width:325px) {
        .reservation-banner-title h1 {
            font-size: 2.797em !important;
        }

        .reservation-banner-title h3 {
            font-size: 23px !important;
        }
    }

    .reservation-banner-title h1 {
        font-size: 3.7em;
    }

    .reservation-banner-title h3 {
        font-size: 25px;
        margin-top: 15px;
    }
}

/* SECTION - 11 MEDIA QUERY END */
/* SECTION - 11 END */

/* SECTION - 12 START */
.reservation-info {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    margin-bottom: 70px;
}

.reservation-info-title {
    width: 65%;
    margin: auto;
}

.reservation-info-title h3 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Poppins';
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    position: relative;
}

.reservation-info-title h3::before {
    content: '';
    position: absolute;
    width: 75px;
    height: 2.5px;
    background: var(--primaryColor);
    top: 14px;
    left: 21%;
}

.reservation-info-title h3::after {
    content: '';
    position: absolute;
    width: 75px;
    height: 2.5px;
    background: var(--primaryColor);
    top: 14px;
    right: 21%;
}

.reservation-info-title p {
    text-align: center;
    margin-bottom: 100px;
    font-family: 'Poppins';
}

.form-header h4 {
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: bolder;
    font-family: 'Cabin';
}

.reservation-form {
    font-family: 'Cabin';
}

.reservation-button {
    width: 19%;
    margin: auto;
}

.reservation-btn {
    background: var(--secondaryHoverColor);
    outline: none;
    border: none;
    color: var(--primaryColor);
    font-family: 'Playball';
    text-transform: capitalize;
    padding: 10px 25px;
    transition: var(--primaryTransition);
    letter-spacing: 2px;
}

.reservation-btn:hover {
    color: var(--secondaryColor);
}

/* SECTION - 12 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:991px) {
    .reservation-button {
        width: 100%;
    }

    .reservation-info-title {
        width: 100%;
    }

    .reservation-info-title h3 {
        font-size: 23px;
    }
}

@media screen and (min-width:280px) and (max-width:1368px) {

    .reservation-info-title h3::before,
    .reservation-info-title h3::after {
        display: none;
    }
}

@media screen and (min-width:1368px) and (max-width:1401px) {
    .reservation-info-title h3::before {
        left: 17%;
    }

    .reservation-info-title h3::after {
        right: 17%;
    }
}

/* SECTION - 12 MEDIA QUERY END */
/* SECTION - 12 END */

/* SECTION - 13 START */
.contact-banner {

    position: relative;

    min-height: 70vh;

    background: url('./Images/Gallery/contact.jpg');

    background-position: top center;

    background-repeat: no-repeat;

    background-size: cover;

    background-attachment: fixed;

    margin-bottom: 140px;
}

.contact-banner-title {
    text-align: center;
}

.contact-banner-title h1 {
    font-family: 'Playball';
    color: var(--primaryColor);
    font-size: 3.7em;
}

.contact-banner-title h3 {
    font-family: 'Poppins';
    color: #fff;
    font-weight: 600;
}

/* SECTION - 13 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:325px) {
    .contact-banner-title h1 {
        font-size: 2.797em !important;
    }

    .contact-banner-title h3 {
        font-size: 23px;
    }
}

/* SECTION - 13 MEDIA QUERY END */
/* SECTION - 13 END */

/* SECTION - 14 START */
.get-in-touch {
    min-height: calc(100vh - 100px);
    position: relative;
    margin-bottom: 140px;
}

.get-in-touch-title {
    text-align: center;
    margin-bottom: 40px;
}

.get-in-touch-title h1 {
    font-size: 3.7em;
    font-family: var(--accentFontFamily);
    color: var(--primaryColor);
}

.get-in-touch-title h3 {
    font-family: 'Cabin';
    letter-spacing: 1px;
    font-weight: 600;
    position: relative;
}

.get-in-touch-title h3::before {
    content: '';
    position: absolute;
    width: 75px;
    height: 2.5px;
    background: var(--primaryColor);
    top: 14px;
    left: 37%;
}

.get-in-touch-title h3::after {
    content: '';
    position: absolute;
    width: 75px;
    height: 2.5px;
    background: var(--primaryColor);
    top: 14px;
    right: 37%;
}

.get-in-touch-form {
    width: 50%;
    margin: auto;
    font-family: 'Cabin';
}

.get-in-touch-form input {
    border-radius: 2px;
    background: #f9f9f9;
    padding: 12px;
}

.get-in-touch-form textarea {
    border-radius: 2px !important;
    background: #f9f9f9;
}

.get-in-touch-btn {
    outline: none;
    background: #fff;
    border: 1px solid var(--primaryColor);
    font-family: var(--accentFontFamily);
    transition: var(--primaryTransition);
}

.get-in-touch-btn:hover {
    background: var(--secondaryBackground);
    color: var(--primaryColor);
    border: 1px solid var(--secondaryBackground);
}

/* SECTION - 14 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:1368px) {
    @media screen and (min-width:280px) and (max-width:991px) {
        @media screen and (min-width:280px) and (max-width:325px) {
            .get-in-touch-title h1 {
                font-size: 2.797em !important;
            }

            .get-in-touch-title h3 {
                font-size: 23px !important;
            }
        }

        .get-in-touch-form {
            width: 100%;
        }

        .get-in-touch-btn {
            width: 100%;
        }
    }

    .get-in-touch-title h3::before,
    .get-in-touch-title h3::after {
        display: none;
    }
}

@media screen and (min-width:1368px) and (max-width:1401px) {
    .get-in-touch-title h3::before {
        left: 35%;
    }

    .get-in-touch-title h3::after {
        right: 35%;
    }
}

/* SECTION - 14 MEDIA QUERY END */
/* SECTION - 14 END */

/* SECTION - 15 START */
.testimonials {
    min-height: calc(100vh - 100px);
    position: relative;
    background: url('./Images/Gallery/review.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

.testimonials-title {
    text-align: center;
    margin-top: 120px !important;
}

.testimonials-title h1 {
    font-size: 3.7em;
    font-family: 'Playball';
    color: var(--primaryColor);
    text-transform: capitalize;
}

.testimonials-title h3 {
    font-family: 'Poppins';
    font-weight: 600;
    color: #fff;
    text-transform: capitalize;
}

.testimonials-slider {
    width: 75%;
    margin: auto;
    text-align: center;
    margin-bottom: 85px !important;
}

.testimonials-images img {
    width: 128px !important;
}

.customer-name {
    font-family: 'Poppins';
    color: #fff;
}

.testimonials-content {
    font-family: 'Poppins';
    color: #fff;
}

.rating i {
    color: var(--primaryColor);
}

/* SECTION - 15 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:991px) {
    @media screen and (min-width:280px) and (max-width:325px) {
        .testimonials-title h1 {
            font-size: 2.797em !important;
        }

        .testimonials-title h3 {
            font-size: 23px !important;
        }
    }

    .testimonials-slider {
        width: 100%;
        margin-bottom: 0px;
    }
}

/* SECTION - 15 MEDIA QUERY END */
/* SECTION - 15 END */

/* SECTION - 16 START */
.location_info {
    min-height: calc(100vh - 100px);
    position: relative;
    background-color: #191919;
    background-attachment: fixed;
}

.location_header {
    color: var(--primaryColor);
    font-family: 'Playball';
    margin-top: 100px !important;
}

.location_header h1 {
    font-size: 3.7em;
}

#map {
    height: 270.4px;
    border-radius: 2px;
}

.location-content {
    margin-bottom: 30px;
}

.location-heading {
    font-family: 'Poppins';
    color: var(--primaryColor);
}

.location-heading h6 {
    font-weight: 700;
}

.location-info {
    color: #fff;
    font-family: 'Cabin';
}

.location-info span:hover {
    text-decoration: underline;
}

.newsletter-title {
    color: var(--primaryColor);
}

.newsletter-title h6 {
    font-weight: 700;
}

.newsletter {
    font-family: 'Playball';
}

.btn-newsletter {
    background: #C59D5F;
    color: #000;
    transition: var(--primaryTransition);
    font-weight: 700;
    opacity: 0.95;
}

.btn-newsletter:hover {
    color: #fff;
}

.social-icons {
    color: #fff;
    cursor: pointer;
}

.social-icons i {
    font-size: 20px;
    transition: var(--primaryTransition);
}

.social-icons i:hover {
    color: #C59D5F;
    transform: scale(1.167);
}

/* SECTION - 16 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:991px) {
    @media screen and (min-width:280px) and (max-width:325px) {
        .location_header h1 {
            font-size: 2.795em;
        }
    }

    .location_header {
        margin-top: 100px !important;
        margin-bottom: 65px !important;
    }

    #map {
        margin-bottom: 60px;
    }

    .margin-top-0 {
        margin-top: 0px !important;
    }
}

@media screen and (min-width:768px) and (max-width:1400px) {
    #map {
        height: 100%;
    }
}

/* SECTION - 16 MEDIA QUERY END */
/* SECTION - 16 END */

/* SECTION - 17 START */
.footer {
    position: relative;
    background-color: #191919;
    font-family: 'Poppins';
}

.copyright {
    font-family: 'Poppins';
    color: #fff;
}





@keyframes heart {
    0% {
        transform: scale(1);
        color: var(--bs-danger);
    }

    50% {
        transform: scale(1.2);
        color: var(--bs-info);
    }

    100% {
        transform: scale(1);
        color: var(--bs-danger);
    }
}



.backToTop h6 {
    color: #fff;
}

.backToTop h6 a {
    text-decoration: none;
    color: var(--secondaryColor);
    transition: var(--primaryTransition);
}

.backToTop h6 a:hover {
    color: var(--primaryColor);
}

/* SECTION - 17 MEDIA QUERY START */
@media screen and (min-width:280px) and (max-width:991px) {
    @media screen and (min-width:280px) and (max-width:325px) {
        .copyright {
            margin-top: 0px !important;
        }
    }

    .copyright {
        text-align: center !important;
        margin-top: 20px;
    }


    .backToTop {
        text-align: center !important;
        margin-top: 20px;
    }
}

@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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') format('woff');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s infinite linear;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-container-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}
`