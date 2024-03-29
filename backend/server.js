const express = require('express');
const connectDB = require('./Config/database');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Rotas
app.use('/user', userRoutes); // Rotas de usuários
app.use('/products', productRoutes); // Rotas de produtos

// Rota de teste
app.get('/', (req, res) => {
    res.send('A API está funcionando.');
});

// Inicialização do servidor
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`O servidor está rodando na porta ${PORT}`);
    });
};

startServer();
