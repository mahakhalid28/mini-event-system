import { io } from "../../server";
export const processPaymentWebhook = async (
  payload: {
    event: string;
    reservationId: string;
    amount: number;
  }
) => {

  switch (payload.event) {

    case "payment.success":

      console.log("Payment Successful");

      console.log(
        `Reservation: ${payload.reservationId}`
      );

      console.log(
        `Amount: ${payload.amount}`
      );
       console.log(" Updating reservation status to PAID...");
 io.to("organizer-1").emit("payment-updated", {
  reservationId: payload.reservationId,
  status: "PAID",
  amount: payload.amount,
});


      break;

    case "payment.failed":

      console.log(" Payment Failed");

      break;

    default:

      console.log("Unknown event:", payload.event);

  }

};