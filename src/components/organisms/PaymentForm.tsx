import { FC, useState, useEffect, FormEvent } from 'react'
import * as api from 'api/PaymentApi'
import { useQuery } from '@tanstack/react-query'
import {useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "components/organisms/CheckoutForm";
import { Stripe, loadStripe, Appearance, StripeElementsOptions } from "@stripe/stripe-js";
import getStripPromise from 'lib/stripeClient';

const stripePromise = getStripPromise()

export const PaymentForm: FC = () => {
  // const [clientSecret, setClientSecret] = useState<string|undefined>();
    
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ['createPaymentIntent'],
  //   queryFn: () => api.createPaymentIntent({ total_price: 300 }).then((response) => setClientSecret(response.data))
  // })
  
  // if (data) {
  //   useEffect(() => {
  //     setClientSecret(data)
  //   }, []);
  // }
  
  // const options = {
  //   clientSecret: clientSecret,
  // };
  
	// event.preventDefault();


  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
