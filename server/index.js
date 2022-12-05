const express = require('express');
const helmet =require("helmet");
const morgan = require("morgan");
const { getAllRoomsInfo } = require('./Handler/getAllRoomsInfo');
const { ReservRoom } = require('./Handler/ReserveRoom');
const port = 8000;

express()
    .use(express.json())
     .use(helmet())
     .use(morgan("tiny"))

    .get('/api/allRoomsInfo', getAllRoomsInfo)

    .patch('/api/ReseveRoom', ReservRoom)


.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});