const app = require('./app');
const dotenv = require('dotenv');

const connectDatabase = require('./config/database');
dotenv.config({path : 'Backend/config/config.env'});

// connecting to database
connectDatabase();


app.listen(process.env.PORT,() => {
    console.log(`Sever is Running on http://localhost:${process.env.PORT}`);
});