"use client";

import React, { useState, useEffect } from "react";

export default function CheckoutSeat(props) {
  const { showtime, selectedSeats, setSelectedSeats } = props;
  const [unavailableSeats, setUnavailableSeats] = useState([]); // ["A-1", "B-1"]
  const [bookedSeats, setBookedSeats] = useState([]); // ["A-1", "B-1"]
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (showtime) {
      const newRows = [];
      for (
        let charCode = showtime.seats_row.charCodeAt(0);
        charCode >= "A".charCodeAt(0);
        charCode--
      ) {
        newRows.push(String.fromCharCode(charCode));
      }
      setRows(newRows);

      const seatArrangement = JSON.parse(showtime.seat_arrangement);

      const newUnavailableSeats = [];

      for (const row in seatArrangement) {
        for (const col in seatArrangement[row]) {
          const seatNum = seatArrangement[row][col];
          newUnavailableSeats.push(`${row}-${seatNum}`);
        }
      }

      setUnavailableSeats(newUnavailableSeats);

      const seats = showtime.reserved_seats.flatMap((seat) => JSON.parse(seat));

      console.log(seats);

      setBookedSeats(seats);
    }
  }, [showtime]);

  const handleSeatClick = (row, col) => {
    if (selectedSeats.length >= 5 && !selectedSeats.includes(`${row}-${col}`)) {
      alert("You can only select up to 5 seats");
      return;
    } else {
      const seat = `${row}-${col}`;
      const seatElement = document.getElementById(seat);

      if (selectedSeats.includes(seat)) {
        setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        seatElement.classList.remove("selected");
      } else {
        setSelectedSeats([...selectedSeats, seat]);
        seatElement.classList.add("selected");
      }
    }
  };

  return (
    <>
      <div className="checkout-seat-container mt-12">
        <div className="checkout-seat w-3/4 mx-auto flex flex-col gap-8 justify-center items-center">
          <div className="checkout-seat-screen flex flex-col justify-center items-center">
            <svg
              width="747"
              height="66"
              viewBox="0 0 747 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.72092 63.78L0.0409199 36.61C-0.012686 36.3491 -0.0136327 36.0801 0.0381354 35.8188C0.0899035 35.5575 0.193343 35.3092 0.342384 35.0884C0.491424 34.8677 0.683062 34.6789 0.90605 34.5332C1.12904 34.3875 1.37888 34.2878 1.64092 34.24C110.371 11.84 238.741 0 373.041 0C507.341 0 635.711 11.84 744.441 34.24C744.703 34.2878 744.953 34.3875 745.176 34.5332C745.399 34.6789 745.59 34.8677 745.739 35.0884C745.888 35.3092 745.992 35.5575 746.044 35.8188C746.095 36.0801 746.094 36.3491 746.041 36.61L740.401 63.78C740.293 64.298 739.983 64.752 739.541 65.0426C739.099 65.3331 738.559 65.4365 738.041 65.33C631.391 43.33 505.241 31.75 373.041 31.75C240.841 31.75 114.731 43.36 8.04092 65.33C7.5285 65.4248 6.9993 65.3159 6.56599 65.0264C6.13268 64.7369 5.82947 64.2897 5.72092 63.78Z"
                fill="#4C4C4C"
              />
            </svg>
            <h1>SCREEN</h1>
          </div>
          <div className="checkout-seat-seats">
            <div className="checkout-seats-rows flex flex-col items-center justify-center gap-2">
              {rows.map((row) => (
                <div
                  className="checkout-seats-row flex gap-4 items-center"
                  key={row}
                >
                  <h1>{row}</h1>
                  {Array.from({ length: showtime.seats_col }).map((_, i) => {
                    const currentSeat = `${row}-${i + 1}`;
                    if (unavailableSeats.includes(currentSeat)) {
                      return (
                        <div
                          key={i}
                          className="unavailable-seat w-10 h-10 opacity-0"
                        ></div>
                      );
                    } else if (selectedSeats.includes(currentSeat)) {
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            handleSeatClick(row, i + 1);
                          }}
                          className="checkout-seat-button bg-white w-10 h-10 rounded-md border-2 border-black hover:bg-[#01528FC7] hover:text-white selected"
                          id={currentSeat}
                        >
                          {i + 1}
                        </button>
                      );
                    } else if (bookedSeats.includes(currentSeat)) {
                      return (
                        <div
                          key={i}
                          className="checkout-seats bg-[#D9D9D9] w-10 h-10 rounded-md border-2 border-black booked flex items-center justify-center"
                          id={currentSeat}
                        >
                          {i + 1}
                        </div>
                      );
                    } else {
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            handleSeatClick(row, i + 1);
                          }}
                          className="checkout-seat-button bg-white w-10 h-10 rounded-md border-2 border-black hover:bg-[#01528FC7] hover:text-white"
                          id={currentSeat}
                        >
                          {i + 1}
                        </button>
                      );
                    }
                  })}

                  <h1>{row}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
