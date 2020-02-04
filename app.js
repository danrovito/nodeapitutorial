const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//import routes
const postsRoute = require('./routes/posts');

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('connected to DB!')
);

//Listener
app.listen(3000);

