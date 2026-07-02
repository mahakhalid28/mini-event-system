import { Router } from "express";
import { createUser } from "./user.controller";
import { validate } from "../../middleware/validate";
import { createUserSchema } from "../../schemas/user.schema";
import { authenticate } from "../../middleware/auth";

const router = Router();

// POST /api/v1/users
router.post(
  "/",
  validate(createUserSchema),
  createUser
);
// Temporary Protected Route
router.get(
  "/test",
  authenticate,
  (req, res) => {
    res.json({
      success: true,
      user: req.user,
    });
  }
);
export default router;