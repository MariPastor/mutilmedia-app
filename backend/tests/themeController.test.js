const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Theme = require('../models/Theme');
const themeRoutes = require('../routes/themeRoutes');

const app = express();
app.use(express.json());
app.use('/api/themes', themeRoutes);

describe('Theme Controller', () => {
    beforeAll(async () => {
        const url = `mongodb://127.0.0.1/theme_test_db`;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    });

    it('should create a new theme', async () => {
        const res = await request(app)
            .post('/api/themes')
            .send({
                name: 'New Theme',
                allowedContents: { video: true, article: false }
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'Theme created successfully');
    });

    it('should get all themes', async () => {
        const res = await request(app).get('/api/themes');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});