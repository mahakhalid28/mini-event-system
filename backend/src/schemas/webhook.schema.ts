import { z } from "zod";

export const paymentWebhookSchema = z.object({
  body: z.object({
    event: z.string(),

    reservationId: z.string(),

    amount: z.number(),
  }),
});