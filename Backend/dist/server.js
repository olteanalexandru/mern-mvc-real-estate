"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./Middleware/errorMiddleware');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
connectDB();
app.use(express.json());
//middleware:
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);
app.listen(port, () => console.log('listening on port ' + port));
