// Controllers.js
const model = require('../models/todoModel.js');

function getItems(request, response) {

    model.getAllItems(function(err, data) {
            data = {
                success: true
                ,scriptures: data
            };

            response.json(data);
    });
}

module.exports = {
    getItems: getItems
}