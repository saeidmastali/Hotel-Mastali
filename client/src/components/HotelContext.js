import { useEffect, useState, createContext } from "react";

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [rooms, setRooms] = useState(null);
  const [roomsfilter, setRoomsfilter] = useState(null);

  const [roomStatus, setRoomStatus] = useState("ready");
  useEffect(() => {
    try {
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
    } catch (error) {
      console.log("innsid hotelcontext error");
    }

  }, []);
  if (rooms === null) return <div> Loading ... </div>
  return (
    <HotelContext.Provider
      value={{
        rooms,
        setRooms,
        roomsfilter, 
        setRoomsfilter
      }}
    >{children}</HotelContext.Provider>
  );
};
