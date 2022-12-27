const mongoose = require("mongoose");
require('dotenv').config({ path: '.env' });
const mongodbUrl = process.env.MONGODB_URL;

class Database { // Singleton
    connection = mongoose.connection;

    constructor() {
        try {
            this.connection
                .on('open', console.info.bind(console, 'Database connection: open'))
                .on('close', console.info.bind(console, 'Database connection: close'))
                .on('disconnected', console.info.bind(console, 'Database connection: disconnecting'))
                .on('disconnected', console.info.bind(console, 'Database connection: disconnected'))
                .on('reconnected', console.info.bind(console, 'Database connection: reconnected'))
                .on('fullsetup', console.info.bind(console, 'Database connection: fullsetup'))
                .on('all', console.info.bind(console, 'Database connection: all'))
                .on('error', console.error.bind(console, 'MongoDB connection: error:'));
        } catch (error) {
            console.error(error);
        }
    }

    async connect(_username, _password, _dbname) {
        try {
            await mongoose.connect(
                `${mongodbUrl}`,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            );
        } catch (error) {
            console.error(error);
        }
    }

    async close() {
        try {
            await this.connection.close();
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new Database();