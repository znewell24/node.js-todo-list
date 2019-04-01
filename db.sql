CREATE TABLE login
(
    id SERIAL PRIMARY KEY
    , username VARCHAR(50) NOT NULL
    , password VARCHAR(20)
);

CREATE TABLE items
(
    id SERIAL PRIMARY KEY
    , name VARCHAR(80) NOT NULL
    , due_date TIMESTAMP NOT NULL
);

CREATE TABLE todoList
(
    id SERIAL PRIMARY KEY
    , login_id INT NOT NULL REFERENCES login(id)
    , items_id INT NOT NULL REFERENCES items(id)
);

INSERT INTO items (name, due_date)
VALUES ('Do Laundry', '2019-04-13 12:00:00')
       ,('Doctors appointment', '2019-04-13 13:00:00');