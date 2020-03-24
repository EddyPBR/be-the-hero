const connection = require('../database/connection');

module.exports = {

    // listar
    async index(request, response) {
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    },

    // cadastrar
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({
            title, 
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    // delete
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if (incident.ong_id != ong_id) {
            return response.status(401).json({
                error: "Operation not permitted."
            });
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};
