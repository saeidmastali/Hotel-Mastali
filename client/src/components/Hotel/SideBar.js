import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { v4 as uuidv4, v4 } from "uuid";
import { HotelContext } from "../HotelContext";
const SideBar = () => {
  const [date, setDate] = useState(new Date());
  const [quantity, setQuantity] = useState({ Adults: 1, children: 0 });
  const { roomsfilter, setRoomsfilter, rooms} = useContext(HotelContext);

  useEffect(() => {
    setRoomsfilter([...rooms]);
    if (date[0] != undefined)
    {

        const newarray = roomsfilter.filter(room => {
        if(room.Booked[0] === '') return true
        return room.Booked.every(book => {
            console.log('=======================================')
            console.log('iassdsadsadsadsbook is time',(date[0]));
            const startReserve = new Date(book.date[0]).getTime();

            console.log('startReserve is time',startReserve);

            const endReserve = new Date(book.date[1]).getTime();
            console.log('endReserve is time',endReserve);
            
            const crStartReserve = date[0].getTime();
            console.log('crStartReserve is time',crStartReserve);

            const crEndReserve = date[1].getTime();
            console.log('crEndReserve is time',crEndReserve);
            
            
            
            if ((crStartReserve < startReserve && crEndReserve < startReserve) ||
            (crStartReserve > endReserve && crEndReserve < endReserve))
            return true
            else return false
        })
    })
    console.log("final chek", newarray)
    setRoomsfilter([...newarray]);
}
    // setRoomsfilter([])


    // roomsfilter.filter(room => {
    //     rtuern
    // })
  }, [date]);

  const submitFunce = (e, age) => {
    e.preventDefault();
    if (age === 1) setQuantity({ ...quantity, Adults: e.target.value });
    else setQuantity({ ...quantity, children: e.target.value });
  };
  return (
    <Wrapper className="app">
         <h1 style={{ color: "white" }} className="text-center">
        Select your date
      </h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} selectRange={true} />
      </div>
   <Num>
        <label style={{ color: "white" }}>Adults</label>
        <NumberPerson
          value={quantity.Adults}
          onChange={(e) => submitFunce(e, 1)}
        >
          {[...Array(6).keys()].map((i) => {
            return <option key={v4()}>{i}</option>;
          })}
        </NumberPerson>
      </Num>
      <Num>
        <label style={{ color: "white" }}>children</label>
        <NumberPerson
          value={quantity.children}
          onChange={(e) => submitFunce(e, 2)}
        >
          {[...Array(6).keys()].map((i) => {
            return <option key={v4()}>{i}</option>;
          })}
        </NumberPerson>
      </Num>
      <div style={{color:"white", margin:'25px'}}>
        Number of available room: {roomsfilter.length}
      </div>
    </Wrapper>
  );
};
const Num = styled.div`
  display: flex;
  margin: 10px 20px;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  height: 100%;
  align-items: center;
  /* align-content: center; */
  text-align: center;
  /* background-color: dar; */
  /* border: 2px solid blue; */
`;

const NumberPerson = styled.select`
  width: 40%;
  margin: 0 20px;
`;

export default SideBar;
