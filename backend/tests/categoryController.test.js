const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Category = require('../models/Category');
const categoryRoutes = require('../routes/categoryRoutes');

const app = express();
app.use(express.json());
app.use('/api/categories', categoryRoutes);

describe('Category Controller', () => {
    beforeAll(async () => {
        const url = `mongodb://127.0.0.1/category_test_db`;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    });

    it('should create a new category', async () => {
        const res = await request(app)
            .post('/api/categories')
            .send({
                name: 'New Category',
                allowedUsers: { reader: true, creator: false },
                image: 'http://example.com/image.jpg'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'Category created successfully');
    });

    it('should get all categories', async () => {
        const res = await request(app).get('/api/categories');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});