const{Pool} = require('pg');
const conn = "something";
pool = Pool({connectionString: conn});

function getAllItems(callback) {
        const items = [
            {id: 1, item: "do laundry", complete: "04-10-19"}
            ,{id: 2, item: "doctors appointment", complete: "04-10-19"}
            ,{id: 3, item: "do dishes", complete: "04-12-19"}
        ]

    callback(null, items);
}

module.exports = {
    getAllItems: getAllItems
};