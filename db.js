import Sequelize from 'sequelize';
import { config } from './config/index.js';


const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host:config.dbHost,
  port:config.dbPort,
  dialect: config.dbDialect,
  dialectOptions:{
    
  },
  logging: false,
  //timezone:config.timeZone
  // logging: (process.env.NODE_ENV === 'development' ? true : false),
});

try {
    await sequelize.authenticate();
    console.log('Connection to DB has been established successfully.');
  } catch (error) {
    console.log('Unable to connect to the database:', error);
}

export default sequelize;