const{Pool} = require('pg');
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({connectionString: connectionString});

function getAllItems(callback) {
    pool.on('error', (err, client) => {
        console.error('error on client', err);
        process.exit(-1);
    });

    pool.connect((err, client, done) => {
        if (err) throw err

        client.query('SELECT * FROM items', [1], (err, res) => {

            if (err) {
                console.log(err)
                callback(err, null);
            } 

            callback(null, res.rows);

        });
    });

        // const items = [
        //     {id: 1, item: "do laundry", complete: "04-10-19"}
        //     ,{id: 2, item: "doctors appointment", complete: "04-10-19"}
        //     ,{id: 3, item: "do dishes", complete: "04-12-19"}
        // ]

}

module.exports = {
    getAllItems: getAllItems
};