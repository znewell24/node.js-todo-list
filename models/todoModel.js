const{Pool} = require('pg');
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({connectionString: connectionString});

function getAllItems(callback) {
    pool.on('error', (err, client) => {
        console.error('error on client', err);
        process.exit(-1);
    });

    pool.connect((err, client, done) => {
        if (err) {
            throw err;
        }

        client.query('SELECT * FROM items').then((res) => {

            if (err) {
                console.log(err)
                callback(err, null);
            } 

            callback(null, res.rows);
            pool.end();
        });
    });

        // const items = [
        //     {id: 1, item: "do laundry", complete: "04-10-19"}
        //     ,{id: 2, item: "doctors appointment", complete: "04-10-19"}
        //     ,{id: 3, item: "do dishes", complete: "04-12-19"}
        // ]

}

function addItem(name, due, callback) {
    const sql = "INSERT INTO items (name, due_date) VALUES($1, $2) RETURNING id";
    const params = [name, due];

    pool.query(sql, params, function(error, result) {
        if (error) {
            console.log("An error occurred in the DB");
            console.log(error);

            callback(error, null);
        } else {
            console.log("DB Query finished");
            console.log(result.rows);
            callback(null, result.rows);
        }
    });
}

function deleteItem(params, callback) {

}

function createUser(username, password, callback) {

    const sql = "INSERT INTO login (username, password) VALUES($1, $2) RETURNING  id";
    const params = [username, password];

    pool.query(sql, params, function(error, result) {
        if (error) {
            console.log("An error occurred in the DB");
            console.log(error);

            callback(error, null);
        } else {
            console.log("DB Query finished");
            console.log(result.rows);
            callback(null, result.rows);
        }

    });
}

module.exports = {
    getAllItems: getAllItems,
    addItem: addItem,
    deleteItem: deleteItem,
    createUser: createUser
};