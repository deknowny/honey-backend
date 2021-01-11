const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

const config = require('./config')[process.env.NODE_ENV];
const [PORT, DB] = [config.PORT, config.DATABASE.MONGO.URI];

// Set root static path
app.use(express.static(path.join(__dirname, '../public/')));
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: require('./utils/helpers').helpers
}));
app.set('views', './views');
app.set('view engine', 'handlebars');
app.enable('view cache');

// Parse data from body and cookie
app.use(express.json());
app.use(cookieParser());


app.listen(PORT, (error) => {
    mongoose.connect(DB,    )
});

