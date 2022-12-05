const {creatClient} = require('./utils');


const client = creatClient();

const dbNme = 'finalProjectDatabase';

const getAllRoomsInfo = async (req, res) => {

    try {
        console.log('check for api request');
        await client.connect();
        const db = client.db(dbNme);
        const result = await db.collection("Hotel info").find().toArray();

        return res.status(200).json({status:200, data:result})

    } catch (error) {
        res.status(500).json({status:500, message: error.message})

    }
}

module.exports = {getAllRoomsInfo}