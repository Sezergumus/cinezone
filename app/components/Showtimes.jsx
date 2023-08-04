"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import oppenheimer from "@/public/movie/oppenheimer.png";
import barbie from "@/public/movie/barbie.png";
import midr from "@/public/movie/midr.png";
import indiana_jones from "@/public/movie/indiana-jones.png";
import jaws from "@/public/movie/jaws.png";
import inglourious from "@/public/movie/inglourious_basterds.png";
import django from "@/public/movie/django.png";
import pulp from "@/public/movie/pulp-fiction.png";

export default function Showtimes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
    e.currentTarget.classList.remove("cursor-grab");
    e.currentTarget.classList.add("cursor-grabbing");
  };

  const handleMouseLeave = (e) => {
    setDragging(false);
    e.currentTarget.classList.remove("cursor-grabbing");
    e.currentTarget.classList.add("cursor-grab");
  };

  const handleMouseUp = (e) => {
    setDragging(false);
    e.currentTarget.classList.remove("cursor-grabbing");
    e.currentTarget.classList.add("cursor-grab");
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = x - startX;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const movies = [
    {
      name: "Oppenheimer",
      image: oppenheimer,
      link: "oppenheimer",
    },
    {
      name: "Barbie",
      image: barbie,
      link: "barbie",
    },
    {
      name: "Mission Impossible",
      image: midr,
      link: "mission-impossible-7",
    },
    {
      name: "Indiana Jones",
      image: indiana_jones,
      link: "indiana-jones-5",
    },
    {
      name: "Jaws",
      image: jaws,
      link: "jaws",
    },
    {
      name: "Inglourious Basterds",
      image: inglourious,
      link: "inglourious-basterds",
    },
    {
      name: "Django",
      image: django,
      link: "django",
    },
    {
      name: "Pulp Fiction",
      image: pulp,
      link: "pulp-fiction",
    },
  ];

  const handlePrevClick = () => {
    const slider = document.querySelector(".showtimes-slider-wrapper");
    const slides = document.querySelectorAll(".showtimes-slider-item");

    setCurrentSlide((prev) => (prev === 0 ? movies.length - 1 : prev - 1));

    if (currentSlide === 0) {
      slider.scrollBy({
        left: slides[0].offsetWidth * movies.length + 16 * movies.length,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: -(slides[0].offsetWidth + 16),
        behavior: "smooth",
      });
    }
  };

  const handleNextClick = () => {
    const slider = document.querySelector(".showtimes-slider-wrapper");
    const slides = document.querySelectorAll(".showtimes-slider-item");

    setCurrentSlide((prev) => (prev === movies.length - 1 ? 0 : prev + 1));

    if (currentSlide === movies.length - 1) {
      slider.scrollBy({
        left: -(slides[0].offsetWidth * movies.length + 16 * movies.length),
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: slides[0].offsetWidth + 16,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="showtimes mt-16">
      <div className="showtimes-container">
        <div className="showtimes-inner-container max-w-[70vw] mx-auto">
          <div className="showtimes-header">
            <h1 className="text-center text-3xl font-bold">SHOWTIMES</h1>
            <div className="showtimes-header-filters flex">
              <div className="showtimes-header-btns flex gap-4">
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
            </div>
          </div>
          <div className="showtimes-movies mt-6">
            <div className="showtimes-slider-container relative">
              <div
                className="showtimes-slider-wrapper flex overflow-x-auto cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
              >
                {movies.map((movie, index) => (
                  <div
                    className="showtimes-slider-item w-1/5 min-w-[20%] mr-8 last:mr-0"
                    key={index}
                  >
                    <div className="showtimes-slider-item-inner">
                      <div className="showtimes-slider-item-img rounded-[12px]">
                        <Image
                          src={movie.image}
                          alt={movie.name}
                          className="object-cover w-full"
                        />
                        <div className="roll-over opacity-0 absolute w-full h-full top-0 left-0 z-10 hover:opacity-100">
                          <div className="movie-rating absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] flex gap-2 items-center">
                            <div className="smooth-star-png">
                              <img
                                src="/movie/star.png"
                                width={32}
                                height={32}
                              />
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
                      <div className="showtimes-slider-item-info">
                        <div className="showtimes-slider-item-info-inner mt-2">
                          <h1 className="text-black text-xl text-center">
                            {movie.name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handlePrevClick}
                className="absolute left-[-50px] top-[50%] translate-y-[-50%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextClick}
                className="absolute right-[-50px] top-[50%] translate-y-[-50%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
