const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const user = require('./models/user');

// require('./models');
const port = process.env.PORT || 3000;
// chack the co



app.use(bodyParser.json());

app.get('/', function (req, res) {

    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});