"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Movies() {
  const [movies, setMovies] = useState(null);

  const getMovies = async () => {
    const res = fetch("/api/movies?cinema_id=1");
    const data = await (await res).json();
    setMovies(data.rows);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies mt-24">
      <div className="movies-container w-full mx-auto max-w-[75vw]">
        <div className="movies-header flex flex-col gap-2 justify-center items-center">
          <h1 className="text-4xl font-bold">Movies</h1>
          <div className="movies-header-filters flex justify-between items-center w-full">
            <div className="movies-header-btns flex gap-4">
              <div className="now-playing border-r-2 border-black pr-4 py-2 cursor-pointer">
                <span className="hover:bg-[#fff] text-black text-xl font-bold">
                  Now Playing
                </span>
              </div>
              <div className="coming-soon py-2 cursor-pointer">
                <span className="hover:bg-[#fff] text-black text-xl">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="div"></div>
          </div>
        </div>
        <div className="movies-inner">
          {movies ? (
            movies.map((movie, index) => {
              return (
                <div className="movie-card-item mt-4" key={index}>
                  <div className="movie-card-item-inner">
                    <div className="movie-card-item-img relative">
                      <img
                        src={movie.poster}
                        className="object-cover w-full h-full"
                      />
                      <div className="roll-over opacity-0 absolute w-full h-full top-0 left-0 z-10 hover:opacity-100">
                        <div className="movie-rating absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex gap-2 items-center">
                          <div className="smooth-star-png">
                            <img src="/movie/star.png" width={32} height={32} />
                          </div>
                          <div className="rating text-white text-2xl font-bold">
                            9
                          </div>
                        </div>
                        <div className="roll-over-btn-container w-[80%] absolute bottom-[16px] left-1/2 translate-x-[-50%]">
                          <Link
                            href={`/movie/${movie.link}`}
                            className="inline-block py-4 bg-[white] text-black text-center w-full rounded-[8px] hover:bg-[black] hover:text-white"
                          >
                            Buy Tickets
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="movie-card-item-title mt-2">
                      <h3 className="text-xl text-center">{movie.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
