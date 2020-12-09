const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session')
const helmet = require('helmet');
require('dotenv').config();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const wallRoutes = require('./routes/wall');
const app = express();

//On utilise helmet pour plusieurs raisons notamment la mise en place du X-XSS-Protection afin d'activer le filtre de script intersites(XSS) dans les navigateurs web
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(session({
  secret: "s3Cur3",
  cookie: { secure: true,
            httpOnly: true,
            domain: 'http://localhost:3000',
          }
  })
);

app.use(bodyParser.json());

// middleware to access from different Routers
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/wall',  wallRoutes);

module.exports = app;