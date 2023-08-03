"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CheckoutHeader from "@/app/components/checkout/CheckoutHeader";
import CheckoutBanner from "@/app/components/checkout/CheckoutBanner";
import CheckoutSeat from "@/app/components/checkout/CheckoutSeat";
import CheckoutPayment from "@/app/components/checkout/CheckoutPayment";
import CheckoutFooter from "@/app/components/checkout/CheckoutFooter";
import Footer from "@/app/components/Footer";

export default function Page() {
  const searchParams = useSearchParams();
  const showtimeId = searchParams.get("s");

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showtimeData, setShowtimeData] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentData, setPaymentData] = useState(null); // { firstName, lastName, email }

  const getShowtime = async () => {
    const res = await fetch(`/api/showtimes?showtime_id=${showtimeId}`);
    const data = await res.json();

    setShowtimeData(data[0]);
  };

  useEffect(() => {
    getShowtime();
  }, []);

  return (
    <>
      <CheckoutHeader
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <CheckoutBanner />
      {currentStep === 1 && (
        <CheckoutSeat
          showtime={showtimeData}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
      )}
      {currentStep === 2 && (
        <CheckoutPayment
          paymentData={paymentData}
          setPaymentData={setPaymentData}
        />
      )}
      <CheckoutFooter
        selectedSeats={selectedSeats}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        paymentData={paymentData}
        showtimeId={showtimeId}
      />
      <Footer page={"checkout"} />
    </>
  );
}
