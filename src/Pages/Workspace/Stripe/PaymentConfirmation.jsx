import { useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";


const PaymentConfirmation = () => {
   const stripe = useStripe();
   const [message, setMessage] = useState('');

   useEffect(() => {
      if (!stripe) {
         return;
      }

      const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');

      if (!clientSecret) {
         return;
      }

      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
         switch (paymentIntent.status) {
            case 'succeeded':
               setMessage('Payment succeeded!');
               break;
            case 'processing':
               setMessage('Your payment is processing.');
               break;
            case 'requires_payment_method':
               setMessage('Your payment was not successful, please try again.');
               break;
            default:
               setMessage('Something went wrong.');
               break;
         }
      });
   }, [stripe]);

   return (
      <div>
         <h1>Payment Confirmation</h1>
         <p>{message}</p>
      </div>
   );
}

export default PaymentConfirmation;