const express = require('express');
const app = express();
const PORT = 5500;
const { dbConnection } = require('./config/config');
const routes = require('./routes/tasks');

app.use(express.json());

app.use('/', routes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));