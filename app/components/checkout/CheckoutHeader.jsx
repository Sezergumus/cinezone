import React from "react";
import { useRouter } from "next/navigation";

export default function Checkout(props) {
  const router = useRouter();
  const { currentStep, setCurrentStep } = props;
  let stepText;

  switch (currentStep) {
    case 1:
      stepText = "Select Seats";
      break;
    case 2:
      stepText = "Payment";
      break;
  }

  const handleBack = () => {
    if (currentStep === 1) {
      router.back();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="checkout-header">
      <div className="checkout-header-container bg-[#222222] w-full">
        <div className="checkout-header-inner max-w-[90%] mx-auto flex justify-between items-center">
          <div className="back-button">
            <button onClick={handleBack} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <p className="text-white">Back</p>
            </button>
          </div>
          <div className="logo py-3">
            <p className="text-white">{stepText}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
