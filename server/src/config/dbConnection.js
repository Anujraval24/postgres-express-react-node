import { redBright, greenBright } from 'chalk';
import { Sequelize } from 'sequelize';

require('dotenv').config({ path: 'src/config/.env' });
/* Environment Config */
// const DB_ENV = process.env.DB_ENV;
// const POSTGRES_DATABASE_NAME = process.env.POSTGRES_DATABASE_NAME + '_' + DB_ENV;
const POSTGRES_DATABASE_NAME = process.env.POSTGRES_DATABASE_NAME;
const POSTGRES_DATABASE_USERNAME = process.env.POSTGRES_DATABASE_USERNAME;
const POSTGRES_DATABASE_PASSWORD = process.env.POSTGRES_DATABASE_PASSWORD;
const POSTGRES_DATABASE_HOST = process.env.POSTGRES_DATABASE_HOST;
const POSTGRES_DATABASE_DIALECT = process.env.POSTGRES_DATABASE_DIALECT;

(async () => {
	try {
		const sequelize = new Sequelize(POSTGRES_DATABASE_NAME, POSTGRES_DATABASE_USERNAME, POSTGRES_DATABASE_PASSWORD, {
			host: POSTGRES_DATABASE_HOST,
			dialect: POSTGRES_DATABASE_DIALECT,
		});

		await sequelize.authenticate();
		await sequelize.sync();

		console.info(greenBright(`DB Connection with ${POSTGRES_DATABASE_NAME} established successfully.`));
	} catch (error) {
		console.error(redBright('Error occured in db connection', error));
	}
})();
