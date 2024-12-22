import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

router.post("/", userController.createUser); // Create a new user
router.post("/login", userController.login); // login

// ... other user routes ...

export default router;
