const express = require("express");
require("dotenv").config();
const app = express();
const dbConfig = require("./dbConfig/dbConfig")
const cors = require("cors");

app.use(cors({
    origin:["https://chubham-ihw91pwe8-brighttnuts-projects.vercel.app"],
    methods: ["POST","GET"],
    credentials:true
            }));
const portfoilioRoute = require("./routes/portfolioRotes");

app.use(express.json());

app.use("/api/portfolio", portfoilioRoute);



