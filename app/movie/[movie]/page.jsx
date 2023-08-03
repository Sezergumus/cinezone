import React from 'react'
import Header from '../../components/Header'
import Movie from '../../components/Movie'
import Footer from '../../components/Footer'

export default function page({ params }) {
    const movie = params.movie

    return (
        <>
            <Header />
            <Movie params={movie} />
            <Footer />
        </>
    )
}
