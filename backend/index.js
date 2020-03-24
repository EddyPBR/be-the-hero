const express = require('express');

const app = express();

// converte o json em um objeto entendível pela aplicação
app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmentros nomeados enviados na rota após "?" (Filtros, Páginação)
 * Route Params: Parâmentros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar e alterar recursos
 * 
 */

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Oministack 11',
        aluno: 'Edvaldo Junior',
    });

});

app.listen(3333);

