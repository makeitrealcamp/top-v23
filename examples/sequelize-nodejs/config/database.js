const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('top-v23', 'postgres', 'password', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

const sequelize = new Sequelize('postgresql://postgres:password@localhost:5432/top-v23')

module.exports = sequelize;
