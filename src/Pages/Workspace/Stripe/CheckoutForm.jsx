import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useDecoded from "../../../Hooks/useDecoded";


const CheckoutForm = () => {
   const stripe = useStripe();
   const elements = useElements();

   const [message, setMessage] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const decoded = useDecoded();

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!stripe || !elements) {
         return;
      }

      setIsLoading(true);

      const { error, paymentIntent } = await stripe.confirmPayment({
         elements,
         confirmParams: {
            return_url: 'http://localhost:3000/confirmation',
         },
         redirect: 'if_required'
      });
      console.log(paymentIntent);
      if (error) {
         setMessage(error.message);
         setIsLoading(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
         // Payment succeeded, send data to your server
         // const response = await fetch('/payments', {
         //    method: 'POST',
         //    headers: {
         //       'Content-Type': 'application/json',
         //    },
         //    body: JSON.stringify({ data: { /* Your data to store in MongoDB */ } }),
         // });

         const doc = {
            paymentId: paymentIntent.id,
            amount: paymentIntent.amount,
            status: paymentIntent.status,
         }

         const response = await decoded.post('/APIs/payments', { doc: doc })

         if (response.status === 200) {
            setMessage('Payment succeeded and data stored successfully!');
         } else {
            setMessage('Payment succeeded but failed to store data.');
         }

         setIsLoading(false);
      } else {
         setMessage('Payment failed, please try again.');
         setIsLoading(false);
      }
   };

   const paymentElementOptions = {
      layout: 'tabs'
   };

   return (
      <form id="payment-form" onSubmit={handleSubmit}>
         <PaymentElement id="payment-element" options={paymentElementOptions} />
         <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
               {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
            </span>
         </button>
         {message && <div id="payment-message">{message}</div>}
      </form>
   );
}


export default CheckoutForm;