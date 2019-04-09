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
    const name = request.body.name;
    const due = request.body.due_date;

    model.addItem(name, due, function(error, data) {
        newItem = {
            success: true
            ,item: data
        };

        response.json(newItem);
    });
}

function deleteItem(request, response) {
    const name = request.body.name;

    model.deleteItem(name, function(error, data) {
        deletedItem = {
            success: true
            ,item: data
        };
    });
}

function createUser(request, response) {
    const username = request.body.username;
    const password = request.body.password;

    console.log(`Registering new user: ${username}:${password}`);

    model.createUser(username, password, function(error, data) {
        response.redirect("todo.html");
    });
}

module.exports = {
    getItems: getItems,
    addItem: addItem,
    deleteItem: deleteItem,
    createUser: createUser
}