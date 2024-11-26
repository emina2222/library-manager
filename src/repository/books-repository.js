const db = require('../db/db')

class BookRepository{
    async getAll(){
        const result = await db.query('SELECT * from book')
        return result.rows
    }

    async addBook(book){
        const result = await db.query(
            'INSERT INTO books (id, title, author) VALUES ($1, $2, $3) RETURNING *', 
            [book.id, book.title, book.author]
        )

    }
}

module.exports=BookRepository