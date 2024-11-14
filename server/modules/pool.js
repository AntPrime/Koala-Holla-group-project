const pg = require( 'pg' );

const pool = new pg.Pool({
    host: 'localhost',
    database: 'koala_holla',
    port: 5432,
    max: 12,
    idleTimeoutMillis: 30000
})

module.exports = pool;