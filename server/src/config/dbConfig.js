require('dotenv').config({ path: 'src/config/.env' });

const DB_ENV = process.env.DB_ENV; // dev, test, prod
const POSTGRES_DATABASE_NAME = process.env.POSTGRES_DATABASE_NAME;
const POSTGRES_DATABASE_USERNAME = process.env.POSTGRES_DATABASE_USERNAME;
const POSTGRES_DATABASE_PASSWORD = process.env.POSTGRES_DATABASE_PASSWORD;
const POSTGRES_DATABASE_HOST = process.env.POSTGRES_DATABASE_HOST;
const POSTGRES_DATABASE_PORT = process.env.POSTGRES_DATABASE_PORT;
const POSTGRES_DATABASE_DIALECT = process.env.POSTGRES_DATABASE_DIALECT;

module.exports = {
	development: {
		username: POSTGRES_DATABASE_USERNAME,
		password: POSTGRES_DATABASE_PASSWORD,
		database: POSTGRES_DATABASE_NAME,
		host: POSTGRES_DATABASE_HOST,
		port: POSTGRES_DATABASE_PORT,
		dialect: POSTGRES_DATABASE_DIALECT,
	},
	test: {
		username: POSTGRES_DATABASE_USERNAME,
		password: POSTGRES_DATABASE_PASSWORD,
		database: POSTGRES_DATABASE_NAME,
		host: POSTGRES_DATABASE_HOST,
		port: POSTGRES_DATABASE_PORT,
		dialect: POSTGRES_DATABASE_DIALECT,
	},
	production: {
		username: POSTGRES_DATABASE_USERNAME,
		password: POSTGRES_DATABASE_PASSWORD,
		database: POSTGRES_DATABASE_NAME,
		host: POSTGRES_DATABASE_HOST,
		port: POSTGRES_DATABASE_PORT,
		dialect: POSTGRES_DATABASE_DIALECT,
	},
};