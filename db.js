const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:[SUA_SENHA]@db.xxxx.supabase.co:5432/postgres', {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};