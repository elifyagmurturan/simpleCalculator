const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.info(`The app started running on port${PORT}`)
});

app.get('/', (req, res)=> {
    res.sendFile(__dirname, '/index.html')
});
