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

app.post('/api/projects', (req, res) => {
    const { name, description, image, link, rating } = req.body;
    const newProject = {
        id: currentId++,
        name,
        description,
        image,
        link,
        rating: parseInt(rating) || 0
    };
    projects.push(newProject);
    res.status(201).json(newProject);
});



