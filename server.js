require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

app.use(bodyParser.json());

app.use("/api", schoolRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));