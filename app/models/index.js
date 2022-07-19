const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    ssl: {
        rejectUnauthorized: false
    },
    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },

});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.bills = require("./bill.model.js")(sequelize, Sequelize);




module.exports = db;