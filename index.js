const express = require('express');
const app = express();

const controller = require('./controllers/todoController.js')

const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/getTodoList', controller.getItems);

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
})
