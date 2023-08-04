"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Banner from "@/app/components/movie/Banner";
import ShowtimeDates from "@/app/components/movie/ShowtimeDates";
import Halls from "@/app/components/movie/Halls";

export default function Movie(props) {
  const router = useRouter();
  const movieName = props.params;
  const movieArr = [
    "oppenheimer",
    "barbie",
    "mission-impossible-7",
    "indiana-jones-5",
    "jaws",
    "inglourious-basterds",
    "django-unchained",
    "pulp-fiction",
  ];
  const [movie, setMovie] = useState(null);
  const [showtimes, setShowtimes] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateShowtimes, setSelectedDateShowtimes] = useState([]);
  const [firstRender, setFirstRender] = useState(true);

  if (!movieArr.includes(movieName)) {
    router.push("/404");
  }

  const getMovie = async () => {
    const res = fetch(`/api/movies?movie_link=${movieName}`);
    const data = await (await res).json();
    setMovie(data.rows[0]);
  };

  const getShowTimes = async () => {
    const res = fetch(`/api/showtimes?movie_id=${movie.id}`);
    const data = await (await res).json();
    const transformedData = data.rows.map((showtime) => {
      const date = new Date(showtime.start_time);

      const dateStr = date.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
      });
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let timeStr = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
      const day = date.toLocaleDateString("en-US", { weekday: "short" });
      const dayNum = date.toLocaleDateString("en-US", { day: "numeric" });

      return {
        ...showtime,
        start_date: dateStr,
        start_time: timeStr,
        day: day,
        dayNum: dayNum,
      };
    });
    setShowtimes(transformedData);
    if (firstRender) {
      setSelectedDate(transformedData[0].start_date);
      setFirstRender(false);
    }
    setUniqueDates([
      ...new Map(
        transformedData.map((item) => [
          item.start_date,
          { day: item.day, dayNum: item.dayNum },
        ])
      ).values(),
    ]);
  };

  useEffect(() => {
    getMovie();
    if (movie) {
      getShowTimes();
    }
  }, [movie]);

  useEffect(() => {
    const result = showtimes.filter(
      (showtime) => showtime.start_date === selectedDate
    );
    setSelectedDateShowtimes(result);
  }, [selectedDate]);

  return (
    <div className="movie">
      <div className="movie-container w-full mx-auto">
        {
          // if movie exists return movie name
          movie ? (
            <Banner movie={movie} />
          ) : (
            <div className="movie-name-text">
              <h1>Movie not found</h1>
            </div>
          )
        }
        <div className="movie-showtimes w-3/4 mx-auto mt-12">
          {uniqueDates.length > 0 ? (
            <ShowtimeDates
              uniqueDates={uniqueDates}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          ) : (
            <p>Loading...</p>
          )}
          {selectedDateShowtimes.length > 0 ? (
            <Halls selectedDateShowtimes={selectedDateShowtimes} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
