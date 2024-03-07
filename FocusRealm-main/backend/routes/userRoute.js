const express=require("express")
const passport = require("passport");
const {registerUser, loginUser,logout,forgotPassword, resetPassword,  updatePassword,getUserDetails, updateProfile} = require("../controllers/userController")
const { isAuthenticatedUser} = require("../middleware/auth");
const router=express.Router()



router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(isAuthenticatedUser,logout)
router.route("/password/update").put(isAuthenticatedUser,updatePassword)
 router.route("/password/forgot").post(forgotPassword)
 router.route("/password/reset/:token").put(resetPassword)
 router.route("/me").get( isAuthenticatedUser ,getUserDetails)
 router.route("/me/update").put(isAuthenticatedUser,updateProfile)

//  // getUser();
//  router.get("/login/success", (req, res) => {
// 	if (req.user) {
// 		res.status(200).json({
// 			error: false,
// 			message: "Successfully Loged In",
// 			user: req.user,
// 		});
// 	} else {
// 		res.status(403).json({ error: true, message: "Not Authorized" });
// 	}
// });

// router.get("/login/failed", (req, res) => {
// 	res.status(401).json({
// 		error: true,
// 		message: "Log in failure",
// 	});
// });

// router.get("/google", passport.authenticate("google", ["profile", "email"]));

// router.get(
// 	"auth/google/callback",
// 	passport.authenticate("google", {
// 		successRedirect: process.env.FRONTEND_URL,
// 		failureRedirect: "/login/failed",
// 	})
// );

// router.get("/logout", (req, res) => {
// 	req.logout();
// 	res.redirect(process.env.FRONTEND_URL);
// });

module.exports=router