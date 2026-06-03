const db = require('../db');

const Livro = db.sequelize.define('livro', {
  id_livro: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: { type: db.Sequelize.STRING(100), allowNull: false },
  preco: { type: db.Sequelize.DOUBLE, allowNull: false },
  categoria_id: { type: db.Sequelize.INTEGER, allowNull: false }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Livro;