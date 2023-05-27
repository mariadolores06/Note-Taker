const express = require('express');
// const { clog } = require('./middleware/clog');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));


// app.use(clog);

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`Sever startup at http://localhost:${PORT}`);
});