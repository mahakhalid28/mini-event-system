import { Router } from "express";
import { createUser } from "./user.controller";
import { validate } from "../../middleware/validate";
import { createUserSchema } from "../../schemas/user.schema";

const router = Router();

// POST /api/v1/users
router.post(
  "/",
  validate(createUserSchema),
  createUser
);

export default router;