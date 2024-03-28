import userRoutes from "./routes/user.route.js"
import eploreRoutes from "./routes/explore.route.js"
import express from 'express';
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

app.get("/", (req, res) => {
    res.send("Server is ready");
})

app.use("/api/users", userRoutes)
app.use("/api/explore", eploreRoutes)

app.listen(5000,() => {
    console.log("Server started on http://localhost:5000");
})