'use strict'

import sequelize from '../../db.js'
import Sequelize from 'sequelize';

const model = (sequelize, DataTypes) => {
  let users = sequelize.define('users',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    identification_card: {
        type:DataTypes.INTEGER,
        unique:true,
    },
    phone: {
      type:DataTypes.STRING,
  },
  password: {
    type:DataTypes.STRING,
},
    status: {
      type:DataTypes.INTEGER,
    },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
  

  return users
}

export default model(sequelize, Sequelize.DataTypes)