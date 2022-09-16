const { DataTypes } = require('sequelize');

const Task = require('../task/task.model');

const sequelize = require('../../config/database');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Project.hasMany(Task, {
  foreignKey: 'projectId',
  sourceKey: 'id',
});

Task.belongsTo(Project, {
  foreignKey: 'projectId',
  targetKey: 'id',
})

module.exports = Project;
