const Sequelize = require("sequelize").Sequelize;

const db = new Sequelize(
	process.env.DB_DATABASE,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host : process.env.DB_HOST,
		dialect : process.env.DB_DB
	}
);

module.exports = db;