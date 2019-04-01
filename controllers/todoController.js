// Controllers.js
const model = require('../models/todoModel.js');

function getItems(request, response) {

    model.getAllItems(function(err, data) {
            data = {
                success: true
                ,items: data
            };

            response.json(data.items);
    });
}

module.exports = {
    getItems: getItems
}