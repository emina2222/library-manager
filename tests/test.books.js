const request = require('supertest');
const app = require('../src/app');

describe('Books API', () => {
    it('should fetch all books', async () => {
        const res = await request(app).get('/api/books');
        
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
