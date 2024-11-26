const db = require('./db')

(async () => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS book (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                author VARCHAR(255) NOT NULL
            );
        `);
        console.log('Database initialized');
        process.exit(0);
    } catch (err) {
        console.error('Error initializing database', err);
        process.exit(1);
    }
})();