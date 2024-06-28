import React, { FC, useContext } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "components/organisms/CheckoutForm";
import { usePaymentIntent } from "hooks/useCreatePaymentIntent";
import { CartContext } from 'hooks/CartContext';

export const Payment: FC = () => {
  const cartContext = useContext(CartContext);
	
	if (!cartContext) {
		throw new Error('CartContext not found');
	}

	const { cartTotal } = cartContext;

  const { clientSecret, error, isLoading, appearance, options, stripePromise } = usePaymentIntent(cartTotal)

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
