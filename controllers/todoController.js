// Controllers.js
const model = require('../models/todoModel.js');

function getItems(request, response) {

    model.getAllItems(function(err, data) {
            data = {
                success: true
                ,items: data
            };

            response.json(data);
    });
}

function addItem(request, response) {
    var data = [request.body.name, request.body.due_date];

    
}

function deleteItem(request, response) {

}

module.exports = {
    getItems: getItems,
    addItem: addItem,
    deleteItem: deleteItem
}