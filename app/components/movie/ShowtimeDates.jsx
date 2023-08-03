import React from 'react'

export default function ShowtimeDates(props) {
  const { uniqueDates, selectedDate, setSelectedDate } = props

  const handlePrevClick = () => {
    const slider = document.querySelector('.movie-showtimes-date-container')
    const sliderItems = document.querySelectorAll('.movie-showtime-date-btn')
    const sliderWidth = slider.offsetWidth

    if(slider.scrollLeft === 0) {
      slider.scrollBy({
        left: sliderWidth * (sliderItems.length - 1),
        behavior: 'smooth'
      })
    } else {
      slider.scrollBy({
        left: -50,
        behavior: 'smooth'
      })
    }
  }

  const handleNextClick = () => {
    const slider = document.querySelector('.movie-showtimes-date-container')
    const sliderItems = document.querySelectorAll('.movie-showtime-date-btn')
    const sliderWidth = slider.offsetWidth
    
    if(slider.scrollLeft === slider.offsetWidth + 8) {
      slider.scrollBy({
        left: -sliderWidth * (sliderItems.length - 1),
        behavior: 'smooth'
      })
    } else {
      slider.scrollBy({
        left: 50,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="showtimes-date-wrapper relative w-fit mx-auto">
      <div className="movie-showtimes-date-container flex overflow-x-scroll snap-x snap-mandatory w-1/2 mx-auto gap-2">
        {
          uniqueDates.map((date) => (
            <div className="movie-showtime-date-btn snap-center" key={date}>
              <button className="movie-showtime-date-btn-inner bg-white px-4 py-2 rounded-md border-black border-2 w-[75px] h-[50px] leading-[16px]" onClick={() => setSelectedDate(`${date.dayNum} ${date.day}`) }>
                <h3 className='uppercase text-[16px] font-bold'>{date.day}</h3>
                <h3 className='text-[24px] font-bold'>{date.dayNum}</h3>
              </button>
            </div>
          ))  
        }  
      </div>
      <button onClick={handlePrevClick} className='absolute left-[-50px] top-[50%] translate-y-[-50%]'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={handleNextClick} className='absolute right-[-50px] top-[50%] translate-y-[-50%]'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black opacity-70 hover:opacity-100 transition-opacity cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
