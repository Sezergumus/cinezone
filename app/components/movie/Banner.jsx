import React from 'react'
import Image from 'next/image'

export default function Banner(props) {
    const movie = props.movie
    
    const convertDuration = (duration) => {
        const hours = Math.floor(duration / 60)
        const minutes = duration % 60
        return `${hours} hrs ${minutes} mins`
    }

    return (
        <div className="movie-upper-container w-full relative bg-[#00000045]">
        <div className="movie-banner-container w-3/4 mx-auto py-8 flex gap-4">
        <Image src={movie.poster} alt={movie.title} objectFit="cover" width={220} height={360} />
        <div className="movie-details flex flex-col justify-between py-8">
            <div className="movie-title">
            <h1 className="text-white text-3xl font-bold mb-1">{movie.title}</h1>
            <h3 className="text-white text-xl"><b>{movie.age_rating}</b> | {convertDuration(movie.duration)} | {movie.release_year}</h3>
            </div>
            <div className="movie-info flex flex-col gap-2">
            <div className="movie-genre text-white">
                <h3><b>Genre:</b> Biopic, Historical, Thriller</h3>
            </div>
            <div className="movie-director text-white">
                <h3><b>Director:</b> Christopher Nolan</h3>
            </div>
            <div className="movie-cast text-white">
                <h3><b>Cast:</b> Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr.</h3>
            </div>
            </div>
            <div className="movie-btns flex gap-4 w-full">
            <button className="movie-btn-buy bg-white font-bold px-4 py-2 rounded-md w-1/2">Buy Tickets</button>
            <button className="movie-btn-trailer text-white font-bold bg-[#ffffff00] px-4 py-2 rounded-md border-white border-2 w-1/2">Trailer</button>
            </div>
        </div>
        </div>
        </div>
    )
}
