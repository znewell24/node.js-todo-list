const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const controller = require('./controllers/todoController.js')
const port = process.env.PORT || 5000;

app.get('/getTodoList', controller.getItems);
app.post('/addItem', controller.addItem);
app.post('/deleteItem', controller.deleteItem);
app.post("/addUser", controller.createUser);

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
})
