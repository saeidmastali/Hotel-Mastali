import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { HotelContext } from "../HotelContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { v4 as uuidv4, v4 } from "uuid";
import Confirm from "./Confirm";

const BookRoom = ({ room }) => {
  const { roomId } = useParams();
  const { rooms } = useContext(HotelContext);
  const [date, setDate] = useState(new Date());
  const [numberNight, setNumberNight] = useState(1)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [data, setData] = useState({});
  const [submit, setsubmit] = useState(false);


  const [additionalOption, setAdditionalOption] = useState([
    false,
    false,
    false,
    false,
  ]);
  useEffect(() => {
    if(date.length > 1)
    {
        const Difference_In_Time = date[1].getTime() - date[0].getTime();
        const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24)) - 1;
        setNumberNight(Difference_In_Days)
    }

  }, [date])
  
  const [quantity, setQuantity] = useState({ Adults: 1, children: 0 });

  const selectedRoom = rooms.filter((room) => room._id === roomId)[0];
  const submitFunce = (e, age) => {
    e.preventDefault();
    if (age === 1) setQuantity({ ...quantity, Adults: e.target.value });
    else setQuantity({ ...quantity, children: e.target.value });
  };

  const changePrice = (e, optionNum) => {
    e.preventDefault();
    const newOptions = [...additionalOption];
    newOptions[optionNum] = !newOptions[optionNum];
    console.log(newOptions);
    setAdditionalOption([...newOptions]);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const r_id = v4();
    await setData({
        reservation_id: r_id,
        date: [...date],
        fName: firstName,
        lName: lastName,
        E_mail: emailName,
        cardNum: cardNum,
        quantity: quantity,
        totalPrice: totalPrice
      })
      console.log('==++++++++++++++++++++++++++++=')

        console.log(data);
      fetch("/api/ReseveRoom", {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: selectedRoom._id,
                data: {
                    reservation_id: r_id,
                    date: [...date],
                    fName: firstName,
                    lName: lastName,
                    E_mail: emailName,
                    cardNum: cardNum,
                    quantity: quantity,
                    totalPrice: totalPrice
                  },
            }),
        }).then((res) => res.json()).
        then((parsRes) => {
        console.log('======================================')
        console.log(parsRes)
        if(parsRes.status === 200)
            setsubmit(true);
    });
  };

  const totalPrice = ((selectedRoom?.price?.Regular_Price?.$numberDecimal *
    quantity.Adults +
    quantity.children *
      (selectedRoom?.price?.Regular_Price?.$numberDecimal / 2) +
      additionalOption.filter((option) => option === true)
      .length *
      50) * numberNight);
  return (
    <Wrapper className="wow fadeInLeftBig" data-wow-duration="5s">
        {submit && <Confirm data={data} />}
        <SubmitForm style={{
            opacity:submit ? ".3" : "1"
        }}>

      <RoomImg
        src={require(`../../Assets/Images/room_image/${
          parseInt(selectedRoom.imgSrc) < 12 ? selectedRoom.imgSrc : 3
        }.jpg`)}
      />
      <From onSubmit={(e) => handelSubmit(e)}>
        <Infos>
          <UserInfo>
            <div style={{ width: "50%" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Input
                  type={"text"}
                  placeholder="First Name"
                  require
                  onChange={(e) => setFirstName(e.target.value)}
                  />
                <Input
                  type={"text"}
                  placeholder="Last Name"
                  require
                  onChange={(e) => setLastName(e.target.value)}
                />

                <Input
                  type={"text"}
                  placeholder="Email"
                  require
                  onChange={(e) => setEmailName(e.target.value)}
                  />

                <CreditCard>
                  <input
                    required
                    style={{
                        fontSize: "0.7em",
                      height: "27px",
                      marginTop: "5px",
                      width: "70%",
                    }}
                    type={"text"}
                    placeholder="Card number"
                    require
                    onChange={(e) => setCardNum(e.target.value)}
                    />

                  <input
                    required
                    style={{
                        fontSize: "0.7em",
                        height: "27px",
                        margin: "5px",
                        width: "20%",
                    }}
                    type="date"
                    />
                  <input
                    required
                    style={{
                      fontSize: "0.7em",
                      height: "27px",
                      margin: "5px",
                      width: "10%",
                    }}
                    type="password"
                    placeholder="CVV"
                    />
                </CreditCard>

                <label style={{ color: "black", margin: "0 10px" }}>
                  Adults
                </label>
                <NumberPerson
                  value={quantity.Adults}
                  onChange={(e) => submitFunce(e, 1)}
                  >
                  {[...Array(6).keys()].map((i) => {
                      return <option key={v4()}>{i}</option>;
                    })}
                </NumberPerson>
                <label style={{ color: "black", margin: "0 10px" }}>
                    children
                </label>
                <NumberPerson
                  value={quantity.children}
                  onChange={(e) => submitFunce(e, 2)}
                >
                  {[...Array(6).keys()].map((i) => {
                    return <option key={v4()}>{i}</option>;
                  })}
                </NumberPerson>
              </div>
            </div>
            <div style={{ width: "40%" }}>
              <WrapperData>
                <Label for="Coffee_Tea_Maker"> Coffee/Tea/Maker </Label>
                <input onChange={(e) => changePrice(e, 0)} type="checkbox" />
              </WrapperData>
              <WrapperData>
                <Label for="Microwave"> Microwave </Label>
                <input
                  onChange={(e) => changePrice(e, 1)}
                  type="checkbox"
                  checked={additionalOption[1]}
                  />
              </WrapperData>
              <WrapperData>
                <Label for="Mini_fridge"> Mini fridge </Label>
                <input
                  onChange={(e) => changePrice(e, 2)}
                  type="checkbox"
                  checked={additionalOption[2]}
                  />
              </WrapperData>
              <WrapperData>
                <Label for="Private_Bathroom"> Private Bathroom </Label>
                <input
                  onChange={(e) => changePrice(e, 3)}
                  type="checkbox"
                  checked={additionalOption[3]}
                />
              </WrapperData>
              <WrapperData>
                <Label for="Private_Bathroom"> Beds </Label>
                <Label
                  
                  type="text"
                  checked={additionalOption[3]}
                >{selectedRoom.Num_of_Bed}</Label>
              </WrapperData>
              <WrapperData>
                <Label for="Private_Bathroom"> price </Label>
                <div style={{ marginTop: "10px" }}>
                  {(selectedRoom?.price?.Regular_Price?.$numberDecimal *
                    quantity.Adults +
                    quantity.children *
                      (selectedRoom?.price?.Regular_Price?.$numberDecimal / 2) +
                      additionalOption.filter((option) => option === true)
                      .length *
                      50) * numberNight}{" "}
                  $
                </div>
              </WrapperData>


            </div>
          </UserInfo>
          <CalendarWrapper>
            <h1 style={{ color: "black" }} className="text-center">
              Select your date
            </h1>
            <div className="calendar-container">
              <Calendar onChange={setDate} value={date} selectRange={true} />
            </div>
          </CalendarWrapper>
        </Infos>
        <Input type="submit" />
      </From>
    </SubmitForm>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh);
  transition: all 1s ease-in;
  position: relative;
`;

const SubmitForm = styled.div``

const From = styled.form`
  text-align: center;
  margin: 0;
  padding: 0;
`;
const RoomImg = styled.div`
  background: url(${(slid) => slid.src});
  background-position: center;
  border-radius: 0 0 10px 10px;
  /* background: red; */
  min-height: 200px;
  width: 100%;
  background-size: cover !important;
  transition-property: transform;
  transform: translate3d(0, 0, 0);
`;
const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
`;

const UserInfo = styled.div`
  margin: 10px 0;
  padding: 20px;
  border: 2px solid darkgoldenrod;
  border-radius: 10px;
  width: 60%;
  min-height: 280px;
  display: flex;
`;
const CalendarWrapper = styled.div``;

const Input = styled.input`
  border: 1px solid;
  border-radius: 5px;
  height: 27px;
  margin: 4px;
  width: 80%;
  :hover {
    background-color: darkgoldenrod;
    color: white;
  }
  /* box-lines: none; */
  /* text-decoration: none; */
`;
const CreditCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
`;
const NumberPerson = styled.select`
  border: 1px solid;
  border-radius: 5px;
  height: 35px;
  margin: 0 10px;
  width: 80%;
  text-align: center;
`;

const Label = styled.label`
  margin: 10px;
`;

const WrapperData = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default BookRoom;
