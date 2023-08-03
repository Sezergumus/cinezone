import React from "react";

export default function CheckoutFooter(props) {
  const {
    selectedSeats,
    currentStep,
    setCurrentStep,
    paymentData,
    showtimeId,
  } = props;

  const handleContinue = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    } else if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (
        !paymentData.firstName ||
        paymentData.firstName === "" ||
        !paymentData.lastName ||
        paymentData.lastName === "" ||
        !paymentData.email ||
        paymentData.email === ""
      ) {
        alert("Please fill in all fields");
        return;
      }

      fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seats: selectedSeats,
          showtime_id: showtimeId,
          email: paymentData.email,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

      alert("Payment successful");

      window.location.href = "/";
    }
  };

  return (
    <>
      <div className="checkout-footer mt-24">
        <div className="checkout-footer-container flex-col justify-center items-center bg-black">
          <div className="checkout-footer-upper border-b-2 py-6 border-white/50">
            <div className="checkout-footer-legend flex gap-4 w-fit mx-auto">
              <div className="checkout-booked flex items-center gap-2">
                <div className="booked-seat-legend w-8 h-8 rounded-md bg-[#D9D9D9]"></div>
                <p className="text-white">Booked</p>
              </div>
              <div className="checkout-selected flex items-center gap-2">
                <div className="selected-seat-legend w-8 h-8 rounded-md bg-[#01528F]"></div>
                <p className="text-white">Selected</p>
              </div>
              <div className="checkout-available flex items-center gap-2">
                <div className="available-seat-legend w-8 h-8 rounded-md bg-white border-2 border-white"></div>
                <p className="text-white">Available</p>
              </div>
            </div>
          </div>
          <div className="checkout-footer-lower py-6">
            <div className="checkout-footer-lower-container flex justify-between max-w-[90%] mx-auto items-center">
              <div className="checkout-footer-total">
                <p className="text-white leading-3">Total</p>
                <p className="text-white text-xl font-bold">
                  $ {(selectedSeats.length * 10).toFixed(2)}
                </p>
              </div>
              <div className="checkout-footer-continue flex gap-6 items-center">
                <div className="selected-seats">
                  {selectedSeats.length > 0 ? (
                    <p className="text-white font-bold">
                      Seat No(s){" "}
                      <span className="text-[#0086CC]">
                        {selectedSeats
                          .map((seat) => seat.replace("-", ""))
                          .join(", ")}
                      </span>
                    </p>
                  ) : (
                    <p className="text-white font-bold">Select seats</p>
                  )}
                </div>
                <button
                  className="bg-[white] text-black font-bold px-8 py-3 rounded-full transition hover:text-white hover:bg-[#01528F]"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
