const { Pool } = require ('pg');

const PG_URI = 'postgres://ocbfziey:q_tZ0_OP5VCvFOy6KYGILhnN0cdulFkq@salt.db.elephantsql.com/ocbfziey';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
};