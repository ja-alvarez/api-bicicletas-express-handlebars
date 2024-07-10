import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    port: '5432',
    database: 'db_bicicletas'
});

// let results = await pool.query('SELECT NOW()');
// console.log(results.rows)

export default pool;