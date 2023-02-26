const path = require('path');
const express = require('express');
const session = require('express-session');
const expressHandlebars = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbInit = require('./config/dbInit');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


const app = express();

const sessionInfo = {
  secret: process.env.COOKIE_SECRET,
  cookie: {
    maxAge: 86400000, //24 hours in milliseconds
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sessionInfo));

function respectNewLine(text) {
  return text.replace(/(\r\n|\n|\r)/gm, '<br>');
}

const hbs = expressHandlebars.create({
  helpers: {
    respectNewLine,
  },
  handlebars: allowInsecurePrototypeAccess(Handlebars)
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

dbInit();

sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.APP_PORT, () =>
    console.log(`Now listening on port ${process.env.APP_PORT}`)
  );
});
