import React from "react";

export default function CheckoutBanner() {
  return (
    <div className="checkout-banner-container">
      <div className="checkout-banner w-full h-64 relative bg-[linear-gradient(0deg,rgba(0,0,0,0.8),rgba(0,0,0,0.1)),url('/movie/oppenheimer-banner.png')] bg-no-repeat bg-cover bg-center">
        <div className="checkout-movie-details text-white absolute bottom-8 left-8">
          <h1 className="font-bold text-2xl">Oppenheimer</h1>
          <h3>
            <b>R15</b> | Cevahir | 00:15 | <b>IMAX</b>
          </h3>
        </div>
      </div>
    </div>
  );
}
