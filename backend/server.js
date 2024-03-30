import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";

import "./passport/github.auth.js"

import userRoutes from "./routes/user.route.js"
import eploreRoutes from "./routes/explore.route.js"
import authRoutes from "./routes/auth.route.js"
import connectMongoDB from "./db/connectMongoDB.js";

import downloadRoutes from './routes/download.route.js'; 

const app = express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/explore", eploreRoutes)
app.use('/api/download', downloadRoutes);

app.listen(5000,() => {
    console.log("Server started on http://localhost:5000");
    connectMongoDB();
})