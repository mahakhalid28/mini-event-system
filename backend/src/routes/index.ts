import { Router } from "express";
import userRoutes from "../modules/user/user.routes";
import authRoutes from "../modules/auth/auth.routes";
import webhookRoutes from "../modules/webhook/webhook.routes";


const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/webhooks", webhookRoutes);

export default router;