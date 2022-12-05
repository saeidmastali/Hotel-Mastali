const { ObjectID } = require('bson');
const {creatClient} = require('./utils');


const client = creatClient();

const dbNme = 'finalProjectDatabase';

const ReservRoom = async (req, res) => {

    try {
        const {id, data}  = req.body;
        console.log('+++++++++++++++++++++++++++++++++++++++++++++');
        console.log(id);
        console.log(data);
        await client.connect();
        console.log('ooooooooooooooooooooooooooo');

        const db = client.db(dbNme);
        const result = await db.collection("Hotel info")
            .updateOne({_id: ObjectID(id)},{$push:{Booked:data}});

            // 
        console.log('+++++++++++++++++++++++result++++++++++++++++++++++');

        console.log(result);
        return res.status(200).json({status:200, data:result})

    } catch (error) {
        res.status(500).json({status:500, message: error.message})

    }
}

module.exports = {ReservRoom}