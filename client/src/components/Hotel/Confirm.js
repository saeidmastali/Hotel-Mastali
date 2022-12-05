import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HotelContext } from "../HotelContext";

const Confirm = ({data}) => {
    const {setRoomsfilter, setRooms} = useContext(HotelContext)
    useEffect(() => {
        fetch("/api/allRoomsInfo")
        .then((res) => res.json())
        .then((parseRes) => {
            if (parseRes.status === 200)
            {
              setRooms(parseRes.data)
              setRoomsfilter(parseRes.data)
            }
            }).
            catch(err => console.log("this is a new error",err))
    

    }, [])
    
    return (
        <Wrapper>
            Your Resevation information is:
            <div>Name : {data.fName}</div>
            <div>lastName : {data.lName}</div>
            <div>Name : {data.fName}</div>
            <div>From : {data.date[0].toDateString()}</div>
            <div>To : {data.date[1].toDateString()}</div>

            <div>Adults : {data.quantity.Adults}</div>
            <div>children : {data.quantity.children}</div>
            <div style={{display: 'flex', justifyContent:"space-between"}}>
                <div>Total Price : {data.totalPrice} $</div>
                    <A href="http://localhost:3000/#">
                        ok
                    </A>
            </div>




        </Wrapper>
    )

}

const A = styled.a`
    text-decoration: none;
    color: white;
    margin-right: 20px;
    :hover{
        border: 2px solid with;
    }
`
const Wrapper = styled.form`
z-index: 10;
width: 500px;
height: 300px;
background-color: darkgoldenrod;
opacity: 1;
left: 30%;
color: white;
font-size: 1.2em;
font-weight: bold;
position: absolute;
border-radius: 8px;
margin: 20px;
padding: 10px;
`
export default Confirm;