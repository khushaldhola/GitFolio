import express from "express";
import passport from "passport";

// https://www.passportjs.org/packages/passport-github2/
// https://github.com/cfsghost/passport-github/blob/master/examples/login/app.js
const router = express.Router();

// router.get('/login', (req, res) => {
//     res.send("uuu Loged In!! miracle you made till now!");
// });

router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));

router.get(
	"/github/callback",
	passport.authenticate("github", { failureRedirect: process.env.CLIENT_BASE_URL + "/login" }),
	function (req, res) {
    // Successful authentication, redirect home.
		res.redirect(process.env.CLIENT_BASE_URL);
	}
);

router.get("/check", (req, res) => {
	if (req.isAuthenticated()) {
		res.send({ user: req.user });
	} else {
		// console.log("Authentication failed, in check") done
		res.send({ user: null });
	}
});

router.get("/logout", (req, res) => {
	req.session.destroy((err) => {
		res.json({ message: "Logged out" });
	});
});

export default router;