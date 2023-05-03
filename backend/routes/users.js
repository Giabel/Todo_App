import express from "express";
import { register, login, logout, getMe, updateDetailes, updatePassword, deleteUser} from "../controllers/usersControllers.js";
import authorize from "../middleware/authorize.js";
import { validateResult } from "../middleware/validationResults.js";
// import { loginRules, registerRules } from "../middleware/validator.js";
import{
    loginRules,
    registerRules,
    updateDetailsRules,
    updatePasswordRules,
} from "../middleware/validator.js"

const router = express.Router();

router.post("/register", registerRules, validateResult ,register);
router.post("/login", loginRules, validateResult , login); 
router.get("/logout", authorize, logout);
router.get("/me", authorize, getMe);
router.put("/updatedetails", authorize, updateDetailsRules ,validateResult , updateDetailes);
router.put("/updatepassword", authorize,updatePasswordRules ,validateResult , updatePassword);
router.delete("/delete", authorize, deleteUser);

export default router;