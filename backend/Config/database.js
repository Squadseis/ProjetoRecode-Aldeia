const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/arteindig';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexão com o MongoDB estabelecida');
    } catch (err) {
        console.error('Erro ao conectar com o MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;

