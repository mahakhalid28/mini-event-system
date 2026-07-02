import { Router } from "express";

import { paymentWebhook } from "./webhook.controller";
import { validate } from "../../middleware/validate";
import { paymentWebhookSchema } from "../../schemas/webhook.schema";

const router = Router();

router.post(
  "/payment",
  validate(paymentWebhookSchema),
  paymentWebhook
);

export default router;