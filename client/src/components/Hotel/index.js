import { useContext, useEffect } from "react";
import styled from "styled-components";
import { HotelContext } from "../HotelContext";
import RoomCard from "./RoomCard";
import SideBar from "./SideBar";

const Hotel = () => {
  const { 
    rooms,
    roomsfilter, 
    setRoomsfilter } = useContext(HotelContext);

    useEffect(() => {
      setRoomsfilter(rooms)
    
    }, [])
    
//   const a = [...roomsfilter,...roomsfilter]
  const wowStyle = ['fadeInRightBig', 'fadeInLeftBig',
  'bounce', 'bounceInUp', 'wobble', 'flash', 'bounceInDown', 'bounceOutUp', 'fadeInUp' ]
 return (
    <Wrapper>
        <SlidBarWrapper 
        className="wow fadeInLeftBig"
        data-wow-duration="5s">
            <SideBar/>
        </SlidBarWrapper>
        <div>

        <Cards>

          {roomsfilter.map((room, index) => {
              return (
                  <RoomWrapper
                  className={`container-fluid wow ${
                      wowStyle[Math.floor(Math.random() * (wowStyle.length - 1))]}`}
                      id={room.id}
                      data-wow-duration="3s">
                <RoomCard roomInfo={room} imgSrcNum={index+1}/>
            </RoomWrapper>
            )
        })}
        </Cards>
        </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
    display: flex ;
    position: relative;
    min-height: calc(100vh - 0px);
    min-width: calc(100vw - 0px);
`

const SlidBarWrapper =styled.div`
    min-width: 20%;
    background-color: darkgoldenrod;
`
const RoomWrapper = styled.section`
  min-height: 300px;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
    /* border: 2px solid green; */
  

`;
const Cards = styled.div`
  /* border: 2px solid red; */
  min-height: calc(100vh - 0px);
  position: relative;
  display: grid;
  grid-template-columns: 400px 400px 400px ;
  justify-content: center !important;
  margin: 20px;
  `;

export default Hotel;
