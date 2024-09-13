const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(morgan('dev'));


// Definir las rutas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/themes', require('./routes/themeRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/contents', require('./routes/contentRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
