import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/", (req, res) => {
    res.send({message: "User profile Route"})
});
router.get("/profile/:username", getUserProfileAndRepos);

export default router;