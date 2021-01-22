const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello'))


app.get('/api/appetizers', (req, res) => {
    var json = {
        
        "items": [
            {"id": 1,"name":"nachos", "price":"8.00"},
            {"id": 2, "name":"soft pretzel", "price":"6.00"},
            {"id": 3, "name":"chicken wings", "price":"10.00"},
            {"id": 4, "name":"french fries", "price":"3.00"},

        ],
        
    }

    res.send(json);
})

app.get('/api/entrees', (req, res) => {
    var json = {
        
        "items": [
            {"id": 1,"name":"burger", "price":"8.00"},
            {"id": 2, "name":"grilled chicken", "price":"9.00"},
            {"id": 3, "name":"steak", "price":"15.00"}
        ],
        
    }

    res.send(json);
})

app.get('/api/drinks', (req, res) => {
    var json = {
        
        "items": [
            {"id": 1,"name":"soft drink", "price":"2.00"},
            {"id": 2, "name":"water", "price":"0.00"},
            {"id": 3, "name":"lemonade", "price":"3.00"}
        ],
        
    }

    res.send(json);
})

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
});