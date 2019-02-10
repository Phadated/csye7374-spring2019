const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const auth = require('basic-auth');
var StatsD = require('node-statsd');
var client = new StatsD();
global.client =client;

require('dotenv').config()

const {getHomePage} = require('./routes/index');
const {getPingPage} = require('./routes/index');
// const {createuser} = require('./routes/login');
// const {resetpassword} = require('./routes/resetpassword');
// const {addTransaction, deleteTransaction} = require('./routes/transaction');
// const {getDashboardPage} = require('./routes/login');
// const {getTransaction, editTransaction} = require('./routes/transaction');
// const {getAttachments, addAttachments, editAttachments,deleteAttachments} = require('./routes/attachment');

const port = 8080;

//var config = require('./config.js').get(process.env.NODE_ENV);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);
// console.log(process.env.DB_NAME);
// console.log(process.env.S3_BUCKET);
// console.log(process.env.REGION);
// console.log(process.env.DOMAINNAME);
// console.log("hi");

// const db = mysql.createConnection ({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });
// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     db.query('CREATE DATABASE IF NOT EXISTS '+process.env.DB_NAME, function (err) {// create db if not exist
//         if (err) throw err;
//         console.log("database created.");
//         db.query('USE csye6225' , function (err) {
//           if (err) throw err;
//           db.query('create table IF NOT EXISTS user('
//             + 'ID INT NOT NULL AUTO_INCREMENT,'
//             + 'username VARCHAR(100) NOT NULL,'
//             + 'password VARCHAR(100) NOT NULL,'
//             + 'PRIMARY KEY ( ID )'
//             +  ')', function (err) {
//                 if (err) throw err;
//                 console.log("user table created.");
//                 db.query('create table IF NOT EXISTS transaction('
//                 + 'ID VARCHAR(500) NOT NULL,'
//                 + 'description VARCHAR(100) NOT NULL,'
//                 + 'merchant VARCHAR(100) NOT NULL,'
//                 + 'amount VARCHAR(100) NOT NULL,'
//                 + 'date VARCHAR(100) NOT NULL,'
//                 + 'category VARCHAR(100) NOT NULL,'
//                 + 'user_id int NOT NULL,'
//                 + 'PRIMARY KEY ( ID ),'
//                 + 'foreign key (user_id) references user (ID)'
//                 +  ')', function (err) {
//                     if (err) throw err;
//                     console.log("transaction table created.");
//                     db.query('create table IF NOT EXISTS attachment('
//                     + 'ID VARCHAR(500) NOT NULL,'
//                     + 'url VARCHAR(500) NOT NULL,'
//                     + 'filename VARCHAR(100) NOT NULL,'
//                     + 'transaction_id VARCHAR(500) NOT NULL,'
//                     + 'PRIMARY KEY ( ID ),'
//                     + 'foreign key (transaction_id) references transaction (ID)'
//                     +  ')', function (err) {
//                         if (err) throw err;
//                         console.log("attachment table created.");
//                     });
//                 });
//           });
          
          
//         });
//       });
//     console.log('Connected to database');
// });
// // }

// global.db = db;
//global.config = config;


// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

app.get('/', getHomePage);
app.get('/ping', getPingPage);

// app.post('/user/register', createuser);

// app.post('/user/resetpassword', resetpassword);

// app.post('/transaction', addTransaction);

// app.delete('/transaction/:id', deleteTransaction);

// app.get('/time', getDashboardPage);

// app.get('/transaction', getTransaction);

// app.put('/transaction/:id', editTransaction);

// app.post('/transaction/:id/attachments', addAttachments);

// app.delete('/transaction/:id/attachments/:attachmentid', deleteAttachments);

// app.put('/transaction/:id/attachments/:attachmentid', editAttachments);

// app.get('/transaction/:id/attachments', getAttachments);

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

