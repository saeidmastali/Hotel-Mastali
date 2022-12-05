import imgSrc from '../../Assets/Images/Gallery/restaurantkitchen.jpeg';

import styled from "styled-components";


const Section8 = () =>{
    return (
        <SectionWrraper 
            src={imgSrc}
            className="container-fluid wow flash" id="gallery" data-wow-duration="2s">
        <Overlay></Overlay>
        <div className="container">
            <div className="row">
                <div className="col-md-12" style={{zIndex:'4'}}>
                    <div className="gallery-banner-title">
                        <h1>Our Gallery</h1>
                        <h3>Enriched with premium interior, Room Quality and food quality</h3>
                    </div>
                </div>
            </div>
        </div>
    </SectionWrraper>
    )
}

const SectionWrraper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(70vh);
    position: relative;
    background: url(${(img) => img.src});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    flex-direction: column;
    margin-bottom: 130px;
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
export default Section8;