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

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*').where()
 * 
 * A query builder utilizada foi knex.js, seguem os comandos:
 * 
 * yarn add knex
 * yarn add sqlite3
 * yarn knex init
 * 
 */

// converte o json em um objeto entendível pela aplicação
app.use(express.json());

/**
 * Criando migrations
 * 
 * dentro do arquivo knexfile.js adicione o seguinte código dentro de "development"
 * migrations: { directory: './src/database/migrations' }
 * 
 * e execute o comando:
 * yarn knex migrate:make nome_da_migration
 * 
 * para remover o aviso do sqlite adicione o seguinte trecho de código dentro de "development"
 * useNullAsDefault: true
 * 
 * foi criado um arquivo com a data_nome_informado
 * dentro dele existe duas funções o UP e o DOWN:
 * => UP cria as tabelas
 * => DOWN em caso de falha da criação da tabela (UP) o que deve ser feito? (normalmente dropa a tabela)
 * 
 * configurado ambos, execute o comando:
 * yarn knex migrate:latest
 * 
 * e vualá, foi criado o banco de dados
 * 
 * yarn knex lista todos os comandos possiveis
 * 
 */

 /**
  * PACOTE CRYPTO (ja vem com o NODE)
  * 
  * foi utilizado para obter um ID da ONG
  * 
  */

/**
 * Sobre Login, normalmente ID's vem no header da requisição (request.headers;)
 * A contagem de quantos "CASOS" existem na consulta tambem são passadas no headers como mostrado a seguir:
 * ==> response.header('X-Total-Count', count['count(*)']);
 * 
 */

/**
 * Ler mais sobre http status code é interessante visto o
 * que é passado no DELETE do IncidentController.js
 * 
 */

/**
 * Controllers:
 * 
 * Session é para o login
 * Profile é para listagens especificas
 * 
 * PS: pelo padrão MVC só podem existir 5 funcionalidades por arquivo de controller
 *     interessante ler mais sobre.
 * 
 */
