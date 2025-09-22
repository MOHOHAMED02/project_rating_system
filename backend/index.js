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

app.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, image, link, rating } = req.body;
    const project = projects.find(p => p.id == id);
    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }
    project.name = name;
    project.description = description;
    project.image = image;
    project.link = link;
    project.rating = parseInt(rating) || 0;
    res.json(project);
});

app.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    projects = projects.filter(p => p.id != id);
    res.json({ message: 'Project deleted' });
});


app.post('/api/projects/:id/upvote', (req, res) => {
    const { id } = req.params;
    const project = projects.find(p => p.id == id);
    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }
    project.rating++;
    res.json(project);
});



