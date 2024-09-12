import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import useCarts from "../../../Hooks/useCarts";
import useDecoded from "../../../Hooks/useDecoded";
import CheckoutForm from "./CheckoutForm";
import "./PayWithStripe.css";

const stripePromise = loadStripe('pk_test_51PxwAqFUfWsQSXsiS2GJ89u6gbaLyLU3HCrp7DDs0eAzWaxADPJFaPsFOcCVtcsSG8z12FpCk97iVeWo3KxVgYbp00igaiU1Qu');

const PayWithStripe = () => {
   const [clientSecret, setClientSecret] = useState("");

   const [carts] = useCarts();
   const totalCoins = carts.reduce((total, cart) => total + cart.price, 0);

   const decoded = useDecoded();

   /*
   useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/create-payment-intent", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ coins: totalCoins }),
      })
         .then((res) => res.json())
         .then((data) => setClientSecret(data.clientSecret));
   }, [totalCoins]);
   */

   useEffect(() => {
      if (totalCoins > 0) {
         decoded.post('/APIs/create-payment-intent', { coins: totalCoins, payment_method_types: ['card'] })
            .then((result) => {
               setClientSecret(result.data.clientSecret);
               console.log(result.data.clientSecret);
            })
      }
   }, [decoded, totalCoins]);

   const appearance = {
      theme: 'stripe',
   };
   const options = {
      clientSecret,
      appearance,
   };

   return (
      <>
         {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
               <CheckoutForm payment_intent_client_secret={clientSecret} />
            </Elements>
         )}
      </>
   );
};

export default PayWithStripe;