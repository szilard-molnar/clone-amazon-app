const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JB9YsL9dR4JdSuULZ47Sm1RBNBx18Q1fBm49jb2Hqjo6hH1mb0uSkhBseCwZcBkm6wl5FeLM02tFWtvDfssWcDi00rFzHwO2D");

// API configuration

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(201).send('hello world'));

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-6ae1d/us-central1/api