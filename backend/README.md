# Multimedia Content App - Backend

This is the backend application for managing multimedia content. It provides APIs for user authentication, content management, and theme management.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/multimedia-content-app.git
    cd multimedia-content-app/backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Configuration

1. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    MONGO_URI=mongodb://localhost:27017/multimedia-app
    JWT_SECRET=your_jwt_secret
    ```

2. Ensure MongoDB is running on your local machine or update the `MONGO_URI` to point to your MongoDB instance.

## Running the Application

1. Start the development server:

    ```sh
    npm run dev
    ```

    The server will start on `http://localhost:5000`.

## API Endpoints

### Authentication

- **Register a new user**

    ```http
    POST /api/auth/register
    ```

    Request Body:

    ```json
    {
        "username": "testuser",
        "email": "testuser@example.com",
        "password": "password123",
        "role": "user"
    }
    ```

- **Login a user**

    ```http
    POST /api/auth/login
    ```

    Request Body:

    ```json
    {
        "email": "testuser@example.com",
        "password": "password123"
    }
    ```

### Themes

- **Create a new theme**

    ```http
    POST /api/themes
    ```

    Request Body:

    ```json
    {
        "name": "New Theme",
        "allowedContents": { "video": true, "article": false }
    }
    ```

- **Get all themes**

    ```http
    GET /api/themes
    ```

### Categories

- **Create a new category**

    ```http
    POST /api/categories
    ```

    Request Body:

    ```json
    {
        "name": "New Category",
        "allowedUsers": { "reader": true, "creator": false },
        "image": "http://example.com/image.jpg"
    }
    ```

- **Get all categories**

    ```http
    GET /api/categories
    ```

### Contents

- **Create a new content**

    ```http
    POST /api/contents
    ```

    Request Body:

    ```json
    {
        "title": "New Content",
        "type": "video",
        "url": "http://example.com/video.mp4",
        "credits": "author123",
        "theme": "60c72b2f9b1d4c3a4c8b4567"
    }
    ```

- **Get all contents**

    ```http
    GET /api/contents
    ```

- **Get content by category or theme**

    ```http
    GET /api/contents/search?category=CategoryID&theme=ThemeID
    ```

## Testing

1. Run the tests:

    ```sh
    npm test
    ```

    This will run the Jest test suite.
