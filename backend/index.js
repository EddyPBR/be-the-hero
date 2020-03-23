const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        project: 'Semana Oministack 11',
        aluno: 'Edvaldo Junior',
    });
});

app.listen(3333);

