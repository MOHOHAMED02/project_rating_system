const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let projects = [];
let currentId = 1;


app.get('/api/projects', (req, res) => {
    res.json(projects);
});



