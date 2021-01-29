const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json({ message: 'Hello World' });
});

app.post('/projects', (request, response) => {
    const { title, owner} = request.body;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    console.log(id);

    return response.json([
        'Projeto 3',
        'Projeto 2',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 3',
        'Projeto 2',
    ]);
});

app.listen(3333, () => {
    console.log('Back-end started!');
});