import { Request, Response } from "express";

import * as webhookService from "./webhook.service";

export const paymentWebhook = async (
  req: Request,
  res: Response
) => {

  await webhookService.processPaymentWebhook(req.body);

  res.status(200).json({
    success: true,
    message: "Webhook processed successfully",
  });

};