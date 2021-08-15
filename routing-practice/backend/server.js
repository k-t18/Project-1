require('dotenv').config();

// const cors = require('cors');

let PORT = process.env.PORT;

const express = require('express');
const app = express();
const connectDB = require('../database/db');
const session = require('express-session');


connectDB();

// const cors = require('cors');
app.use(express.json());
app.use(session({
    secret: 'v-meet',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use('/api/auth', require('../routes/routing-auth'));
app.use('/api', require('../routes/meeting-list-route'));

// app.use(cors());

const server = app.listen(3000, () => console.log(`server running on port 3000`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error ${err}`);
    server.close(() => {
        process.exit(1);
    });
});


