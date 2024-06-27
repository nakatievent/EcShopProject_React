import React, { FC, useState, useEffect } from "react";
import { Stripe, loadStripe, Appearance, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "components/organisms/CheckoutForm";
import * as api from 'api/PaymentApi'
import { useQuery, useMutation } from '@tanstack/react-query'

// import CheckoutForm from "./CheckoutForm";
// import "./App.css";

const stripePromise = loadStripe("pk_test_51Mh5klHJVPH1M5dhqhz8JrT28zYHB4qMm82srnsoUQgR3apo3Ejy6TSgihrwRZ5BsSFnQBZyRoS93jXRSAobjcad00n9xO218T");


export const Payment: FC = () => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const aaa: number = 200
  
  const { data, error, isError, isLoading, isFetched } = useQuery({
  // const { isPending, error, data } = useQuery({
    queryKey: ['payment'],
    queryFn: () => api.createPayment({ total_price: aaa })
  })
  
  useEffect(() => {
    if (data) {
      setClientSecret(data.data);
    }
  }, [data]);

	if (isLoading) {
		return <span>Loading...</span>
	}

	if (isError) {
		return <span>Error: {error.message}</span>
	}
	
	console.log(clientSecret)

  // useEffect(() => {
  //   const data = async () => {
  //     await api.createPayment({ total_price: aaa })
  //   }
  //   console.log(data)
  //   fetch("http://localhost:8000/api/payments/create", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);
  
  // useEffect(() => {
  //   const fetchPayment = async () => {
  //     try {
  //       const data = await api.createPayment({ total_price: aaa });
  //       setClientSecret(data);
  //     } catch (error) {
  //       // setError('Failed to create payment.');
  //     }
  //   };

  //   fetchPayment();
  // }, [aaa]);
  
  // if (data) setClientSecret(data.data)
  
  console.log(33333)
  
  // const clientSecret: string = "pi_3PUT8vHJVPH1M5dh0mx5LFmp_secret_XpzCIFv6jlj9EpPafAxsWczkB"
  

  const appearance: Appearance = {
    theme: 'stripe',
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
