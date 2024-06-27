import { useState, useEffect } from 'react'
import * as api from 'api/PaymentApi'
import { useQuery } from '@tanstack/react-query'
import { Stripe, loadStripe, Appearance, StripeElementsOptions } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51Mh5klHJVPH1M5dhqhz8JrT28zYHB4qMm82srnsoUQgR3apo3Ejy6TSgihrwRZ5BsSFnQBZyRoS93jXRSAobjcad00n9xO218T");

export const usePaymentIntent = (total_price: number) => {
  const [clientSecret, setClientSecret] = useState<string|undefined>();
  
  const { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ['createPaymentIntent'],
    queryFn: () => api.createPaymentIntent({ total_price: total_price }).then((response) => setClientSecret(response.data))
  })
  
  if (data) {
    useEffect(() => {
      setClientSecret(data)
    }, []);
  }
  
  const appearance: Appearance = {
    theme: 'stripe',
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

	return { clientSecret, error, isLoading, appearance, options, stripePromise }
}
