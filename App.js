const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const usersRouter = require('./routers/usersRouter');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json()); //body 를 json으로 뿌려줌

app.use('/users',usersRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log( `Server Listening at ${PORT}`);