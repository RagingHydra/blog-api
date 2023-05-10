import { DataSource } from 'typeorm';
import { getLogger } from '@/utils/loggers';
const logger = getLogger('DATABASE');

const db = new DataSource({
    type: 'postgres',
    //host: "localhost",
    url: process.env.DB_URL,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'pfdupxnn',
    entities: ['src/entity/*.ts'],
    synchronize: true
});

db.initialize()
    .then(() => {
        logger.info('Data Source has been initialized!');
    })
    .catch((err) => {
        logger.error('Error during Data Source initialization', err)
    });

export default db;
