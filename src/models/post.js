import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("post", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  autor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  conteudo: {
    type: Sequelize.STRING(10000),
    allowNull: false,
  },
  foto: {
    type: Sequelize.STRING,   
  },
  
});