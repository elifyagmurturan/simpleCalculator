const express = require('express');
const app = express();
const MongoClient = require('mongodb');
const PORT = 3000;

app.use(express.static('public'));
let db;
const url = 'mongodb://localhost:27017/calculator'

MongoClient.connect(url, (err, database)=> {
    if(err){
        return console.log(err);
    }
    db = database;
    app.listen(PORT, () => {
        console.info(`The app started running on port${PORT}`)
    });
});

app.get('/', (req, res)=> {
    res.sendFile(__dirname, '/index.html')
});

app.post('/add', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    console.log(db);
    db.collection('calculator').save(click, (err, res)=>{
        if(err){
            return console.log(err);
        }
        console.log('click added to db');
        res.sendStatus(201);
    });
});
