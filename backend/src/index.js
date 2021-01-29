const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (requeste, require) => {
    return response.json({ message: 'Hello World' });
});

app.listen(3333);