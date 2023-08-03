import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Halls(props) {
  const { selectedDateShowtimes } = props;
  const [halls, setHalls] = useState(new Set());

  useEffect(() => {
    let newHalls = new Set();
    selectedDateShowtimes.forEach((showtime) => {
      newHalls.add(showtime.hall_name);
    });
    setHalls(newHalls);
  }, [selectedDateShowtimes]);

  return (
    <div className="showtimes-halls-container w-full mt-8">
      {Array.from(halls).map((hall) => {
        return (
          <div className="showtimes-hall-container w-full mb-8" key={hall}>
            <div className="showtimes-hall-name mb-2">
              <h3 className="text-2xl font-bold">{hall}</h3>
            </div>
            <div className="showtimes-hall-times">
              <div className="showtimes-hall-times-container flex flex-wrap gap-4">
                {
                  // find the showitme that matches the hall name
                  selectedDateShowtimes
                    .filter((showtime) => showtime.hall_name === hall)
                    .map((showtime) => {
                      return (
                        <div
                          className="showtimes-hall-time-container flex flex-col gap-2"
                          key={showtime.id}
                        >
                          <div className="showtimes-hall-time">
                            <Link
                              href={`/checkout?s=${showtime.id}`}
                              className="border-2 border-black rounded-full px-4 py-1 hover:bg-[#01528F] hover:text-white"
                            >
                              <span className="text-xl font-bold">
                                {showtime.start_time}
                              </span>
                            </Link>
                          </div>
                        </div>
                      );
                    })
                }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
