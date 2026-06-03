const express = require('express');
const cors = require('cors');
const { sequelize } = require('./db');
const rotasLivro = require('./routes/LivroController');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API Livros (Sequelize + CommonJS) - Operando'));
app.use('/livros', rotasLivro);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Servidor rodando na porta ${PORT}`);
    app.listen(PORT, '0.0.0.0');
  } catch (err) {
    console.error('Erro fatal ao inicializar o banco:', err);
    process.exit(1);
  }
})();