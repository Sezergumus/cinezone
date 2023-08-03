import React from "react";

export default function CheckoutPayment(props) {
  const { paymentData, setPaymentData } = props;

  return (
    <>
      <div className="checkout-payment-container mt-12">
        <div className="checkout-payment w-3/4 mx-auto flex justify-center">
          <div className="checkout-payment-form w-1/2">
            <form>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-b-2 border-black px-4 py-2 mb-4"
                onChange={(e) =>
                  setPaymentData({ ...paymentData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-b-2 border-black px-4 py-2 mb-4"
                onChange={(e) =>
                  setPaymentData({ ...paymentData, lastName: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 border-black px-4 py-2 mb-4"
                onChange={(e) =>
                  setPaymentData({ ...paymentData, email: e.target.value })
                }
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
