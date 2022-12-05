import styled from "styled-components";



const RoomCard = ( {roomInfo, imgSrcNum} ) => {
    if (! typeof imgSrcNum === Number)
        return <div> Rooms Loading ...</div>


    return (
        <a 
            style={{textDecoration:'none', color:'black'}}
            href={`http://localhost:3000/BookRoom/${roomInfo._id}`}>
          <SildWrraper>
            <Slider src={require(`../../Assets/Images/room_image/${imgSrcNum}.jpg`)} />
          </SildWrraper>
          <div style={{marginTop:'10px'}}>
            <h6>
                Name: {roomInfo.name}
            </h6>
            <div style={{
                display:'flex',
                justifyContent:'space-between'}}>

            <h6>
                Number of bed: {roomInfo.Num_of_Bed}                          
            </h6>
            <h6>
                Price: {roomInfo?.price?.Regular_Price?.$numberDecimal} $                        
            </h6>

            </div>
            
          </div>
        </a>
  );
};
const SectionWrraper = styled.section`
  /* border: 2px solid red; */

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
  height: 70%;

`;
const Slider = styled.div`
  background: url(${(slid) => slid.src});
  background-position: center;
  
  /* background: red; */
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-size: cover !important;
  transition-property: transform;
  transform: translate3d(0, 0, 0);
`;

export default RoomCard;
