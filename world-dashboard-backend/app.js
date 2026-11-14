const express = require('express');
require('dotenv').config();
const cors = require('cors');
const db = require('./config/db');
const dashboardRoute = require('./route/dashboardRoute');

const app = express();
const port = process.env.PORT || 7010;

app.use(express.json());
app.use(cors());

app.use('/dashboard', dashboardRoute);

app.get('/', (req, res) => {
    res.send('World Dashboard Backend is running!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.send('World Dashboard Backend is running!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});