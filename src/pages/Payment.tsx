import React, { FC } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "components/organisms/CheckoutForm";
import { usePaymentIntent } from "hooks/useCreatePaymentIntent";

export const Payment: FC = () => {
  const aaa: number = 200 // TODO: 後から動的に取得する
  const { clientSecret, error, isLoading, appearance, options, stripePromise } = usePaymentIntent(aaa)

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
