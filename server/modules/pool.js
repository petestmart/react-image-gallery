// Node Module that will connect to postgresql
const pg = require('pg');

// Set up PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool ({
    database: 'react_gallery',      // database name
    host: 'localhost',  // where to find the database
    port: 5432,         // port for finding the database
    max: 10,            // max connections
    idleTimeoutMillis: 30000 // 30 seconds
});

// Listener on the pool
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with the database pool', error);
});

module.exports = pool;