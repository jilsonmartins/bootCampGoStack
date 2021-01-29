const { request } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 3',
        'Projeto 2'
    ]);
});

app.delete('projects/:id', (request, response) => {
    return response.json([
        'Projeto 3'
    ]);
});

app.listen(3333, () => {
    console.log('Back-end started!');
});