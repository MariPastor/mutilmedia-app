const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Content = require('../models/Content');
const contentRoutes = require('../routes/contentRoutes');

const app = express();
app.use(express.json());
app.use('/api/contents', contentRoutes);

describe('Content Controller', () => {
    beforeAll(async () => {
        const url = `mongodb://127.0.0.1/content_test_db`;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    });

    it('should create a new content', async () => {
        const res = await request(app)
            .post('/api/contents')
            .send({
                title: 'New Content',
                type: 'video',
                url: 'http://example.com/video.mp4',
                credits: 'author123',
                theme: '60c72b2f9b1d4c3a4c8b4567'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'Content created successfully');
    });

    it('should get all contents', async () => {
        const res = await request(app).get('/api/contents');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should get content by category or theme', async () => {
        const res = await request(app).get('/api/contents/search?category=60c72b2f9b1d4c3a4c8b4568&theme=60c72b2f9b1d4c3a4c8b4567');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});