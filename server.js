
const express = require('express');
const app = express();
const server = require('http').createServer(app);
var bodyParser = require('body-parser');
const config = require('./config');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const User= require('./models/user.js');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserCtrl = require('./controllers/user');
app.use(bodyParser.json());
app.use(cors());

const userRoutes = require('./routes/users'),
       count = require('./routes/count');
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/count', count);


//DataBase//
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("database connected");
}).catch(err=>{
    console.log(err);
});
 
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


