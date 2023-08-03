"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import oppenheimer from '@/public/slider/oppenheimer.jpg'
import barbie from '@/public/slider/barbie.jpg'
import midr from '@/public/slider/mission_impossible.webp'
import indiana_jones from '@/public/slider/indiana-jones.jpg'

export default function Hero() {
    const [slideIndex, setSlideIndex] = useState(0);

    const slideLeft = () => {
        if (slideIndex === 0) {
            setSlideIndex(3);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }

    const slideRight = () => {
        if (slideIndex === 3) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    }

    useEffect(() => {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slider-item');
        const slide = slides[slideIndex];
        slider.scrollTo({
            left: slide.offsetLeft,
            behavior: 'smooth'
        });

        const navDots = document.querySelectorAll('.nav-dots');
        navDots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.remove('opacity-75')
                dot.classList.add('opacity-100');
            } else {
                dot.classList.remove('opacity-100');
                dot.classList.add('opacity-75');
            }
        }
        );
    }, [slideIndex]);

    return (
        <div className="hero">
            <div className="hero-container w-full mx-auto">
                <div className="slider-wrapper relative">
                    <div className="slider flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
                        <div className="slider-item snap-start flex-[1_0_100%] h-fit">
                            <Image src={oppenheimer} alt="oppenheimer" className='object-cover aspect-video max-h-[800px] w-full' />
                        </div>
                        <div className="slider-item snap-start flex-[1_0_100%] h-fit">
                            <Image src={barbie} alt="oppenheimer" className='object-cover aspect-video max-h-[800px] w-full' />
                        </div>
                        <div className="slider-item snap-start flex-[1_0_100%] h-fit">
                            <Image src={midr} alt="oppenheimer" className='object-cover aspect-video max-h-[800px] w-full' />
                        </div>
                        <div className="slider-item snap-start flex-[1_0_100%] h-fit">
                            <Image src={indiana_jones} alt="oppenheimer" className='object-cover aspect-video max-h-[800px] w-full' />
                        </div>
                    </div>
                    <div className="slider-nav flex items-center justify-center gap-x-4 absolute bottom-8 left-[50%] translate-x-[-50%] z-[1]">
                        <div className="slide-left" onClick={() => slideLeft()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className='nav-dots w-3 h-3 rounded-full bg-[#fff] opacity-75 transition-opacity hover:opacity-100 cursor-pointer' onClick={() => setSlideIndex(0)}></div>
                        <div className='nav-dots w-3 h-3 rounded-full bg-[#fff] opacity-75 transition-opacity hover:opacity-100 cursor-pointer' onClick={() => setSlideIndex(1)}></div>
                        <div className='nav-dots w-3 h-3 rounded-full bg-[#fff] opacity-75 transition-opacity hover:opacity-100 cursor-pointer' onClick={() => setSlideIndex(2)}></div>
                        <div className='nav-dots w-3 h-3 rounded-full bg-[#fff] opacity-75 transition-opacity hover:opacity-100 cursor-pointer' onClick={() => setSlideIndex(3)}></div>
                        <div className="slide-right" onClick={() => slideRight()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
