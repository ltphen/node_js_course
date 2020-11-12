const express = require('express');
var bodyParser = require('body-parser')

// init and configure passport
const { port } = require('./config');
const Links = require('./Links')
// import cookie parser
const cookieParser=  require('cookie-parser');
// import cors module
const cors = require('cors');

const app = express();
const links = new Links();
app.use(cookieParser());
app.use(cors());

//dot env configuration
import dotenv from 'dotenv'

// load env
dotenv.config()


/**
 * The upcoming lines are not really important in our case but when we have to parse post request we may use them
 */

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
// app.use(bodyParser.json())


app.get('/', async (req, res) => {
  res.send(await links.getAll());
});

app.get('/link/:id', async (req, res) => {
  res.send(await links.getOne(req.params.id));
});

app.delete('/link/:id', async (req, res) => {
  res.send(await links.remove(req.params.id));
});

app.post('/link', async (req, res) => {
  res.send(await links.add({link, description} = req.body ));
});


app.put('/link/:id', async (req, res) => {
  res.send(await links.update(req.params.id, {link, description} = req.body ));
});

app.listen(port, () => {
  console.log('server started http://localhost:'+port);
});