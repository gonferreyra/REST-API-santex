import { DataTypes } from 'sequelize';
import db from '../database/database.js';
import Book from './Book.js';

const Libraries = db.define(
  'libraries',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
  }
);

Libraries.hasMany(Book, {
  foreignKey: {
    name: 'libraryId',
  },
  sourceKey: 'id',
});

Book.belongsTo(Libraries, {
  foreignKey: {
    name: 'libraryId',
    targetId: 'id',
    allowNull: true,
  },
});

export default Libraries;
