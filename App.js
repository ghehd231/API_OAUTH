const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const usersRouter = require('./routers/usersRouter');

const app = express();
const db = require('./config/key').mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDb connected...'))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise; 
mongoose.set('useCreateIndex', true);


app.use(morgan('dev'));
app.use(bodyParser.json()); //body 를 json으로 뿌려줌

app.use('/users',usersRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log( `Server Listening at ${PORT}`);